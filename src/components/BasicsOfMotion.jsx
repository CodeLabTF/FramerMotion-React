import {motion, AnimatePresence} from 'framer-motion';
import React, {useState} from "react";


const BasicsOfMotion = () => {
  
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          gap: "0.8rem"
        }}
      >
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="example-button">
          Show&Hide
        </button>

        <AnimatePresence>
        {isVisible && (<motion.div
          inital={{
            rotate: '0deg',
            scale: 0.5,
          }}
          animate={{
            rotate: "180deg",
            scale: 1,
          }}
          exit={{
              rotate: "0deg",
              scale: 0.5,
            }}
          transition={{
            duration: 1,
            ease: 'backInOut'

          }}

          style={{
            width: 150,
            height: 150,
            background: "black"
          }}
        >
          {/* Content goes here */}
        </motion.div>)}

        </AnimatePresence>
      </div>
    </>
  );
};

export default BasicsOfMotion;
