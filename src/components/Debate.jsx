import React from "react";
import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission" className="py-16 container mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">My mission</h2>
        <div className="relative flex items-center justify-center">
          <motion.video
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
          >
            <source src={mission} type="video/mp4"></source>
          </motion.video>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute h-full w-full rounded-3xl bg-black/40"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute max-w-lg tracking-tighter lg:text-3xl text-neutral-200"
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
