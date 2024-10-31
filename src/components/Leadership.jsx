import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Leadership = () => {
  return (
    <section id="leadership">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        My Leadership
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {CUSINES.map((cusine, index) => {
          // Determine if the current item is even (0-based indexing)
          const isEven = index % 2 !== 0; // 1,3,... are even in 1-based counting

          return (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
            >
              {/* Number */}
              {/* <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div> */}

              {/* Conditional Rendering of Image and Text */}
              {isEven ? (
                // For Even Items: Text first, then Image
                <>
                  {/* Text Section */}
                  <div className="pl-8 flex-1">
                    <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                      {cusine.title}
                    </h3>
                    <p className="mt-4 text-lg tracking-tighter">
                      {cusine.description}
                    </p>
                  </div>
                  {/* Image Section */}
                  <div className="w-1/3 flex-shrink-0 pl-8">
                    <img
                      src={cusine.image}
                      alt={cusine.title}
                      className="h-auto rounded-3xl"
                    />
                  </div>
                </>
              ) : (
                // For Odd Items: Image first, then Text
                <>
                  {/* Image Section */}
                  <div className="w-1/3 flex-shrink-0 pr-8">
                    <img
                      src={cusine.image}
                      alt={cusine.title}
                      className="h-auto rounded-3xl"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="pl-8 flex-1">
                    <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                      {cusine.title}
                    </h3>
                    <p className="mt-4 text-lg tracking-tighter">
                      {cusine.description}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Leadership;