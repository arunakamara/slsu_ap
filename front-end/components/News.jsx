import React from "react";
const newsItems = [
  {
    id: 1,
    title: "Welcome New Members!",
    date: "10th February 2025",
    description:
      "We are excited to welcome our new members to the Sierra Leone Student Union. We look forward to a great year together!",
  },
  {
    id: 2,
    title: "Scholarship Opportunities",
    date: "15th February 2025",
    description:
      "Several scholarship opportunities are available for our members. Please check the Resources section for more details.",
  },
  {
    id: 3,
    title: "Upcoming Cultural Exchange Program",
    date: "20th February 2025",
    description:
      "Join us for our upcoming cultural exchange program where we will explore different cultures and traditions.",
  },
  // Add more news items as needed
];

const News = () => {
  return (
    <div className="news">
      <div className="bg-gray-200 min-h-screen mx-2">
        <h2 className="text-center text-green-800 font-bold text-5xl my-5 ">
          News
        </h2>
        <p className="bg-green-200 my-3 text-center ">
          Stay updated with the latest news and announcements from the Sierra
          Leone Student Union.
        </p>
        <div className="news-list grid sm:max-md:grid sm:grid-cols-2 xl:grid-cols-3 ">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="news-item m-5  bg-white text-center justify-center "
            >
              <h3 className="font-bold">{item.title}</h3>
              <p>
                <strong>Date:</strong> {item.date}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
