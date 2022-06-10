import { MdOutlinePlace } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

export function InfoSection() {
  return (
    <>
      <section className='px-5 min-h-44 flex mt-8'>
        <div className='w-11/12 lg:w-4/12 min-h-40 bg-gray-50 mx-auto my-auto rounded-xl px-1 py-2 shadow-xl flex flex-col border-t border-r border-l'>
          <div className='flex'>
            <MdOutlinePlace size={28} />
            <p className='ml-1 tracking-tight'>
              Rua Dr. Carvalho,146 Ilhabela-SP
            </p>
          </div>
          <div className='flex mt-2'>
            <HiOutlineMail size={28} />
            <p className='ml-1 tracking-tight '>mmnauticailhabela@gmail.com</p>
          </div>
          <div className='flex mt-2'>
            <AiOutlinePhone size={28} />
            <p className='ml-1 tracking-tight'>(11) 98277-9222</p>
          </div>
          <div className='flex mt-2'>
            <AiOutlineWhatsApp size={28} />
            <p className='ml-1 tracking-tight'>(12) 99675-4051</p>
          </div>
        </div>
      </section>
    </>
  );
}
