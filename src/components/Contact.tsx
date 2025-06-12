import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 max-w-3xl mx-auto text-center px-4 sm:px-6">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-lightest-slate mb-8"
      >
        <span className="text-green font-mono text-xl sm:text-2xl">04.</span> What's Next?
      </motion.h2>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
        Get In Touch
      </h2>

      <p className="text-slate mb-12 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
        Although I'm not currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>

      <a
        href="mailto:rkakkar0111@gmail.com"
        className="inline-block py-3 px-6 sm:py-4 sm:px-8 border-2 border-green text-green font-mono rounded hover:bg-green/10 transition-all text-sm sm:text-base"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
