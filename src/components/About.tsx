import { motion } from "framer-motion";
import Technologies from "./Technologies";

const About = () => {
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto py-20"
      id="about"
    >
      <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/5">
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-3xl font-bold text-lightest-slate mb-8"
          >
            <span className="text-green font-mono text-2xl">01.</span> About Me
          </motion.h2>

          <div className="space-y-6 text-lg text-lightest-slate">
            <p>
              Hello! I’m Rahul, a passionate web developer and cloud enthusiast who thrives on building seamless digital experiences. My journey began with crafting web pages and quickly evolved into building full-stack applications and deploying scalable systems on AWS.
              <br />
              <br />
              I’ve developed projects like a VPN distribution platform, an eCommerce grocery app, and a daily-wage labor locator app—all using technologies like React, Node.js, TypeScript, MongoDB, and Docker
            </p>

            <p>
              I love working on meaningful solutions that blend user-focused design with efficient backend architecture.
              <br />
              <br />
              Outside of coding, you’ll find me hitting the gym, mentoring peers, or participating in technical clubs and hackathons. I'm currently diving deeper into competitive programming, DSA, and expanding my cloud security knowledge.
            </p>
          </div>

          <Technologies />
        </div>

        <motion.div
          variants={fadeInUp}
          className="md:w-2/5 relative group"
        >
          <div className="relative z-10">
            <img
              src="/image.jpg" // Remove 'public' from the path
              alt="Profile"
              className="rounded grayscale hover:grayscale-0 transition-all"
            />
            <div className="absolute inset-0 border-2 border-green rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all"></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
