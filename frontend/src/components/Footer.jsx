import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Brand */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-4">Skill<span className="text-yellow-400">Sprint</span></h2>
          <p className="text-sm leading-relaxed">
            Redefine your limits with our premier online quiz platform. Master your IT skills and climb the leaderboard today.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/leaderboard" className="hover:text-blue-400 transition">Leaderboard</Link></li>
            <li><Link to="/login" className="hover:text-blue-400 transition">Login / Sign Up</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Study Materials</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Interview Prep</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">IT Developer Blog</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span>📧</span> info@itdeveloper.in
            </li>
            <li className="flex items-center gap-2">
              <span>🌐</span> www.itdeveloper.in
            </li>
            <li className="mt-4 flex gap-4">
              {/* Social Icons Placeholders */}
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition">in</a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition">tw</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} IT Developer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;