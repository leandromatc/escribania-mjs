import Propiedad from "../../../components/Propiedad";

export default function Propiedades() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-palanquin text-5xl  sm:text-7xl text-center text-textDark ">
          Propiedades
        </h2>
        <span className="bg-textDark w-48 h-[1px] block mt-8"></span>
      </div>
      <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10">
        <Propiedad />
        <Propiedad />
        <Propiedad />
        <Propiedad />
        <Propiedad />
        <Propiedad />
        <Propiedad />
        <Propiedad />
      </div>
    </>
  );
}
