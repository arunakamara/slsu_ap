import React from 'react';

const Profile = ({ user }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Profile
        </h1>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-2">Email: {user.email}</p>
          <p className="text-gray-600 mb-2">University: {user.universityName} ({user.universityType})</p>
          <p className="text-gray-600 mb-2">Level of Education: {user.levelOfEducation}</p>
          <p className="text-gray-600">Course Name: {user.courseName}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;