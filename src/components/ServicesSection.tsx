import { GiShipWheel } from "react-icons/gi";
import { ArraisCard } from "./ArraisCard";
import { MestreCard } from "../components/MestreCard";
import { CapitaoCard } from "./CapitaoCard";
import { MotonautaCard } from "./MotonautaCard";

export function ServicesSection() {
  return (
    <>
      <div id='services' className='mt-7 px-5 min-h-80 m  r'>
        <div className='flex items-center md:justify-center'>
          <img src='/boat.svg' alt='' className='w-10' />
          <h1 className='font-bold text-xl ml-2'>Serviços</h1>
        </div>
        <div className='lg:grid grid-cols-2 gap-y-3 lg:mt-5 lg:w-[80vw] xl:w-[60vw] lg:mx-auto'>
          <h2 className='lg:hidden mt-4 font-semibold text-lg text-center'>
            Arrais amador
          </h2>
          <ArraisCard />

          <h2 className='lg:hidden bg-transparent mt-4 font-semibold text-lg text-center'>
            Mestre amador
          </h2>
          <MestreCard />
          <h2 className='lg:hidden bg-transparent mt-4 font-semibold text-lg text-center'>
            Capitão amador
          </h2>
          <CapitaoCard />

          <h2 className='lg:hidden bg-transparent mt-4 font-semibold text-lg text-center'>
            Motonauta
          </h2>
          <MotonautaCard />
        </div>
      </div>
    </>
  );
}
