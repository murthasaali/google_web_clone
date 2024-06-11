import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      className="px-4 rounded-full text-green-500 text-opacity-70 font-normal bg-green-100 bg-op7410 text-[40px] flex justify-center items-center text-center"
      initial={{ y: -20 }} // Initial state (button starts at its current position)
      animate={{ y: [-20, 0] }} // Animates from -20 to 0, then back to -20 (loop)
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 6 }} // Animation duration, looping, and delay between loops
    >
      Fast
    </motion.button>
  );
};

export default AnimatedButton;
