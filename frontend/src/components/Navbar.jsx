import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Logo Component
const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-8 w-8 md:h-10 md:w-10 bg-white rounded-full p-1 shadow-md">
    <circle cx="100" cy="100" r="90" fill="#2563EB" />
    <path d="M100 20 L130 80 L190 80 L140 120 L160 180 L100 140 L40 180 L60 120 L10 80 L70 80 Z" fill="#FBBF24" stroke="white" strokeWidth="5" />
    <text x="100" y="150" fontSize="0" textAnchor="middle" fill="white" fontWeight="bold">S</text>
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const isLoggedIn = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    navigate('/');
    setIsOpen(false); // Close menu on logout
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Brand */}
        <Link className="flex items-center gap-3 hover:opacity-80 transition" to="/">
          <Logo />
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            Skill<span className="text-yellow-400">Sprint</span>
          </span>
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/leaderboard" className="font-semibold text-gray-300 hover:text-yellow-400 transition flex items-center gap-1">🏆 Leaderboard</Link>

          {isLoggedIn ? (
            <>
              {userRole === 'Admin' && <Link to="/admin-dashboard" className="font-semibold hover:text-blue-300 transition">Admin Panel</Link>}
              {userRole === 'User' && <Link to="/quiz-home" className="font-semibold hover:text-green-300 transition">Take Quiz</Link>}
              <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-bold transition shadow-md">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-300 font-semibold transition">Login</Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-bold transition shadow-md">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button (Visible on Mobile) */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-4 px-4 pt-2 shadow-inner">
          <Link to="/leaderboard" className="block py-2 text-gray-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>🏆 Leaderboard</Link>
          {isLoggedIn ? (
            <>
              {userRole === 'Admin' && <Link to="/admin-dashboard" className="block py-2 hover:text-blue-300" onClick={() => setIsOpen(false)}>Admin Panel</Link>}
              {userRole === 'User' && <Link to="/quiz-home" className="block py-2 hover:text-green-300" onClick={() => setIsOpen(false)}>Take Quiz</Link>}
              <button onClick={handleLogout} className="block w-full text-left py-2 text-red-400 font-bold">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:text-blue-300" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="block py-2 text-blue-400 font-bold" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;