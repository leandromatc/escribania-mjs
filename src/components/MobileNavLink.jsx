import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MobileNavLink({ title, href, toggleMenu }) {
  const mobileVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <motion.div
      variants={mobileVars}
      initial="initial"
      animate="open"
      className="text-4xl uppercase text-white whitespace-nowrap"
    >
      <Link to={href} onClick={toggleMenu}>
        {title}
      </Link>
    </motion.div>
  );
}
