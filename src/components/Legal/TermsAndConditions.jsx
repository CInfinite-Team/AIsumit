import React, { useState } from 'react';

const termsData = [
  {
    title: '1. Eligibility',
    content: `You must be at least 18 years old to register unless otherwise specified.
Participants under 18 must have consent from a parent/guardian.`,
  },
  {
    title: '2. Registration',
    content: `Event registration is required via our official platform.
Registration fees (if any) are non-refundable unless the event is canceled.
By registering, you agree to receive event-related communications.`,
  },
  {
    title: '3. Code of Conduct',
    content: `All participants agree to maintain respectful and professional behavior.
Harassment, discrimination, or inappropriate conduct will lead to removal from the event without refund.`,
  },
  {
    title: '4. Event Changes',
    content: `We reserve the right to modify event content, speakers, schedule, or location without prior notice.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All logos, content, presentations, and materials are the intellectual property of the event organizers or respective third-party owners.
Participants may not reproduce or use content without written permission.`,
  },
  {
    title: '6. Use of Media',
    content: `By attending, you consent to photography, videography, and livestreaming during the event. Media may be used for promotional purposes.`,
  },
  {
    title: '7. Hackathon Submissions',
    content: `All code and innovations submitted remain the property of the participants, but the event organizer may request permission to showcase winning solutions.
You are responsible for ensuring that your submission does not infringe on third-party rights.`,
  },
  {
    title: '8. Liability',
    content: `We are not responsible for any personal injury, loss, or damage sustained during the event.
We are not liable for any technology-related issues in hybrid/virtual participation.`,
  },
  {
    title: '9. Third-Party Services',
    content: `Some parts of the event or website may link to third-party tools or platforms (e.g., ticketing, payment gateways, live streaming). We are not responsible for their practices or content.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms are governed by the laws of [Event Host Country, e.g., Qatar or KSA].`,
  },
];

const TermsAndConditions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#1B1036] min-h-screen text-white px-4 sm:px-10 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-sm mb-1 text-gray-400">Effective Date: July 27, 2025</p>
        <p className="text-base inter text-gray-200 mb-10">
          Welcome to the official website for AI Summit | AI Hackathon ("Events"), managed by Risin Ventures ("we", "us", or "our"). These terms govern your use of the website and your participation in our events.
        </p>

        <div className="space-y-4">
          {termsData.map((term, index) => (
            <div key={index} className="border border-purple-600 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 bg-purple-800/50 hover:bg-purple-700 transition-colors font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {term.title}
                <span className="text-lg">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 inter bg-purple-900/20 text-gray-300 whitespace-pre-line">
                  {term.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
