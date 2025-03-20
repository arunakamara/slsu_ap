import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ data (replace with real questions and answers)
  const faqs = [
    {
      id: 1,
      question: 'What is the Sierra Leone Student Union in Andhra Pradesh (SLSU-AP)?',
      answer:
        'SLSU-AP is a community for Sierra Leonean students studying in Andhra Pradesh, India. We aim to foster cultural pride, provide academic support, and create a home away from home through events, resources, and networking.',
    },
    {
      id: 2,
      question: 'Who can join SLSU-AP?',
      answer:
        'Membership is open to all Sierra Leonean students enrolled in universities or colleges in Andhra Pradesh. You’ll need to submit your university acceptance letter and basic details via our Membership page.',
    },
    {
      id: 3,
      question: 'What benefits do members get?',
      answer:
        'Members enjoy access to exclusive events (e.g., Cultural Night), academic resources, scholarship opportunities, and a supportive network of peers and alumni.',
    },
    {
      id: 4,
      question: 'How can I attend an event?',
      answer:
        'Check our Events page for upcoming activities. Most events are free for members—just register online. Non-members may attend select open events; details are posted with each listing.',
    },
    {
      id: 5,
      question: 'Are there membership fees?',
      answer:
        'Yes, there’s a small annual fee of ₹500 to cover event costs and resources. Payment details are provided after your membership application is approved.',
    },
    {
      id: 6,
      question: 'How do I contact the union?',
      answer:
        'Visit our Contact Us page for our address, phone number, and email. You can also reach us via social media or submit a message through the online form.',
    },
  ];

  // State for accordion (expanded FAQ)
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div>
          {faqs.length === 0 ? (
            <p className="text-gray-600 text-center">No FAQs available yet. Check back soon!</p>
          ) : (
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                    <span className="text-green-800 text-2xl">
                      {expandedFAQ === faq.id ? '-' : '+'}
                    </span>
                  </div>
                  {expandedFAQ === faq.id && (
                    <p className="text-gray-600 mt-4">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;