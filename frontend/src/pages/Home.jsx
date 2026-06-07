import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
                {/* Abstract Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black opacity-80"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="animate-fade-in-up max-w-3xl mx-auto">
                        <span className="bg-blue-900 text-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            New: Java & Python Quizzes
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">IT Skills</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                            Join thousands of developers. Test your knowledge, compete in real-time, and earn your certification.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/quiz-home" className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1">
                                Get Started Free
                            </Link>
                            <Link to="/leaderboard" className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white text-lg font-bold py-4 px-10 rounded-full transition">
                                View Leaderboard
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION (Now Clickable!) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SkillSprint?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We provide a professional environment to test your coding limits.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1: Timed Challenges -> Goes to Quiz Home */}
                        <Link to="/quiz-home" className="block group">
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 h-full">
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">🚀</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">Timed Challenges</h3>
                                <p className="text-gray-600">Simulate real interview pressure with our countdown timer based quizzes.</p>
                            </div>
                        </Link>

                        {/* Feature 2: Live Analytics -> Goes to User Dashboard */}
                        <Link to="/dashboard" className="block group">
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 h-full">
                                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">📊</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">Live Analytics</h3>
                                <p className="text-gray-600">Get instant feedback on your performance with detailed score breakdowns.</p>
                            </div>
                        </Link>

                        {/* Feature 3: Global Leaderboard -> Goes to Leaderboard */}
                        <Link to="/leaderboard" className="block group">
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition duration-300 h-full">
                                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">🏆</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition">Global Leaderboard</h3>
                                <p className="text-gray-600">Compete with peers and showcase your rank to potential employers.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;