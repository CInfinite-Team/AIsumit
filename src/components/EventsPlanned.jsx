// App.jsx
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const days = ["24th OCT", "25th OCT", "26th OCT"];
const events = {
  // ... (your events data remains unchanged)
  "24th OCT": [
 {
 time: "1:00pm - 3:00pm",
 title: "Opening Ceremony, Use Case Announcement & Team Formation",
 description: "Event kickoff with welcome remarks, a keynote address, and team formation.",
 highlights: ["Welcome remarks", "Introduction to hackathon goals, tracks, & prizes", "Keynote address by an AI industry leader"],
},
 {
 time: "4:00pm - 6:00pm",
 title: "AI Hackathon Starts",
description: "Teams begin the ideation and prototyping phase with mentorship.",
buttonText: "Apply Now",
Linkbtn: 'https://forms.gle/3ufXEarhNCESUR3TA',
},
 {
 time: "4:30pm - 5:30pm",
 title: "Workshops & Networking",
 description: "Technical workshops and an ice-breaking networking event.",
 highlights: ["Introductory technical workshops (e.g., AI/ML tools, APIs)", "Ice-breaking networking event"],
 },
 ],
"25th OCT": [
{
 time: "10:00am - 12:00pm",
 title: "Workshops & Mentoring",
 description: "Deep-dive technical sessions and specific guidance from domain experts.",
 highlights: ["Deep-dive technical sessions", "Domain / Specific guidance from experts"],
 },
{
 time: "2:00pm - 6:00pm",
 title: "AI Hackathon Continues, Networking & Team Collaboration",
 description: "Continue hacking with check-ins, peer feedback, and collaboration.",
 highlights: ["Midpoint check-ins with mentors", "Prototype development progress review", "Peer feedback session", "Cross-team collaboration opportunities"],
 },
{
 time: "6:00pm - 9:00pm",
 title: "Workshops & Final Pitch Preparation, Dinner",
 description: "Prepare for the final pitch with workshops and mentorship.",
 highlights: ["Presentation skills workshop", "Pitch rehearsal with mentors"],
 },
 ],
 "26th OCT": [
 {
  time: "9:00am - 10:00am",
   title: "Registration & Networking Breakfast, Opening Remarks – AI CXO Summit",
    description: "Kickoff for the AI CXO Summit with networking and opening remarks.",
   highlights: ["Welcome note from summit organizers", "Overview of strategic objectives"],
   },
   {
    time: "10:00am - 1:00pm",
    title: "Keynote Speech, Panel Discussion, CXO Rountable",
    description: "Insightful sessions including keynotes and panel discussions.",
   highlights: ["Topics, speakers and panelists to be discussed and determined"],
  },
  {
     time: "2:00pm - 4:30pm",
  title: "Keynote Speech, Panel Discussion, & CXO Rountable",
   description: "Further sessions with keynotes and CXO roundtable discussions.",
   highlights: ["Topics, speakers and panelists to be discussed and determined"],
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
  highlights: ["Concluding segment where judges discuss and finalize their evaluations"],
  },
 {
  time: "5:00pm - 7:00pm",
   title: "Award Ceremony & Prize Distribution, Closing Networking Reception - Dinner",
  description: "Winners are announced and the event closes with a networking reception.",
  highlights: ["Announce winners per use case", "Special recognition awards"],
 },
],
};


function EventCard({ event }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true, 
  });

  return (
    <div
      ref={ref}
      className={`p-[2px] rounded-xl bg-gradient-to-r from-[#F746A9] to-[#3DD8D8] transition-all duration-1000 ease-out 
      ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row justify-between bg-[#342D52] rounded-lg p-4 gap-4">
        <div className="md:w-2/3">
          <p className="flex items-center gap-2 text-pink-300 font-semibold mb-2">
            {event.time}
          </p>
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-sm text-gray-300">{event.description}</p>
        </div>
        <div className="md:w-1/3">
          
         
           { event.buttonText ? (
            <div className="flex h-full justify-center items-center">
              <a href={event.Linkbtn} className='w-full md:w-fit' target="_blank" rel="noopener noreferrer">
            <div className="relative w-full md:w-fit group rounded-md p-[2px] hover:overflow-hidden ">
              <div className="absolute inset-0 group-hover:w-[240%] group-hover:md:w-[200%] group-hover:h-96 group-hover:-left-[70%] group-hover:-top-[210%] rounded-md group-hover:rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0px_16px_40px_0px_rgba(236,72,153,0.5)] transition-transform duration-700 group-hover:animate-spin pointer-events-none" style={{ zIndex: 1 }} />
              <button className="relative px-6 w-full md:w-fit py-3 rounded-md transition-colors duration-300 hover:bg-[#3c3357] bg-[#2B204C] text-white font-semibold text-sm z-10" style={{ zIndex: 2 }}>
                {event.buttonText}
              </button>
            </div>
          </a>
          </div>
            
          ) :
          <>
          <h4 className="font-bold mb-1">Highlights</h4>
          <ul className="list-disc pl-5 text-sm text-gray-200 space-y-1">
            {event.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </>
}
        </div>
      </div>
    </div>
  );
}

export default function EventsPlanned() {
  const [activeDay, setActiveDay] = useState("24th OCT");

  return (
    <div className="px-4 py-32 relative bg-gradient-to-b from-[#25123D] to-[#1B0E2C] text-white font-sans">
      <div className="absolute -top-10 -translate-y-1/2" id="Agenda"></div>

      <h1 className="text-2xl uppercase md:text-3xl font-bold text-center mb-6">
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
            <button className={`flex h-fit justify-center items-center gap-2 px-6 py-2 rounded-md text-sm text-white transition-colors duration-300 
              ${activeDay === day ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white' : 'bg-[#2B204C] text-white hover:bg-[#3c3357]'}`}>
              {day}
            </button>
          </div>
        ))}
      </div>


      <div className="space-y-6 max-w-4xl mx-auto">
        {events[activeDay].map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>
    </div>
  );
}