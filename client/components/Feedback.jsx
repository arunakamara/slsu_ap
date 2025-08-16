import React, { useState } from 'react';

const Feedback = () => {
  // State for feedback form
  const [feedbackData, setFeedbackData] = useState({ name: '', email: '', feedback: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // State for suggestions box
  const [suggestionData, setSuggestionData] = useState({ name: '', suggestion: '' });
  const [suggestions, setSuggestions] = useState([
    // Sample suggestions (replace or fetch from backend)
    { id: 1, name: 'Anonymous', suggestion: 'Host a coding bootcamp for members.', date: 'Feb 20, 2025' },
    { id: 2, name: 'Fatima', suggestion: 'Add more Krio language workshops.', date: 'Feb 18, 2025' },
  ]);
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);

  // Handle feedback form input changes
  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle feedback form submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackData.feedback) {
      alert('Please provide your feedback.');
      return;
    }

    // Simulate submission (replace with API call in production)
    console.log('Feedback submitted:', feedbackData);
    setFeedbackSubmitted(true);
    setFeedbackData({ name: '', email: '', feedback: '' }); // Reset form
    setTimeout(() => setFeedbackSubmitted(false), 2000); // Reset success message
  };

  // Handle suggestion form input changes
  const handleSuggestionChange = (e) => {
    const { name, value } = e.target;
    setSuggestionData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle suggestion form submission
  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    if (!suggestionData.suggestion) {
      alert('Please provide a suggestion.');
      return;
    }

    // Simulate adding suggestion
    const newSuggestion = {
      id: suggestions.length + 1,
      name: suggestionData.name || 'Anonymous',
      suggestion: suggestionData.suggestion,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };
    setSuggestions((prev) => [newSuggestion, ...prev]); // Add to top of list
    setSuggestionSubmitted(true);
    setSuggestionData({ name: '', suggestion: '' }); // Reset form
    setTimeout(() => setSuggestionSubmitted(false), 2000); // Reset success message
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Feedback & Suggestions
        </h1>

        {/* Feedback Form */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Feedback Form</h2>
          <p className="text-gray-600 mb-4">
            We value your input! Let us know how we’re doing or how we can improve.
          </p>
          {feedbackSubmitted ? (
            <p className="text-green-600 text-center">Thank you for your feedback!</p>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="feedbackName" className="block text-gray-700 mb-1">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="feedbackName"
                  name="name"
                  value={feedbackData.name}
                  onChange={handleFeedbackChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="feedbackEmail" className="block text-gray-700 mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="feedbackEmail"
                  name="email"
                  value={feedbackData.email}
                  onChange={handleFeedbackChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="block text-gray-700 mb-1">
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={feedbackData.feedback}
                  onChange={handleFeedbackChange}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>

        {/* Suggestions Box */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Suggestions Box</h2>
          <p className="text-gray-600 mb-4">
            Got an idea for an event or improvement? Drop it here—we’d love to hear from you!
          </p>
          {suggestionSubmitted ? (
            <p className="text-green-600 text-center mb-4">Suggestion submitted—thanks for sharing!</p>
          ) : (
            <form onSubmit={handleSuggestionSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8">
              <div className="mb-4">
                <label htmlFor="suggestionName" className="block text-gray-700 mb-1">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="suggestionName"
                  name="name"
                  value={suggestionData.name}
                  onChange={handleSuggestionChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="suggestion" className="block text-gray-700 mb-1">
                  Suggestion
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  value={suggestionData.suggestion}
                  onChange={handleSuggestionChange}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Suggestion
              </button>
            </form>
          )}

          {/* Display Suggestions */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Suggestions</h3>
            {suggestions.length === 0 ? (
              <p className="text-gray-600">No suggestions yet—be the first to share!</p>
            ) : (
              <div className="space-y-4">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <p className="text-gray-600">{suggestion.suggestion}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Submitted by {suggestion.name} on {suggestion.date}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;