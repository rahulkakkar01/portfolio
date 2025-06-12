
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hackathons from "./components/Hackathons";


const App = () => {
  return (
    <div className="bg-navy min-h-screen flex flex-col">
      <Header />
      
      <div className="relative flex-grow">
        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Projects />
          <Hackathons />
          <Contact />
        </main>

        {/* Fixed side elements - Desktop only */}
        <div className="fixed left-10 bottom-0 hidden lg:block">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-6">
              <a
                href="https://github.com/rahulkakkar01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest-slate hover:text-green hover:-translate-y-1 transition-all"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kakkar-416757264"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest-slate hover:text-green hover:-translate-y-1 transition-all"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/rahulkakkar_04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest-slate hover:text-green hover:-translate-y-1 transition-all"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://leetcode.com/u/Rahul_kakkar_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest-slate hover:text-green hover:-translate-y-1 transition-all"
              >
                <SiLeetcode size={20} />
              </a>
            </div>
            <div className="w-px h-32 bg-lightest-slate"></div>
          </div>
        </div>

        {/* Mobile contact navigation bar */}
        <div className="fixed bottom-4 left-4 right-4 lg:hidden z-40">
          <div className="flex items-center justify-center gap-4 bg-light-navy/20 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none relative">
            <a
              href="mailto:rkakkar0111@gmail.com"
              className="flex items-center justify-center w-12 h-12 text-lightest-slate hover:text-green hover:bg-green/10 transition-all duration-200 rounded-xl"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://github.com/rahulkakkar01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-lightest-slate hover:text-green hover:bg-green/10 transition-all duration-200 rounded-xl"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kakkar-416757264"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-lightest-slate hover:text-green hover:bg-green/10 transition-all duration-200 rounded-xl"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/rahulkakkar_04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-lightest-slate hover:text-green hover:bg-green/10 transition-all duration-200 rounded-xl"
              aria-label="Instagram"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Rahul_kakkar_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-lightest-slate hover:text-green hover:bg-green/10 transition-all duration-200 rounded-xl"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;


