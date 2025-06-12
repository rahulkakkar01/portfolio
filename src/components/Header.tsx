
import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiFileText } from "react-icons/fi";
import ResumeButton from "./ResumeButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="flex items-center justify-between bg-light-navy/20 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none relative">
        {/* Enhanced Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            {/* Logo Background */}
            <div className="w-12 h-12 bg-gradient-to-br from-green/20 to-green/10 rounded-xl border border-green/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-green font-bold text-lg tracking-wider">RK</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-12 h-12 bg-green/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
          </div>
          <div className="hidden sm:block">
            <div className="text-lightest-slate font-semibold text-lg group-hover:text-green transition-colors duration-200">
              Rahul Kakkar
            </div>
            <div className="text-slate text-sm font-mono">
              Full Stack Developer
            </div>
          </div>
        </Link>



        {/* Center Navigation - Desktop only */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-mono">
          <Link
            to="hero"
            smooth
            duration={500}
            className="flex items-center gap-2 px-4 py-2.5 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl group"
          >
            <span className="text-green text-xs">01.</span> 
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">Home</span>
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="flex items-center gap-2 px-4 py-2.5 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl group"
          >
            <span className="text-green text-xs">02.</span> 
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">About</span>
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="flex items-center gap-2 px-4 py-2.5 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl group"
          >
            <span className="text-green text-xs">03.</span> 
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">Projects</span>
          </Link>
          <Link
            to="hackathons"
            smooth
            duration={500}
            className="flex items-center gap-2 px-4 py-2.5 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl group"
          >
            <span className="text-green text-xs">04.</span> 
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">Hackathons</span>
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="flex items-center gap-2 px-4 py-2.5 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl group"
          >
            <span className="text-green text-xs">05.</span> 
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">Contact</span>
          </Link>
        </nav>

        {/* Right Side - Resume Button + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Resume Button - Always visible */}
          <div className="hidden sm:block">
            <ResumeButton />
          </div>
          
          {/* Mobile Resume Button - Compact version */}
          <div className="sm:hidden">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border-2 border-green text-green rounded-lg hover:bg-green/10 transition-all duration-200"
              aria-label="Resume"
            >
              <FiFileText size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-12 h-12 text-green hover:text-lightest-slate hover:bg-green/10 transition-all duration-200 rounded-xl border border-green/30"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-light-navy/30 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-300 ease-in-out lg:hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green/20 to-green/10 rounded-xl border border-green/30 flex items-center justify-center">
                  <span className="text-green font-bold text-base tracking-wider">RK</span>
                </div>
                <div>
                  <div className="text-lightest-slate font-semibold text-base">Rahul Kakkar</div>
                  <div className="text-slate text-xs font-mono">Full Stack Developer</div>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="flex items-center justify-center w-10 h-10 text-green hover:text-lightest-slate hover:bg-green/10 transition-all duration-200 rounded-xl border border-green/30"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col flex-grow justify-center items-center space-y-6 font-mono px-6 relative z-10">
              <Link
                to="hero"
                smooth
                duration={500}
                onClick={closeMenu}
                className="flex items-center gap-3 w-full p-4 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl border border-transparent hover:border-green/30"
              >
                <span className="text-green text-sm">01.</span> 
                <span className="text-lg">Home</span>
              </Link>
              <Link
                to="about"
                smooth
                duration={500}
                onClick={closeMenu}
                className="flex items-center gap-3 w-full p-4 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl border border-transparent hover:border-green/30"
              >
                <span className="text-green text-sm">02.</span> 
                <span className="text-lg">About</span>
              </Link>
              <Link
                to="projects"
                smooth
                duration={500}
                onClick={closeMenu}
                className="flex items-center gap-3 w-full p-4 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl border border-transparent hover:border-green/30"
              >
                <span className="text-green text-sm">03.</span> 
                <span className="text-lg">Projects</span>
              </Link>
              <Link
                to="hackathons"
                smooth
                duration={500}
                onClick={closeMenu}
                className="flex items-center gap-3 w-full p-4 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl border border-transparent hover:border-green/30"
              >
                <span className="text-green text-sm">04.</span> 
                <span className="text-lg">Hackathons</span>
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                onClick={closeMenu}
                className="flex items-center gap-3 w-full p-4 text-lightest-slate hover:text-green hover:bg-green/10 cursor-pointer transition-all duration-200 rounded-xl border border-transparent hover:border-green/30"
              >
                <span className="text-green text-sm">05.</span> 
                <span className="text-lg">Contact</span>
              </Link>
              <div className="pt-6 w-full flex justify-center">
                <ResumeButton />
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
