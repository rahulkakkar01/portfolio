
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="w-full">
        <span className="font-mono text-green mb-5 block text-sm sm:text-base">Hi, my name is</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4">
          <TypeAnimation
            sequence={[
              'Rahul Kakkar',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-8">
          <TypeAnimation
            sequence={[
              1000, // Wait for name to finish
              'Full Stack Developer',
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
          />
        </h2>
        <p className="max-w-xl text-base sm:text-lg text-slate mb-12">
          I build exceptional digital experiences for the web.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
