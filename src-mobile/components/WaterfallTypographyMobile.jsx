import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WaterfallTypographyMobile = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end center"]
  });

  const rawText = "Stop paying for generic software. Get tools built just for you.";
  const words = rawText.split(" ");

  return (
    <section className="py-24 px-6 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-[320px] mx-auto text-center flex flex-wrap justify-center gap-x-3 gap-y-4">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          const y = useTransform(scrollYProgress, [start, end], [10, 0]);

          return (
            <motion.span
              key={i}
              className="text-4xl font-bold tracking-tight text-white inline-block leading-tight"
              style={{ opacity, y }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};

export default WaterfallTypographyMobile;
