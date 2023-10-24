import { ImLocation } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsPhone, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-secondary py-10 px-5 md:p-20 text-white">
      <section className="lg:grid lg:grid-cols-2">
        <div className="flex flex-col mb-10 lg:mb-0">
          <h4 className="text-white text-4xl uppercase font-bold font-palanquin">
            Escribanía MJS
          </h4>
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center">
              <ImLocation className="mr-3 text-2xl text-emphasis" />
              <p>Taruselli, Mercedes, Soriano, Uruguay</p>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-3 text-2xl text-emphasis" />
              <p>De 9:00hs a 13:00hs</p>
            </div>
            <div className="flex items-center">
              <AiOutlineMail className="mr-3 text-2xl text-emphasis" />
              <a href="mailto: mariajos_sanchez@gmail.com">
                mariajos_sanchez@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <BsPhone className="mr-3 text-2xl text-emphasis" />
              <a
                href="tel:+59899550722"
                className="bg-primary rounded p-1 hover:bg-textDark transition-all"
              >
                +59899550722
              </a>
            </div>
            <div className="flex items-center">
              <BsWhatsapp className="mr-3 text-2xl text-emphasis" />
              <a
                href="https://api.whatsapp.com/send?phone=59899550722"
                className="bg-primary rounded p-1 hover:bg-textDark transition-all"
                target="_blank"
              >
                +59899550722
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 lg:gap-0">
          <div>
            <h4 className="text-4xl uppercase font-bold font-palanquin">
              Secciones
            </h4>
            <div>
              <ul className="lg:flex lg:gap-5 mt-5">
                {navLinks.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-primary transition-all flex items-center gap-2"
                  >
                    <Link to={link.href}>{link.label}</Link>
                    <HiOutlineArrowLongRight />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-4xl uppercase font-bold font-palanquin">
              Redes Sociales
            </h4>
            <div className="mt-5 flex gap-4 items-center">
              <Link
                to={"https://www.instagram.com/escribania_mjs/"}
                target="_blank"
              >
                <AiOutlineInstagram className="w-8 h-8 text-emphasis hover:text-textDark transition-all" />
              </Link>
              <Link
                to={
                  "https://www.facebook.com/p/Escribana-Mar%C3%ADa-Jos%C3%A9-S%C3%A1nchez-100064727118146/?paipv=0&eav=AfZ5GYJyEG7iJbmIPRPk8Iejm3UA8L7GIYVuCY5HJ25XBuxswoAC7rvdJzlSmmEnVrs&_rdr"
                }
                target="_blank"
              >
                <BsFacebook className="w-7 h-7 text-emphasis hover:text-textDark transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full h-1 mx-auto my-16 bg-primary border-0 rounded md:my-10" />
      <div>
        <p>Copyright &copy; 2023 ESCRIBANÍA MJS</p>
      </div>
    </footer>
  );
}
