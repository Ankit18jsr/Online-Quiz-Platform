import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState({ total: 0, avgScore: 0, bestSubject: 'N/A' });
  const navigate = useNavigate();
  
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      navigate('/login');
      return;
    }

    // Fetch user results
    api.get(`/api/results/${username}`)
      .then(res => {
        setResults(res.data);
        calculateStats(res.data);
      })
      .catch(err => console.error(err));
  }, [username, navigate]);

  const calculateStats = (data) => {
    if (data.length === 0) return;

    const total = data.length;
    // Calculate Average Percentage
    const totalPercentage = data.reduce((acc, curr) => {
      const percentage = (curr.score / curr.totalQuestions) * 100;
      return acc + percentage;
    }, 0);
    const avgScore = Math.round(totalPercentage / total);

    setStats({ total, avgScore, bestSubject: data[0]?.quizId?.subject || 'General' });
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Hello, {username} 👋</h1>
          <p className="text-gray-500">Here is your performance report.</p>
        </div>
        <button onClick={() => navigate('/quiz-home')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-md transition">
          Take New Quiz
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <p className="text-gray-500 font-semibold uppercase text-xs">Total Quizzes</p>
          <h3 className="text-3xl font-bold text-gray-800">{stats.total}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <p className="text-gray-500 font-semibold uppercase text-xs">Average Score</p>
          <h3 className="text-3xl font-bold text-gray-800">{stats.avgScore}%</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <p className="text-gray-500 font-semibold uppercase text-xs">Recent Subject</p>
          <h3 className="text-3xl font-bold text-gray-800">{stats.bestSubject}</h3>
        </div>
      </div>

      {/* HISTORY TABLE */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Attempt History</h2>
        </div>
        
        {results.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            <p className="mb-4">You haven't taken any quizzes yet.</p>
            <button onClick={() => navigate('/quiz-home')} className="text-blue-600 font-bold hover:underline">Start your first quiz!</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <th className="p-4 font-semibold">Quiz Title</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Score</th>
                  <th className="p-4 font-semibold">Percentage</th>
                  <th className="p-4 font-semibold">Time Taken</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, index) => {
                  const percentage = Math.round((item.score / item.totalQuestions) * 100);
                  const isPass = percentage >= 50; // Simple pass/fail logic

                  return (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-gray-800">
                        {item.quizId?.title || "Deleted Quiz"}
                        <span className="block text-xs text-gray-500 font-normal">{item.quizId?.subject}</span>
                      </td>
                      <td className="p-4 text-gray-600">{new Date(item.date).toLocaleDateString()}</td>
                      <td className="p-4 font-bold">{item.score} / {item.totalQuestions}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${isPass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {percentage}%
                        </span>
                      </td>
                      <td className="p-4 text-gray-500 font-mono text-sm">{item.timeTaken}s</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;