import React from "react";

const About = () => {
  // Sample leadership data (replace with real names/photos)
  const leadership = [
    {
      name: "Solomon Bakison Moiwo",
      role: "President",
      bio: "a graduate of Andhra University, department of Computer Science and Systems Engineering. Class of 2021 to 2025.",
      photo: "/Images/solomon_bakison_moiwo.jpg",
    },
    {
      name: "Abdulai Dumbuya",
      role: "Vice President",
      bio: "a graduate of Andhra University, department of B. Pharmacy. Class of 2021 to 2025..",
      photo: "/Images/abdulai_dumbuya.jpg",
    },
    {
      name: "Mahony James Joel Ansue",
      role: "PRO & Organizer",
      bio: "a graduate of Andhra University, department of B.Tech Mechanical Engineering. Class of 2021 to 2025.",
      photo: "/Images/mahony_jj_ansue.jpg",
    },
    {
      name: "Mohammad Bangura",
      role: "Auditor General",
      bio: "a graduate of Andhra University, Masters in Economics. Class of 2023 to 2025.",
      photo: "/Images/mohamed_bangura.jpg",
    },
    {
      name: "Mary Mariama kargbo",
      role: "Treasurer",
      bio: "a graduate of Gitam University, department of B.Sc Nursing. Class of 2022 to 2026.",
      photo: "/Images/mary_mariama_kargbo.jpg",
    },
    {
      name: "Abdulai Kiny Abu",
      role: "Minister of education",
      bio: "a graduate of Andhra University, department of B.Tech Civil Engineering. Class of 2022 to 2026.",
      photo: "/Images/abdulai_kinny_abu.jpg",
    },
    {
      name: "Yusuf Mohamed Nabay",
      role: "Deputy Minister of Education",
      bio: "a graduate of Andhra University, department of B.Pharmacy. Class of 2022 to 2026.",
      photo: "/Images/yusuf_mohamed_nabay.jpg",
    },
    {
      name: "Martin james",
      role: "Photography",
      bio: "a graduate of Andhra University, department of Computer Science & System Engineering. Class of 2022 to 2026.",
      photo: "/Images/martin_james.jpg",
    },
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          About Us
        </h1>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2018, the Sierra Leone Student Union in Andhra Pradesh
            (SLSU-AP) emerged from a shared dream among Sierra Leonean students
            to stay connected to our roots while navigating life in India. What
            started as informal gatherings has grown into a vibrant community,
            blending Sierra Leonean culture with the dynamic energy of Andhra
            Pradesh. Today, we’re a family of students committed to supporting
            each other academically, culturally, and socially.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Objectives
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Foster unity and cultural pride among Sierra Leonean students.
            </li>
            <li>
              Provide academic resources and mentorship for success in Andhra
              Pradesh.
            </li>
            <li>
              Organize events celebrating our heritage—think music, food, and
              stories.
            </li>
            <li>
              Build a network with alumni and local communities for future
              opportunities.
            </li>
          </ul>
        </div>

        {/* Leadership Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Meet Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-700 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
