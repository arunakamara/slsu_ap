import React from 'react';

const Highlights = () => {
  // Sample data (replace with API fetch later if needed)
  const highlights = [
    {
      id: 1,
      type: 'event',
      title: 'Cultural Night 2025',
      date: 'March 10, 2025',
      description: 'Celebrate Sierra Leonean music, food, and dance!',
    },
    {
      id: 2,
      type: 'news',
      title: 'Scholarship Winners',
      date: 'Feb 15, 2025',
      description: 'Congrats to our 5 scholarship recipients!',
    },
    {
      id: 3,
      type: 'event',
      title: 'Study Workshop',
      date: 'March 20, 2025',
      description: 'Boost your grades with expert tips.',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
          Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="text-gray-600">{item.description}</p>
              <span
                className={`mt-4 inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  item.type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {item.type === 'event' ? 'Event' : 'News'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;