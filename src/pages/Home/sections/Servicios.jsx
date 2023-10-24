import { LuFileSignature } from "react-icons/lu";
import { PiCertificateBold } from "react-icons/pi";
import { RiFilePaperLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <div className="w-full flex flex-col items-center font-inter lg:pb-20">
      <h2 className="font-palanquin text-5xl  sm:text-7xl text-center text-textDark ">
        Servicios
      </h2>
      <span className="bg-textDark w-48 h-[1px] block mt-8"></span>
      <div className="lg:justify-around flex flex-col lg:flex-row text-2xl text-center items-center text-secondary w-full mt-20 gap-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, marginTop: "5rem" }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ delay: 0.1, ease: "linear" }}
          viewport={{
            once: true,
          }}
        >
          <RiFilePaperLine className="text-8xl hover:scale-110 transition-all hover:text-textDark cursor-pointer" />
          <p className="mt-5">Escrituras</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, marginTop: "5rem" }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ delay: 0.2, ease: "linear" }}
          viewport={{
            once: true,
          }}
        >
          <LuFileSignature className="text-8xl hover:scale-110 transition-all hover:text-textDark cursor-pointer" />
          <p className="mt-5">Tramites judiciales</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, marginTop: "5rem" }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ delay: 0.3, ease: "linear" }}
          viewport={{
            once: true,
          }}
        >
          <PiCertificateBold className="text-8xl hover:scale-110 transition-all hover:text-textDark cursor-pointer" />
          <p className="mt-5">Certificados</p>
        </motion.div>
      </div>
    </div>
  );
}
