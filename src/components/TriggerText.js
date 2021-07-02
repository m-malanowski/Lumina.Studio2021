import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const TriggerText = ({children, delay, threshold, cName}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: threshold,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="hidden"
      className={cName}
      variants={{
        visible: { opacity: 1, y: 0, scaleY: 1.0,  filter: "blur(0px)",
          transition: { delay:  delay , duration: 1.2, ease: [.215,.61,.355,1]}
        },
        hidden: { opacity: 0, y: 20,  scaleY: 1.2,  transformOrigin: "top left", filter: "blur(5px)"}
      }}

    >
      {children}
    </motion.div>
  );
};
export default TriggerText