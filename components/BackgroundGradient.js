import { motion } from "framer-motion";
import React from "react";

export const BackgroundGradient = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#222222] p-6">
      <div className="flex gap-6">
        {/* First Card */}
        <motion.div
          initial={{ backgroundImage: "linear-gradient(45deg, #667eea, #764ba2)" }}
          animate={{
            backgroundImage: [
              "linear-gradient(45deg, #667eea, #764ba2, #a855f7)",
              "linear-gradient(45deg, #764ba2, #a855f7, #667eea)",
              "linear-gradient(45deg, #a855f7, #667eea, #764ba2)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-[3px] rounded-xl shadow-lg"
        >
          <div className="bg-white text-black p-6 w-96 rounded-xl shadow-lg">
            <p className="text-lg">
              "This web app has completely transformed how we manage our deliveries. It’s seamless, efficient, and a game-changer for logistics!"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img src="/women.jpg" alt="Elene Rodriguez" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">Elene Rodriguez</h3>
                <p className="text-sm">Founder, Express Freight</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ backgroundImage: "linear-gradient(45deg, #ff758c, #ff7eb3)" }}
          animate={{
            backgroundImage: [
              "linear-gradient(45deg, #4ade80, #3b82f6, #a855f7)",
              "linear-gradient(45deg, #3b82f6, #a855f7, #4ade80)",
              "linear-gradient(45deg, #a855f7, #4ade80, #3b82f6)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-[3px] rounded-xl shadow-lg"
        >
          <div className="bg-white text-black p-6 w-96 rounded-xl shadow-lg">
            <p className="text-lg">
              "Minimalistic Technology's platform has helped us reduce delays and improve tracking. Our clients love the transparency!"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img src="/men.jpg" alt="Durgesh Nai" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">Manan Doshi</h3>
                <p className="text-sm">Founder, Express Way</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          initial={{ backgroundImage: "linear-gradient(45deg, #4ade80, #3b82f6)" }}
          animate={{
            backgroundImage: [
              "linear-gradient(45deg, #4ade80, #3b82f6, #a855f7)",
              "linear-gradient(45deg, #3b82f6, #a855f7, #4ade80)",
              "linear-gradient(45deg, #a855f7, #4ade80, #3b82f6)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-[3px] rounded-xl shadow-lg"
        >
          <div className="bg-white text-black p-6 w-96 rounded-xl shadow-lg">
            <p className="text-lg">
               This web app has completely transformed how we manage our deliveries. It’s seamless, efficient, and a game-changer for logistics!
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img src="/men1.jpg" alt="John Doe" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm">CEO, Fast Logistics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
