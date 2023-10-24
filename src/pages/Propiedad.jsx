import house from "../assets/images/bg-hero.jpg";
import { RxDimensions } from "react-icons/rx";
import { PiToilet } from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsHouse } from "react-icons/bs";

export default function Propiedad() {
  console.log("Hola");
  return (
    <section className="bg-bgColor p-2 md:padding-x  flex flex-col items-center">
      <div className="mt-36">
        <p className="uppercase opacity-50 text-center">Mjs Escribanía</p>
        <h2 className="text-textDark text-3xl md:text-4xl font-bold px-5 text-center">
          ALQUILER de casa con 1 dormitorio y 1 baño
        </h2>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 text-textDark gap-5">
        <div className="bg-white rounded overflow-hidden flex flex-col gap-4">
          <img src={house} alt="Casa" />
          <div className="p-10">
            <h3 className="text-2xl font-bold text-center whitespace-nowrap">
              Alquiler: $20.000 <sub>/mes</sub>
            </h3>
            <div className="mt-10 flex flex-col text-2xl gap-2 font-bold">
              <div className="flex items-center">
                <BsHouse className="mr-3 text-3xl" />
                <p>Casa</p>
              </div>
              <div className="flex items-center">
                <ImLocation className="mr-3 text-3xl" />
                <p>Sánchez 892</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:justify-between">
                <div className="flex items-center">
                  <BiBed className="mr-3 text-3xl" />
                  <p>1 Dormitorio</p>
                </div>
                <div className="flex items-center">
                  <PiToilet className="mr-3 text-3xl" />
                  <p>1 baño</p>
                </div>
                <div className="flex items-center">
                  <RxDimensions className="mr-3 text-3xl" />
                  <p>250m2</p>
                </div>
              </div>
            </div>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, laboriosam! Architecto quisquam, nobis voluptates animi
              tempora fugit, id eius harum perspiciatis modi sunt. Soluta, animi
              beatae! Tenetur, unde officia! Perspiciatis! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Porro eligendi quo laboriosam
              suscipit facilis corrupti praesentium magnam sequi voluptatibus!
              Dolorum, saepe? Aspernatur ipsa eveniet fuga ducimus excepturi
              maxime rem aut. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quibusdam fuga, enim eaque quod deserunt illo
              saepe maxime nulla quae aliquam nihil omnis ut placeat vel
              distinctio architecto doloremque iure et.
            </p>
          </div>
        </div>
        <div className="bg-white rounded h-max ">
          <h3 className="pt-4 px-5 text-2xl font-bold uppercase">
            Consulta por esta propiedad
          </h3>
          <form action="" className="p-5 flex flex-col items-center gap-5">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido:"
              className="border py-2 w-full rounded px-4 focus:border-primary"
            />
            <input
              type="email"
              name="mail"
              placeholder="Email:"
              className="border py-2 w-full rounded px-4 focus:border-primary"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono / Móvil:"
              className="border py-2 w-full rounded px-4 focus:border-primary"
            />
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad:"
              className="border py-2 w-full rounded px-4 focus:border-primary"
            />
            <textarea
              name="mensaje"
              id="mensaje"
              cols="30"
              rows="10"
              placeholder="Escribe tu consulta / mensaje:"
              className="border rounded w-full px-4 py-2 focus:border-primary resize-none"
            ></textarea>
            <div className="w-full flex items-center">
              <input
                type="checkbox"
                name="mail-confirmation"
                id="mail-confirmation"
                className="mr-2 h-4 w-4 rounded-full"
              />
              <p className="text-secondary">Enviar una copia a mi mail</p>
            </div>
            <button
              type="submit"
              className="w-full bg-primary py-2 px-4 rounded text-white hover:bg-secondary transition-all"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
