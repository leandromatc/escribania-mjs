import { RxDimensions } from "react-icons/rx";
import { PiToilet } from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import house from "../assets/images/bg-hero.jpg";

export default function Propiedad() {
  return (
    <article className="bg-white rounded-3xl relative overflow-hidden flex flex-col max-w-[300px] sm:max-w-full">
      <img src={house} alt="Casa" className=" object-cover" />
      <div className="p-5">
        <h4 className="uppercase text-2xl font-inter font-bold text-textDark">
          Alquiler
        </h4>
        <p className="font-inter text-xl text-textDark">
          Casa de 1 dormitorio y 1 baño.
        </p>
        <p className="flex items-center text-xl text-textDark">
          <ImLocation className="mr-1" /> Sánchez 892
        </p>
      </div>
      <div className="bg-gray-100 flex flex-col md:flex-row justify-center gap-5 items-center m-5 p-5 rounded-2xl text-textDark">
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
          <p>250m2</p>
        </div>
      </div>
    </article>
  );
}
