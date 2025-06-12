import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaAws, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTerraform, SiFlutter, SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";
import { LuComponent } from "react-icons/lu";

const Technologies = () => {
  const technologies = [
    { name: "JavaScript", icon: <FaJs className="text-3xl text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-3xl text-[#3178C6]" /> },
    { name: "React", icon: <FaReact className="text-3xl text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl text-[#339933]" /> },
    { name: "Python", icon: <FaPython className="text-3xl text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-3xl text-[#007396]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-3xl text-[#02569B]" /> },
    { name: "HTML", icon: <FaHtml5 className="text-3xl text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-3xl text-[#1572B6]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-3xl text-[#06B6D4]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-3xl text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-3xl text-[#FFCA28]" /> },
    { name: "Git", icon: <FaGitAlt className="text-3xl text-[#F05032]" /> },
    { name: "AWS", icon: <FaAws className="text-3xl text-[#FF9900]" /> },
    { name: "Terraform", icon: <SiTerraform className="text-3xl text-[#7B42BC]" /> },
    { name: "Shadcn", icon: <LuComponent className="text-3xl text-[#ffffff]" /> }
  ];

 

  return (
    <motion.div
      
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-lightest-slate">
        Technologies I've worked with:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-lightest-navy bg-light-navy hover:border-green transition-all"
          >
            <div className="text-2xl sm:text-3xl">
              {tech.icon}
            </div>
            <span className="text-lightest-slate text-sm sm:text-base">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;