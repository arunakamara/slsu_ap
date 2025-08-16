import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  // Define site structure (all pages with routes)
  const sitePages = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Events', path: '/events' },
    { title: 'News & Announcements', path: '/news' },
    { title: 'Membership', path: '/membership' },
    { title: 'Resources', path: '/resources' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact Us', path: '/contact' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Feedback & Suggestions', path: '/feedback' },
    { title: 'Alumni', path: '/alumni' },
    { title: 'Sitemap', path: '/sitemap' }, // Self-reference for completeness
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Sitemap
        </h1>

        {/* Site Map */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Site Map</h2>
          <p className="text-gray-600 mb-6">
            Explore all sections of the SLSU-AP website below. Click any link to visit that page.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sitePages.map((page) => (
              <div key={page.path} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <Link
                  to={page.path}
                  className="text-green-800 hover:underline text-lg font-medium"
                >
                  {page.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;