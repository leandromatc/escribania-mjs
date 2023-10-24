import { ImLocation } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-secondary p-20  text-white">
      <section className="lg:grid lg:grid-cols-2 mb-10">
        <div className="flex flex-col">
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
                href="https://wa.me/59899550722"
                className="bg-primary rounded p-1 hover:bg-textDark transition-all"
              >
                +59899550722
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full h-1 mx-auto my-4 bg-primary border-0 rounded md:my-10" />
    </footer>
  );
}
