import bgHero from "../../../assets/images/bg-hero.jpg";
import { BsSearch } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="bg-hero h-screen bg-cover flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <h1 className="sm:text-6xl text-4xl mt-20 font-palanquin text-white p-10">
          Encontra la casa que estás buscando para{" "}
          <span className="text-emphasis">comprar o alquilar</span>
        </h1>
        <div className="flex flex-col mt-10 gap-5 lg:flex-row  bg-white rounded-3xl p-5  lg:gap-20 justify-center items-center text-gray-600">
          <div className="flex flex-col gap-8 lg:flex-row md:gap-10">
            <select
              name="operacion"
              id="operacion"
              className="rounded-2xl bg-gray-100 p-5 w-[250px]"
            >
              <option value="operacion">Operación</option>
              <option value="alquiler">Alquiler</option>
              <option value="compra">Compra</option>
            </select>
            <select
              name="propiedad"
              id="propiedad"
              className="rounded-2xl bg-gray-100 p-5 w-[250px]"
            >
              <option value="propiedad">Propiedad</option>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
              <option value="campo">Campo</option>
            </select>
            <select
              name="zona"
              id="zona"
              className="rounded-2xl bg-gray-100 p-5 w-[250px]"
            >
              <option value="zona">Zona</option>
              <option value="centro">Centro</option>
              <option value="rambla">Rambla</option>
            </select>
          </div>
          <div className="bg-primary text-white text-3xl p-5 py-2 md:p-4 rounded-xl cursor-pointer hover:bg-secondary transition-all">
            <BsSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
