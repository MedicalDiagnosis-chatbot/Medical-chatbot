/*
* * * Notes Here. * * *
* This is a Home/landing page.
*/

import React from 'react';

const ChatbotLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-lg rounded-b-lg">
        <div className="font-bold text-3xl text-purple-700">ChatBotApp</div>
        <div className="flex space-x-6 text-gray-600 font-medium">
          <a href="#about" className="hover:text-purple-800 transition duration-200">About</a>
          <a href="#docs" className="hover:text-purple-800 font-semibold transition duration-200">Docs</a>
          <a href="#login" className="hover:text-purple-800 transition duration-200">Login</a>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="flex justify-center mt-12 mb-16">
        <input
          type="text"
          placeholder="Search..."
          className="px-6 py-4 w-4/5 md:w-1/2 bg-white border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center bg-gradient-to-r from-pink-100 to-yellow-100 mx-8 md:mx-32 p-12 text-center rounded-xl shadow-2xl">
        <p className="text-3xl font-light text-gray-800 mb-6 md:mb-8">
          Experience the power of AI-driven conversations. Let's make chatting fun, efficient, and intelligent!
        </p>
        <button className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-12 rounded-full shadow-xl hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-110">
          Start Now
        </button>
      </div>

      {/* Footer */}
      <footer className="flex justify-center items-center mt-20 mb-10">
        <p className="text-gray-500">© 2024 ChatBotApp - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ChatbotLandingPage;
