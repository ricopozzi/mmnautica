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

const Home: NextPage = () => {
  const servicesRef = useRef().current;
  console.log(servicesRef);

  return (
    <>
      <Header />
      <main className='pt-24 min-h-screen md:w-3/5 md:mx-auto '>
        <div id='start' className='min-h-40 flex flex-col justify-center'>
          <h1 className='text-3xl font-bold text-center text-slate-800 md:z-50'>
            ⛵ M M Náutica
          </h1>
          <h1 className='text-xl md:text-3xl font-semibold text-center text-slate-800 mt-2 md:z-50'>
            Escola de Navegação
          </h1>
          <img
            className='md:absolute md:left-0 md:scale-100 '
            src='/wave.svg'
            alt=''
          />
        </div>

        <img
          src='https://tudoemilhabela.com.br/img/site/mm_navegacao_e_cursos_nauticos4.jpeg'
          className='mx-auto mt-8 md:mt-60 rounded-lg w-11/12 md:w-7/12 shadow-2xl '
        />
        <h2 className='text-center mt-7 font-medium text-slate-700'>
          O mar é a escola, o vento o professor, nossos barcos salas de aula e
          todos somos alunos.
        </h2>

        <h1 className='mt-12 text-center font-bold text-xl'>Parceiros:</h1>
        <section className='w-auto min-h-20 mt-6 flex flex-wrap justify-between  px-6'>
          <img
            src='https://www.nauticupom.com/custom/domain_1/image_files/sitemgr_photo_3075.png'
            alt=''
            className='w-16 object-contain'
          />
          <img
            src='https://www.bombarco.com.br/img_zeromilhas/logo.png'
            alt=''
            className='w-16 object-contain'
          />
          <img
            src='http://guiadocapitao.com.br/images/uploads/5c349dbd0d33b.jpg.'
            alt=''
            className='w-16 object-contain'
          />
          <img
            src='https://www.nauticupom.com/custom/domain_1/image_files/sitemgr_photo_7444.jpg'
            alt=''
            className='w-16 object-contain'
          />
        </section>
        <ServicesSection />
        <TeamSection />
        <InfoSection />
        <ContactSection />
        <WppButton />
      </main>

      <Footer />
    </>
  );
};

export default Home;
