import { GiShipWheel } from "react-icons/gi";
import { ArraisCard } from "./ArraisCard";
import { MestreCard } from "../components/MestreCard";
import { CapitaoCard } from "./CapitaoCard";
import { MotonautaCard } from "./MotonautaCard";
import { VeleirosCard } from "./Veleiros";

export function ServicesSection() {
  return (
    <>
      <div id='services' className='mt-7 px-5 min-h-80'>
        <div className='flex items-center justify-center mx-auto'>
          <h1 className='font-bold text-xl ml-2 text-center '>Serviços</h1>
        </div>
        <div className='lg:grid grid-cols-2 gap-y-3 lg:mt-7 lg:w-[80vw] xl:w-[50vw] lg:mx-auto'>
          <h2 className='lg:hidden mt-8 font-semibold text-lg text-center'>
            Arrais amador
          </h2>
          <ArraisCard />

          <h2 className='lg:hidden bg-transparent mt-8 font-semibold text-lg text-center'>
            Mestre amador
          </h2>
          <MestreCard />
          <h2 className='lg:hidden bg-transparent mt-8 font-semibold text-lg text-center'>
            Capitão amador
          </h2>
          <CapitaoCard />

          <h2 className='lg:hidden bg-transparent mt-8 font-semibold text-lg text-center'>
            Motonauta
          </h2>
          <MotonautaCard />
          <h2 className='lg:hidden bg-transparent mt-8 font-semibold text-lg text-center'>
            Veleiro
          </h2>
          <VeleirosCard />
        </div>
      </div>
    </>
  );
}
