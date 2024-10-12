'use client'
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [urls, setUrls] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:8000/search?query=${query}`)
      .then((res)=> res.json())
      .then((data) => setUrls(data))
      .catch((err) => console.error(err));
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-white p-4">
      <h1 className="text-5xl font-bold mb-5 text-center text-[#0e0e0e]">Search</h1>
      <div className="flex mb-6 w-full max-w-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
          className="border border-gray-300 rounded-l-3xl py-3 px-4 w-full focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-[#0a0a0a] text-white rounded-r-3xl px-4 py-3 hover:bg-[#4e4e4e] transition duration-200 ease-in-out"
        >
          Search
        </button>
      </div>
      
      <ul className="w-full max-w-full bg-white shadow-lg rounded-3xl overflow-hidden">
        {urls.length === 0 ? (
          <li className="py-4 px-6 text-gray-500 text-center">No URLs found. Try searching!</li>
        ) : (
          urls.map((url, index) => (
            <li key={index} className="border-b last:border-b-0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-blue-700 hover:bg-blue-100 transition duration-200 ease-in-out"
              >
                {url}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
