import Hero from "./sections/Hero";
import Propiedades from "./sections/Propiedades";
import Servicios from "./sections/Servicios";

export default function Home() {
  return (
    <main className="relative bg-bgColor scroll-smooth">
      <section>
        <Hero />
      </section>
      <section className="padding-t px-2 sm:padding">
        <Propiedades />
      </section>
      <section className="padding-t px-2 sm:padding">
        <Servicios />
      </section>
    </main>
  );
}
