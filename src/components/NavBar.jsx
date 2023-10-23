import { Link, NavLink } from "react-router-dom";
import logoMJS from "../assets/images/logoMJS.svg";
import { navLinks } from "../constants";

export default function NavBar() {
  return (
    <header className="w-full z-10 absolute padding-x py-4 bg-primary">
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
      </nav>
    </header>
  );
}
