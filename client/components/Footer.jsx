import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2">© 2025 Sierra Leone Student Union in Andhra Pradesh. All rights reserved.</p>
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="https://wa.me/911234567890" className="hover:underline">WhatsApp</a>
          <a href="https://instagram.com/slsuap" className="hover:underline">Instagram</a>
          <a href="https://twitter.com/slsuap" className="hover:underline">Twitter</a>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/feedback" className="hover:underline">Feedback</Link>
          <Link to="/alumni" className="hover:underline">Alumni</Link>
          <Link to="/sitemap" className="hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;