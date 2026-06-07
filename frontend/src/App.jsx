import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import QuizHome from './pages/QuizHome';
import TakeQuiz from './pages/TakeQuiz';
import Leaderboard from './pages/Leaderboard';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        {/* Professional Navbar */}
        <Navbar />

        {/* Main Content (Grows to fill space) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/quiz-home" element={<QuizHome />} />
            <Route path="/take-quiz/:id" element={<TakeQuiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </main>

        {/* Professional Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;