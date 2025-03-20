import React, { useState } from 'react';

const Events = () => {
  // Sample event data (replace with real events or API fetch)
  const upcomingEvents = [
    {
      id: 1,
      title: 'Cultural Night 2025',
      date: 'March 10, 2025',
      time: '6:00 PM',
      location: 'Andhra University Auditorium',
      description: 'Join us for an evening of Sierra Leonean music, dance, and food!',
    },
    {
      id: 2,
      title: 'Study Workshop',
      date: 'March 20, 2025',
      time: '2:00 PM',
      location: 'SLSU-AP Office',
      description: 'Boost your grades with expert study tips.',
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'Independence Day Celebration 2024',
      date: 'April 27, 2024',
      description: 'A vibrant day of parades and speeches.',
      photo: '/Images/independence.jpg',
    },
    {
      id: 4,
      title: 'Welcome Party 2024',
      date: 'January 15, 2024',
      description: 'New students joined the SLSU-AP family!',
      photo: '/Images/airport11.jpg',
    },
  ];

  // State for registration form
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setSubmitted(false); // Reset submission state
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with API call later)
    console.log('Registered:', { event: selectedEvent.title, ...formData });
    setSubmitted(true);
    setTimeout(() => {
      setSelectedEvent(null); // Close form after 2s
      setFormData({ name: '', email: '' }); // Reset form
    }, 2000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Events
        </h1>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
          {upcomingEvents.length === 0 ? (
            <p className="text-gray-600">No upcoming events scheduled. Check back soon!</p>
          ) : (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 p-6 rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 mt-1">
                      <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}
                    </p>
                    <p className="text-gray-600 mt-1"><strong>Location:</strong> {event.location}</p>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </div>
                  <button
                    onClick={() => handleRegisterClick(event)}
                    className="mt-4 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Register
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Registration Form (Modal-like) */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Register for {selectedEvent.title}
              </h3>
              {submitted ? (
                <p className="text-green-600">Registration successful! See you there!</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(null)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Past Events</h2>
          {pastEvents.length === 0 ? (
            <p className="text-gray-600">No past events to show yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 mt-1"><strong>Date:</strong> {event.date}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;