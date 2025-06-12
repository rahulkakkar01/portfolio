
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  external?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Softsell",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/p1.png",
    technologies: ["VS Code", "react", "shadcn", "javascript"],
    github: "https://github.com/rahulkakkar01/Softsell",
    external: "https://softsell-lovat-six.vercel.app/",
    featured: true,
  },
   {
    title: "Beyond Chats",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/p3.png",
    technologies: ["VS Code", "react", "shadcn", "javascript"],
    github: "https://github.com/rahulkakkar01/Beyondchats",
    external: "https://beyondchats-cyan.vercel.app/",
    featured: true,
  },
  
  {
    title: "Cypher vpn",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/p2.png",
    technologies: ["VS Code", "react", "shadcn", "javascript"],
    github: "https://github.com/rahulkakkar01/Cyphervpn-",
    external: "https://cypher-vpn.vercel.app/",
    featured: true,
  },
 
];

const Projects = () => {
  
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.h2
       
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-lightest-slate mb-16"
      >
        <span className="text-green font-mono text-xl sm:text-2xl">02.</span> Some Things I've Built
      </motion.h2>

      <div className="space-y-16 lg:space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
           
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Featured Project Label - Hidden on mobile */}
            <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 lg:-right-16' : 'left-0 lg:-left-16'} z-10 hidden lg:block`}>
              <p className={`font-mono text-green ${index % 2 === 0 ? 'rotate-90' : '-rotate-90'} whitespace-nowrap text-sm`}>
                Featured Project
              </p>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="space-y-6">
                {/* Project Image */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <div className="absolute inset-0 bg-green/20 mix-blend-multiply transition-opacity group-hover:opacity-0 rounded-lg" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg shadow-xl"
                    />
                  </a>
                </motion.div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-lightest-slate">
                    {project.title}
                  </h3>
                  <div className="bg-light-navy p-4 sm:p-6 rounded-lg shadow-xl">
                    <p className="text-slate text-base sm:text-lg">{project.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-3 font-mono text-sm">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="text-slate">{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green transition-colors"
                      >
                        <FaGithub className="text-xl sm:text-2xl" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green transition-colors"
                      >
                        <FaExternalLinkAlt className="text-xl sm:text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-12 gap-6">
              {/* Project Image */}
              <div className={`col-span-7 relative ${
                index === 1 ? 'col-start-1' : index % 2 === 1 ? 'col-start-6' : ''
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <div className="absolute inset-0 bg-green/20 mix-blend-multiply transition-opacity group-hover:opacity-0 rounded-lg" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg shadow-xl"
                    />
                  </a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className={`col-span-5 relative ${
                index === 1 ? 'col-start-8' : index % 2 === 0 ? 'col-start-8' : 'col-start-1'
              }`}>
                <div className="absolute -top-10 lg:static">
                  <h3 className={`text-3xl xl:text-4xl font-bold text-lightest-slate mb-6 ${
                    index === 1 ? 'text-left' : index % 2 === 1 ? 'text-right' : 'text-left'
                  }`}>
                    {project.title}
                  </h3>
                  <div className={`bg-light-navy p-6 rounded-lg shadow-xl mb-4 transform ${
                    index === 1 ? '-translate-x-16' : index % 2 === 0 ? '-translate-x-16' : 'translate-x-16'
                  }`}>
                    <p className={`text-slate text-lg ${
                      index === 1 ? 'text-left' : index % 2 === 1 ? 'text-right' : 'text-left'
                    }`}>{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-4 mb-8 font-mono text-sm ${
                    index % 2 === 1 ? 'justify-end' : 'justify-start'
                  }`}>
                    {project.technologies.map((tech) => (
                      <li key={tech} className="text-slate">{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-6 ${
                    index % 2 === 1 ? 'justify-end' : 'justify-start'
                  }`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green transition-colors"
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green transition-colors"
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
