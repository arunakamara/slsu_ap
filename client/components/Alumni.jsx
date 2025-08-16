import React, { useState } from "react";
import { Link } from "react-router-dom";
// import  '../Images/financial_sec.jpg';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
{
  /* <Slider dots={true} infinite={true} slidesToShow={1}><div>...</div></Slider> */
}

const Alumni = () => {
  // Sample alumni stories (replace with real data)
  const alumniStories = [
    {
      id: 1,
      name: "Ishmail Ibrahim Turay",
      graduationYear: "2024",
      profession: "Logistics and Supply Chain Management",
      storySummary:
        "Ishmael turned his SLSU-AP experience into a thriving business career.",
      fullStory:
        "Ishmael joined SLSU-AP in 2022 and quickly became a leading member of the organization, serving as the Chief Financial Officer. He credits SLSU-AP’s networking events and study groups for his success, saying, “The union gave me confidence and connections that opened doors.” Today, he mentors current members and contributes to our scholarship fund.",
      photo: "/Images/financial_sec.jpg",
    },
    {
      id: 2,
      name: "David Lahai",
      graduationYear: "2024",
      profession: "Software Development Officer",
      storySummary:
        "David  a first-class graduate in Information Technology (B.Tech) from Andhra University where he excelled academically and demonstrated strong leadership skills. ",
      fullStory:
        "David joined SLSU-AP in 2021, During his time at the university he served as the President of the Sierra Leone Student Union in Andhra Pradesh playing a crucial role in supporting and uniting fellow international students. His studies focused on software development cybersecurity artificial intelligence databases, and web development equipping him with a strong foundation for a career in technology.",
      photo: "/Images/david_lahai.jpg",
    },
  ];

  // State for expanding alumni stories
  const [expandedStory, setExpandedStory] = useState(null);

  const toggleStory = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Alumni
        </h1>

        {/* Alumni Network */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Alumni Network
          </h2>
          <p className="text-gray-600 mb-4">
            The SLSU-AP Alumni Network connects past members with current
            students, faculty, and each other. Our alumni are a vital part of
            our community, offering mentorship, career guidance, and support for
            union initiatives.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Why Join?
          </h3>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Mentor current students and share your expertise.</li>
            <li>Network with fellow alumni across industries.</li>
            <li>Stay updated on SLSU-AP events and opportunities.</li>
            <li>Give back through donations or guest talks.</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            How to Get Involved
          </h3>
          <p className="text-gray-600 mb-4">
            If you’re a former SLSU-AP member, we’d love to reconnect! Register
            with us by filling out a simple form—email{" "}
            <a
              href="mailto:alumni@slsuap.org"
              className="text-green-800 hover:underline"
            >
              alumni@slsuap.org
            </a>{" "}
            with your name, graduation year, and contact details. You can also
            join our{" "}
            <Link to="/events" className="text-green-800 hover:underline">
              upcoming alumni events
            </Link>{" "}
            or contribute to our{" "}
            <Link to="/resources" className="text-green-800 hover:underline">
              scholarship fund
            </Link>
            .
          </p>
        </div>

        {/* Alumni Stories */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Alumni Stories
          </h2>
          {alumniStories.length === 0 ? (
            <p className="text-gray-600">
              No stories available yet—check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {alumniStories.map((alumni) => (
                <div
                  key={alumni.id}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={alumni.photo}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {alumni.name}
                      </h3>
                      <p className="text-gray-600">
                        {alumni.profession} (Class of {alumni.graduationYear})
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {expandedStory === alumni.id
                      ? alumni.fullStory
                      : alumni.storySummary}
                  </p>
                  <button
                    onClick={() => toggleStory(alumni.id)}
                    className="mt-4 text-green-800 hover:underline font-medium"
                  >
                    {expandedStory === alumni.id ? "Read Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
