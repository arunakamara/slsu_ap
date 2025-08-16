import React, { useState } from 'react';

const Resources = () => {
  // Sample data (replace with real content or API fetch)
  const scholarships = [
    {
      id: 1,
      title: 'SLSU-AP Academic Excellence Scholarship',
      provider: 'SLSU-AP',
      amount: '₹50,000',
      eligibility: 'Open to members with a GPA of 3.5+.',
      deadline: 'April 30, 2025',
      details:
        'This scholarship supports high-achieving Sierra Leonean students in Andhra Pradesh. Apply with your transcript and a 500-word essay on your goals.',
      link: '#', // Placeholder link
    },
    {
      id: 2,
      title: 'Andhra Pradesh International Student Grant',
      provider: 'AP State Government',
      amount: '₹30,000',
      eligibility: 'International students in AP universities.',
      deadline: 'March 15, 2025',
      details:
        'A grant to ease financial burdens for students from abroad. Submit proof of enrollment and residency.',
      link: '#',
    },
  ];

  const studyMaterials = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      type: 'PDF',
      description: 'A beginner’s guide to programming concepts.',
      link: 'https://example.com/cs101.pdf', // Placeholder link
    },
    {
      id: 2,
      title: 'Mathematics for Engineers',
      type: 'Website',
      description: 'Interactive lessons and practice problems.',
      link: 'https://example.com/math',
    },
  ];

  const usefulLinks = [
    {
      id: 1,
      title: 'Andhra University',
      description: 'Official site for university resources and updates.',
      url: 'https://www.andhrauniversity.edu.in',
    },
    {
      id: 2,
      title: 'Sierra Leone Embassy in India',
      description: 'Support and services for Sierra Leonean nationals.',
      url: 'https://example.com/embassy', // Placeholder
    },
    {
      id: 3,
      title: 'Scholarship Portal India',
      description: 'Find more funding opportunities.',
      url: 'https://scholarships.gov.in',
    },
  ];

  // State for expanding scholarship details
  const [expandedScholarship, setExpandedScholarship] = useState(null);

  const toggleScholarship = (id) => {
    setExpandedScholarship(expandedScholarship === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Resources
        </h1>

        {/* Scholarships and Grants */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Scholarships and Grants</h2>
          {scholarships.length === 0 ? (
            <p className="text-gray-600">No scholarships available at this time. Check back soon!</p>
          ) : (
            <div className="space-y-6">
              {scholarships.map((scholarship) => (
                <div key={scholarship.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">{scholarship.title}</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Provider:</strong> {scholarship.provider} | <strong>Amount:</strong>{' '}
                    {scholarship.amount}
                  </p>
                  <p className="text-gray-600 mt-1">
                    <strong>Eligibility:</strong> {scholarship.eligibility}
                  </p>
                  <p className="text-gray-600 mt-1">
                    <strong>Deadline:</strong> {scholarship.deadline}
                  </p>
                  {expandedScholarship === scholarship.id && (
                    <p className="text-gray-600 mt-2">{scholarship.details}</p>
                  )}
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => toggleScholarship(scholarship.id)}
                      className="text-green-800 hover:underline font-medium"
                    >
                      {expandedScholarship === scholarship.id ? 'Hide Details' : 'Show Details'}
                    </button>
                    <a
                      href={scholarship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 hover:underline font-medium"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Study Materials */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Study Materials</h2>
          {studyMaterials.length === 0 ? (
            <p className="text-gray-600">No study materials available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studyMaterials.map((material) => (
                <div key={material.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">{material.title}</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Type:</strong> {material.type}
                  </p>
                  <p className="text-gray-600 mt-2">{material.description}</p>
                  <a
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Access Resource
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Useful Links</h2>
          {usefulLinks.length === 0 ? (
            <p className="text-gray-600">No links available at this time.</p>
          ) : (
            <div className="space-y-4">
              {usefulLinks.map((link) => (
                <div key={link.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800">{link.title}</h3>
                  <p className="text-gray-600">{link.description}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 hover:underline font-medium"
                  >
                    Visit Site
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;