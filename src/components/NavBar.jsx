import { Link, NavLink } from "react-router-dom";
import logoMJS from "../assets/images/logoMJS.svg";
import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";

export default function NavBar() {
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
          />
        </div>
      </nav>
    </header>
  );
}
