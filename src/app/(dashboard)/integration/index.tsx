"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-gray-100">
      <div className="relative flex flex-col items-center">
        {/* Animated Circular Loader */}
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 border-8 border-green-500 border-opacity-20 rounded-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 border-8 border-green-300 border-opacity-70 rounded-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 border-4 border-green-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Dynamic Text */}
        <div className="mt-8 text-green-700 text-2xl font-bold animate-pulse">
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Loading...
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

