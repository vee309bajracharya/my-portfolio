import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo/logo-light.svg';

const PulseLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <motion.img
          src={Logo}
          alt="Portfolio Logo"
          className="xs:w-32 xs:h-32 md:w-60 md:h-60"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, ease: "easeInOut", repeat: Infinity,}}
          exit={{ opacity: 0 }}
        />
      </div>
    );
};

export default PulseLoader;