import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf7] to-[#f7f3ee] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <UtensilsCrossed size={80} className="text-[#b48a60]" />
        </motion.div>

        <h1 className="text-7xl font-serif text-[#2e2a26] mb-2">404</h1>
        <p className="text-xl text-[#6b6259] mb-6 font-light">
          Oops! The page you're looking for doesn’t exist.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-[#b48a60] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          Return to Home
        </motion.button>

        <p className="mt-6 text-sm text-gray-500 italic">
          Perhaps try one of our <span className="text-[#b48a60]">signature dishes</span> instead 🍝
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
