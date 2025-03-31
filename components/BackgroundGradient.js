import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName = "BackgroundGradient",
  animate = true,
}) => {
  return (
    <div className={cn("relative flex justify-center items-center min-h-screen bg-[#222222] p-4", containerClassName)}>
      
      {/* Motion Wrapper - This is the border that changes color */}
      <motion.div
        initial={{ backgroundImage: "linear-gradient(45deg, #00ccb1, #7b61ff)" }}
        animate={{
          backgroundImage: [
            "linear-gradient(45deg, #4ade80, #a855f7, #3b82f6)", 
            "linear-gradient(45deg, #a855f7, #3b82f6, #4ade80)", 
            "linear-gradient(45deg, #3b82f6, #4ade80, #a855f7)", 
            "linear-gradient(45deg, #4ade80, #a855f7, #3b82f6)", 
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative p-[2px] rounded-xl w-fit"
      >
        
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 blur-3xl opacity-50 rounded-xl"></div>

        {/* Card with Static Background */}
        <div className="relative bg-[#222222] max-w-sm w-full rounded-xl p-6 shadow-lg">
          
          {/* Card Content */}
          <div className="relative z-20 text-center">
            <img
              src="/men.jpg"
              alt="Daniel Martins"
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-white text-2xl font-semibold mt-4">
              Daniel Martins
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              This web app has completely transformed how we manage our deliveries. It’s seamless, efficient, and a game-changer for logistics!
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
                Buy Now
              </button>
              <span className="text-white font-semibold">$100</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
