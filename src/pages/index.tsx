import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { ServicesSection } from "../components/ServicesSection";
import { TeamSection } from "../components/TeamSection";
import { WppButton } from "../components/WppButton";
import { ContactSection } from "../components/ContactSection";
import { InfoSection } from "../components/InfoSection";
import { Footer } from "../components/Footer";
import { useRef } from "react";
import { ClientsSection } from "../components/ClientsSection";

const Home: NextPage = () => {
  const servicesRef = useRef().current;

  return (
    <>
      <Header />
      <main className=' min-h-screen  md:mx-auto '>
        <div
          id='start'
          className='flex flex-col bg-indigo-500 max-w-screen h-[70vh]'
        >
          {/* <h1 className='text-3xl font-bold text-center text-slate-800 md:z-50'>
            ⛵ M M Náutica
          </h1>
          <h1 className='text-xl md:text-3xl font-semibold text-center text-slate-800 mt-2 md:z-50'>
            Escola de Navegação
          </h1> */}
          {/* <img
            src='mmlogo.png'
            alt=''
            className='z-10 absolute md:left-[23vw] top-64 w-52'
          />

          <h1 className='z-10 absolute md:left-[18vw] md:top-[23rem] text-5xl font-bold text-[#324679] tracking-wider'>
            M M NÁUTICA
          </h1>

          <p className='z-10 absolute md:left-[12vw] md:top-[26.5rem] text-5xl font-bold text-white tracking-wider drop-shadow-2xl uppercase'>
            Escola de navegação
          </p> */}

          <div className='z-10 absolute left-0 right-0 w-[90vw] md:min-w-[25rem] mx-auto  md:left-[10vw] md:right-auto top-64 md:w-[25vw] h-64 p-4 bg-slate-800/30 backdrop-blur-sm rounded-md flex flex-col'>
            <img
              src='mmlogo.png'
              alt=''
              className='z-10  md:left-[23vw] top-64 w-44'
            />

            <h1 className='z-10 text-4xl font-bold text-white tracking-wider'>
              M M NÁUTICA
            </h1>

            <p className='z-10 mt-4 text-2xl font-bold text-white tracking-wider uppercase'>
              Escola de navegação
            </p>
          </div>

          <img
            src='bgsail.jpg'
            alt='mm nautica ilhabela sp'
            className='w-screen object-cover h-[70vh] backdrop-saturate-50'
          />
        </div>

        <h2 className='text-center mt-12 text-2xl md:text-3xl md:px-36 font-black leading-9 text-slate-700 px-2 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-800'>
          O mar é a escola, o vento o professor, nossos barcos salas de aula e
          todos somos alunos.
        </h2>
        <ClientsSection />

        <h1 className='mt-12 text-center font-bold text-xl'>Parceiros:</h1>

        <section className='w-auto min-h-20 mt-6 flex flex-wrap gap-10 px-2 justify-center'>
          <img
            src='marinaporto.png'
            alt=''
            className='w-16 md:w-24 object-contain'
          />
          <img
            src='bombarco.png'
            alt=''
            className='w-16 md:w-24 object-contain'
          />
          <img
            src='regatta.png'
            alt=''
            className='w-16 md:w-24 object-contain'
          />
          <img src='rumar.png' alt='' className='w-16 md:w-24 object-contain' />
        </section>
        <ServicesSection />
        <TeamSection />
        <InfoSection />
        <div className='flex justify-center my-5'>
          <iframe
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmmnautica%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=863480194252331'
            width='340'
            height='500'
            className='border-none overflow-hidden'
            scrolling='no'
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          ></iframe>
        </div>
        <ContactSection />

        <WppButton />
      </main>

      <Footer />
    </>
  );
};

export default Home;
