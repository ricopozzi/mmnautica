import { GiShipWheel } from "react-icons/gi";
import { ArraisCard } from "./ArraisCard";
import { MestreCard } from "../components/MestreCard";
import { CapitaoCard } from "./CapitaoCard";
import { MotonautaCard } from "./MotonautaCard";

export function ServicesSection() {
  return (
    <>
      <div id='services' className='mt-7 px-5 min-h-80 md:justify-center'>
        <div className='flex items-center md:justify-center'>
          <img src='/boat.svg' alt='' className='w-10' />
          <h1 className='font-bold text-xl ml-2'>Serviços</h1>
        </div>
        <h2 className='mt-8 font-semibold text-lg text-center'>
          Arrais amador
        </h2>
        <ArraisCard />
        <h2 className='bg-transparent mt-4 font-semibold text-lg text-center'>
          Mestre amador
        </h2>
        <MestreCard />
        <h2 className='bg-transparent mt-4 font-semibold text-lg text-center'>
          Capitão amador
        </h2>
        <CapitaoCard />
        <h2 className='bg-transparent mt-4 font-semibold text-lg text-center'>
          Motonauta
        </h2>
        <MotonautaCard />
      </div>
    </>
  );
}
