import { RxDimensions } from "react-icons/rx";
import { PiToilet } from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import house from "../assets/images/bg-hero.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PropiedadCard() {
  return (
    <motion.article
      className="relative bg-white rounded-3xl text-textDark flex flex-col max-w-full shadow-lg overflow-hidden"
      initial={{ opacity: 0, marginTop: "5rem" }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ delay: 0.1, ease: "linear" }}
      viewport={{
        once: true,
      }}
    >
      <img src={house} alt="Casa" className=" object-cover" />
      <div className="p-5">
        <Link to={"/propiedad"}>
          <h4 className="uppercase text-2xl font-inter font-bold">Alquiler</h4>
          <p className="font-inter text-xl">Casa de 1 dormitorio y 1 baño.</p>
        </Link>
        <p className="flex items-center text-xl mt-2">
          <ImLocation className="mr-1" /> Sánchez 892
        </p>
      </div>
      <div className="bg-gray-100 flex flex-col md:flex-row justify-center gap-5 items-center m-5 p-5 rounded-2xl">
        <div className="flex items-center gap-2">
          <BiBed className="text-2xl" />
          <p>1 dormitorio</p>
        </div>
        <div className="flex items-center gap-2">
          <PiToilet className="text-2xl" />
          <p>1 baño</p>
        </div>
        <div className="flex items-center gap-2">
          <RxDimensions className="text-2xl" />
          <p>
            250m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="absolute left-5 top-5 flex items-center rounded overflow-hidden">
        <div className="w-[30px] h-[30px] bg-orange-400 p-1 flex items-center justify-center">
          <AiFillStar className=" text-white text-xl" />
        </div>
        <span className="bg-black bg-opacity-30 h-[30px] px-2 flex items-center text-white uppercase font-inter">
          Destacada
        </span>
      </div>
    </motion.article>
  );
}
