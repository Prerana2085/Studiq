"use client"
// App.jsx
import './index.css';
import React, { useState } from 'react';

const App = () => {
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    alert(`Searching for "${search}" in ${subject} (${year})`);
    // You can replace this alert with your search functionality
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/logo.png" // Place your logo in /public/logo.png
          alt="Studiq Logo"
          className="w-32 mx-auto"
        />
        <h1 className="text-3xl font-bold text-center mt-4 text-blue-700">Welcome to Studiq</h1>
        <p className="text-center text-gray-600 mt-2">Your complete 4-year engineering guide</p>
      </div>

      {/* Year Selection */}
      <div className="w-full max-w-md mb-4">
        <label className="block mb-1 text-gray-700 font-medium">Select Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Choose Year --</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>

      {/* Subject Selection */}
      <div className="w-full max-w-md mb-4">
        <label className="block mb-1 text-gray-700 font-medium">Select Subject</label>
        <input
          type="text"
          placeholder="e.g. Data Structures"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-6">
        <label className="block mb-1 text-gray-700 font-medium">Search Topic / Resource</label>
        <input
          type="text"
          placeholder="e.g. Syllabus, PYQs, Best Channels"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default App;



