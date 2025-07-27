import React, { useState } from 'react';

const privacyData = [
  {
    title: '1. Information We Collect',
    content: `Personal Information: Name, email, phone, country, company/institution, and professional title during registration.

Technical Data: IP address, browser type, and usage patterns via cookies and analytics tools.

Event Participation Data: Photos, videos, feedback forms, and competition submissions.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `To process your event registration.

To send important updates related to the event.

To improve user experience and event quality.

To promote current or future editions of our events.

To publish leaderboards and winners (Hackathon).`,
  },
  {
    title: '3. Data Sharing',
    content: `We may share your data with event sponsors and partners only with your consent (e.g., opt-in checkboxes).

We do not sell your personal data to third parties.`,
  },
  {
    title: '4. Cookies',
    content: `We use cookies to analyze website traffic and personalize content.

You can manage cookie settings through your browser.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your data for up to 24 months after the event unless required longer for legal or operational purposes.`,
  },
  {
    title: '6. Your Rights',
    content: `Depending on your country of residence, you may have the right to:

Request access to your data.

Request correction or deletion of your data.

Opt-out of marketing communications.`,
  },
  {
    title: '7. Security',
    content: `We implement industry-standard security practices to safeguard your data.`,
  },
  {
    title: '8. Changes to Policy',
    content: `We may update this policy. Changes will be posted on this page with a revised effective date.`,
  },
];

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#1B1036] min-h-screen text-white px-4 sm:px-10 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm mb-1 text-gray-400">Effective Date: July 27, 2025</p>
        <p className="text-base text-gray-200 mb-10">
          We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data.
        </p>

        <div className="space-y-4">
          {privacyData.map((item, index) => (
            <div key={index} className="border border-purple-600 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 bg-purple-800/50 hover:bg-purple-700 transition-colors font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="text-lg">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-purple-900/20 text-gray-300 whitespace-pre-line">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
