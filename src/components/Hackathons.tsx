import  { useState } from "react";
import { motion } from "framer-motion";

interface HackathonData {
  title: string;
  date: string;
  points: string[];
}

interface HackathonsRecord {
  [key: string]: HackathonData;
}

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState<string>("SmartIndiaHackathon");

  const hackathons: HackathonsRecord = {
    "Problem-a-thon": {
      title: "Participant @ Problem-a-thon",
      date: "March 2022",
      points: [
        "my first problem solving hackathon",
        "Collaborated with a team to develop a solution for a real-world problem",
        "Gained experience in rapid prototyping and iterative development"
      ]
    },
    "SmartIndiaHackathon": {
      title: "Finalist @ Smart India Hackathon",
      date: "February 2023",
      points: [
        "Built a real-time messaging application using React, Node.js, and Socket.io",
        "Implemented end-to-end encryption for secure communication",
        "Selected as finalist among 100+ participating teams"
      ]
    },
    "NASA Space Apps": {
      title: "Participant @ NASA Space Apps Challenge",
      date: "March 2024",
      points: [
        "Developed an AI-powered solution for space debris tracking",
        "Used Python and Machine Learning for trajectory prediction",
        "Created interactive visualization using Three.js"
      ]
    },
    "Teckron": {
      title: "Participant @ Teckron",
      date: "March 2025",
      points: [
        "Built an innovative IoT solution for smart energy management",
        "Integrated real-time data monitoring using MQTT protocol",
        "Developed dashboard using React and Chart.js"
      ]
    },
  };

  return (
    <section id="hackathons" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-lightest-slate mb-16"
      >
        <span className="text-green font-mono text-xl sm:text-2xl">03.</span> Hackathons
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Mobile: Horizontal scrolling tabs */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto pb-2 border-b border-lightest-navy">
            {Object.keys(hackathons).map((hackathon) => (
              <button
                key={hackathon}
                onClick={() => setActiveTab(hackathon)}
                className={`px-4 py-3 font-mono text-sm whitespace-nowrap transition-all
                  ${activeTab === hackathon 
                    ? 'text-green border-b-2 border-green' 
                    : 'text-slate hover:text-green'
                  }`}
              >
                {hackathon}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Vertical tabs */}
        <div className="hidden lg:flex lg:flex-col border-l border-lightest-navy">
          {Object.keys(hackathons).map((hackathon) => (
            <button
              key={hackathon}
              onClick={() => setActiveTab(hackathon)}
              className={`px-4 py-3 font-mono text-sm text-left hover:text-green hover:bg-light-navy transition-all border-l-2 -ml-[2px]
                ${activeTab === hackathon 
                  ? 'text-green border-green bg-light-navy/50' 
                  : 'text-slate border-lightest-navy'
                }`}
            >
              {hackathon}
            </button>
          ))}
        </div>

        <div className="py-4 lg:py-2 px-0 lg:px-5 flex-1">
          <h3 className="text-lg sm:text-xl text-lightest-slate font-medium mb-1">
            {hackathons[activeTab].title}
          </h3>
          <p className="font-mono text-sm text-slate mb-6">
            {hackathons[activeTab].date}
          </p>
          <ul className="space-y-4">
            {hackathons[activeTab].points.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-slate">
                <span className="text-green mt-1 text-sm">▹</span>
                <span className="text-sm sm:text-base leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;

