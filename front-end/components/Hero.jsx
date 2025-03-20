import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();

  const handleJoinClick = () => {
    setJoined(true);
    navigate("/register") // Simulate a join action (e.g., later connect to a form or API)
    setTimeout(() => setJoined(false), 2000); // Reset after 2s
  };

  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 bg-amber-50 rounded-full shadow-2xl shadow-amber-100">
          Welcome to SLSU-AP
        </h1>
        <p className="bg-white md:text-xl text-gray-150 font-bold text-2xl mb-6 mt-10 rounded-2xl">
          Uniting Sierra Leonean students in Andhra Pradesh with pride and purpose.
        </p>
        <p className="text-base md:text-lg text-blue-600 mb-8 bg-amber-50 rounded-2xl">
          <strong>Mission:</strong> Building a community that celebrates our heritage and supports academic excellence.
        </p>
        <button
          onClick={handleJoinClick}
          className={`px-6 py-3 hover:cursor-pointer rounded-lg font-semibold text-white transition-colors ${
            joined ? 'bg-green-600' : 'bg-green-800 hover:bg-green-700'
          }`}
        >
          {joined ? 'Welcome Aboard!' : 'Join Us'}
        </button>
      </div>
    </section>
  );
};

export default Hero;