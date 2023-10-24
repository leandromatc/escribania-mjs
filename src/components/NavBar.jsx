import { Link, NavLink } from "react-router-dom";
import logoMJS from "../assets/images/logoMJS.svg";
import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";
import close from "../assets/icons/close.svg";
import MobileNavLink from "./MobileNavLink";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };
  return (
    <header className="w-full z-10 absolute padding-x px-2 py-4 bg-primary">
      <nav className="flex justify-between items-center max-container bg-">
        <Link to={"/"}>
          <img src={logoMJS} alt="Logo MJS" width={50} height={50} />
        </Link>
        <ul className=" flex font-inter items-center gap-16 max-lg:hidden">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.href}
                className="text-white uppercase p-2 w-full h-full rounded-lg hover:bg-secondary transition-all"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              className="hidden max-lg:block fixed left-0 top-0 w-full h-screen bg-primary py-4 px-2 padding-x text-white origin-top"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between items-center">
                  <Link to={"/"}>
                    <img src={logoMJS} alt="Logo MJS" width={50} height={50} />
                  </Link>
                  <img
                    src={close}
                    alt="Botón de cerrar"
                    height={25}
                    width={25}
                    className="cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-palanquin items-center gap-4"
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index} className="overflow-hidden">
                        <MobileNavLink
                          title={link.label}
                          href={link.href}
                          toggleMenu={toggleMenu}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
