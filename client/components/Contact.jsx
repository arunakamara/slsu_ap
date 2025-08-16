import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  // Sample contact info (replace with real details)
  const contactInfo = {
    address: 'SLSU-AP Office, Andhra University Campus, Visakhapatnam, Andhra Pradesh, India',
    phone: '+91 123-456-7890',
    email: 'contact@slsuap.org',
  };

  // Sample social media links (replace with real URLs)
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/slsuap', icon: <FaFacebook /> },
    { name: 'Instagram', url: 'https://instagram.com/slsuap', icon: <FaInstagram /> },
    { name: 'Twitter', url: 'https://twitter.com/slsuap', icon: <FaTwitter /> },
    { name: 'WhatsApp', url: 'https://wa.me/911234567890', icon: <FaWhatsapp /> },
  ];

  // State for contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate submission (replace with API call in production)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
    setTimeout(() => setSubmitted(false), 2000); // Reset success message
  };

  const contact = `tel:${contactInfo.phone}`
  const email = `mailto:${contactInfo.email}` 

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Contact Us
        </h1>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> {contactInfo.address}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone: </strong><a href={contact} className="text-green-800 hover:underline">
                {contactInfo.phone}</a>
            </p>
            <p className="text-gray-600">
              <strong>Email: </strong><a href={email} className="text-green-800 hover:underline">
                {contactInfo.email}</a> 
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          {submitted ? (
            <p className="text-green-600 text-center">Message sent successfully! We’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto">
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
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 hover:text-green-700 text-3xl transition-colors"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;