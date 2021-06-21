import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const TriggerText = ({children, delay, threshold}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: threshold,
    triggerOnce: false
  });
  const position = window.pageYOffset;
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log(position)

    }
  }, [controls, inView]);

  return (
    <motion.div
      className="trigger-line"
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="hidden"
      variants={{
        visible: { opacity: 1,  width: "100%",
          transition: { delay:  0.1 , duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }
        },
        hidden: { opacity: 0, }
      }}
    >
      {children}
    </motion.div>
  );
};
export default TriggerText