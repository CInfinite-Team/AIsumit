// App.jsx
import React, { useState } from "react";

const days = ["Day 1", "Day 2", "Day 3"];
const events = {
  "Day 1": [
    {
      time: "1:00pm - 3:00pm",
      title: "Opening Ceremony, Use Case Announcement & Team Formation",
      description: "Event kickoff with welcome remarks, a keynote address, and team formation.",
      highlights: [
        "Welcome remarks",
        "Introduction to hackathon goals, tracks, & prizes",
        "Keynote address by an AI industry leader",
      ],
    },
    {
      time: "4:00pm - 6:00pm",
      title: "AI Hackathon Starts",
      description: "Teams begin the ideation and prototyping phase with mentorship.",
      highlights: [
        "Teams begin ideation and prototyping",
        "Initial mentorship sessions available",
      ],
    },
    {
      time: "4:30pm - 5:30pm",
      title: "Workshops & Networking",
      description: "Technical workshops and an ice-breaking networking event.",
      highlights: [
        "Introductory technical workshops (e.g., AI/ML tools, APIs)",
        "Ice-breaking networking event",
      ],
    },
  ],
  "Day 2": [
    {
      time: "10:00am - 12:00pm",
      title: "Workshops & Mentoring",
      description: "Deep-dive technical sessions and specific guidance from domain experts.",
      highlights: [
        "Deep-dive technical sessions",
        "Domain / Specific guidance from experts",
      ],
    },
    {
      time: "2:00pm - 6:00pm",
      title: "AI Hackathon Continues, Networking & Team Collaboration",
      description: "Continue hacking with check-ins, peer feedback, and collaboration.",
      highlights: [
        "Midpoint check-ins with mentors",
        "Prototype development progress review",
        "Peer feedback session",
        "Cross-team collaboration opportunities",
      ],
    },
    {
      time: "6:00pm - 9:00pm",
      title: "Workshops & Final Pitch Preparation, Dinner",
      description: "Prepare for the final pitch with workshops and mentorship.",
      highlights: ["Presentation skills workshop", "Pitch rehearsal with mentors"],
    },
  ],
  "Day 3": [
    {
      time: "9:00am - 10:00am",
      title: "Registration & Networking Breakfast, Opening Remarks – AI CXO Summit",
      description: "Kickoff for the AI CXO Summit with networking and opening remarks.",
      highlights: [
        "Welcome note from summit organizers",
        "Overview of strategic objectives",
      ],
    },
    {
      time: "10:00am - 1:00pm",
      title: "Keynote Speech, Panel Discussion, CXO Rountable",
      description: "Insightful sessions including keynotes and panel discussions.",
      highlights: [
        "Topics, speakers and panelists to be discussed and determined",
      ],
    },
    {
        time: "2:00pm - 4:30pm",
        title: "Keynote Speech, Panel Discussion, & CXO Rountable",
        description: "Further sessions with keynotes and CXO roundtable discussions.",
        highlights: [
          "Topics, speakers and panelists to be discussed and determined",
        ],
      },
    {
      time: "3:00pm - 4:00pm",
      title: "Final Hackathon Pitching Session",
      description: "Top teams present their solutions to the judges.",
      highlights: ["Top teams pitch their solutions to judges"],
    },
    {
      time: "4:15pm - 4:30pm",
      title: "Judging Deliberation & Closing Remarks",
      description: "Judges finalize evaluations and the event concludes.",
      highlights: [
        "Concluding segment where judges discuss and finalize their evaluations",
      ],
    },
    {
      time: "5:00pm - 7:00pm",
      title: "Award Ceremony & Prize Distribution, Closing Networking Reception - Dinner",
      description: "Winners are announced and the event closes with a networking reception.",
      highlights: ["Announce winners per use case", "Special recognition awards"],
    },
  ],
};


export default function EventsPlanned() {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <div className="px-4 py-32 bg-gradient-to-b from-[#25123D] to-[#1B0E2C] text-white font-sans">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Qatar Edition Agenda
      </h1>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
  {days.map((day) => (
    <div
      key={day}
      onClick={() => setActiveDay(day)}
      className={`inline-block rounded-md overflow-hidden w-fit p-[2px] cursor-pointer transition ${
        activeDay === day
          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_36px_72px_0px_rgba(247,70,169,0.24)]"
          : "bg-[#3c2a55] hover:bg-[#2f1d48]"
      }`}
    >
      <button className="flex h-fit justify-center items-center gap-2 bg-[#2B204C] px-6 py-2 rounded-md text-sm text-white">
        {day}
      </button>
    </div>
  ))}
</div>


    
      {/* Events Section */}
<div className="space-y-6 max-w-4xl mx-auto">
  {events[activeDay].map((event, i) => (
    <div key={i} className="p-[2px] rounded-xl bg-gradient-to-r from-[#F746A9]  to-[#3DD8D8]">
      <div className="flex flex-col md:flex-row justify-between bg-[#342D52] rounded-lg p-4 gap-4">
        <div className="md:w-2/3">
          <p className="flex items-center gap-2 text-pink-300 font-semibold mb-2">
            <span className="text-lg">🕒</span> {event.time}
          </p>
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-sm text-gray-300">{event.description}</p>
        </div>
        <div className="md:w-1/3">
          <h4 className="font-bold mb-1">Highlights</h4>
          <ul className="list-disc pl-5 text-sm text-gray-200 space-y-1">
            {event.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
