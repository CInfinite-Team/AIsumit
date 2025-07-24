// App.jsx
import React, { useState } from "react";

const days = ["Day 1", "Day 2", "Day 3"];
const events = {
  "Day 1": [
    {
      time: "9:15am - 10:30am",
      title: "AI Hack Opening",
      description: "Kickoff with exciting announcements and team formations.",
      highlights: [
        "Opening Ceremony",
        "Team Formation",
        "Intro to Hackathon Themes",
      ],
    },
    {
      time: "11:00am - 12:00pm",
      title: "ML Workshop",
      description: "Learn ML basics from industry experts.",
      highlights: ["Hands-on session", "Q&A", "Live Coding"],
    },
  ],
  "Day 2": [
    {
      time: "10:00am - 12:00pm",
      title: "Hackathon Ongoing",
      description: "Teams continue building their solutions.",
      highlights: [
        "Mentorship Sessions",
        "Real-Time Feedback",
        "Check-In with Judges",
      ],
    },
    {
      time: "1:00pm - 2:00pm",
      title: "Lunch + Networking",
      description: "Relax and connect with fellow participants.",
      highlights: ["Food Stalls", "Networking Games", "Ice Breakers"],
    },
  ],
  "Day 3": [
    {
      time: "10:00am - 11:00am",
      title: "Final Demos",
      description: "Teams present their final projects to the jury.",
      highlights: ["Demo Pitches", "Live Judging", "Audience Q&A"],
    },
    {
      time: "12:00pm - 1:00pm",
      title: "Award Ceremony",
      description: "Celebrate the winners and wrap up the event.",
      highlights: ["Trophies & Goodies", "Closing Note", "Group Photos"],
    },
  ],
};


export default function EventsPlanned() {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <div className="px-4 py-32 bg-gradient-to-b from-[#25123D] to-[#1B0E2C] text-white font-sans">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        List Of Events Planned In this Conference
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
