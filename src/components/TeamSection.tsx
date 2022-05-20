export function TeamSection() {
  return (
    <>
      <div id='team' className='mt-8 px-5 min-h-80 flex flex-col'>
        <div className='flex items-center md:justify-center mt-7 mb-3'>
          <img src='/team.svg' alt='' className='w-10' />
          <h1 className='font-bold text-xl ml-2'>Equipe</h1>
        </div>
        <img
          src='https://tudoemilhabela.com.br/img/site/mm_navegacao_e_cursos_nauticos9.jpeg'
          alt=''
          className='mt-4 rounded-lg w-72 md:w-96 mx-auto shadow-2xl'
        />

        <h2 className='mt-7 mb-3 font-medium text-lg text-gray-700 text-center'>
          Equipe MM Náutica, da esquerda para direita:{" "}
        </h2>

        <h2 className='mt-4 font-medium text-center text-slate-700'>
          Capitão Marcos Levy
        </h2>
        <p className='mt-2 text-sm text-slate-600 md:w-1/2 md:mx-auto'>
          CEO da MM Nautica, Yachtmaster offshore, MAC da Marinha Mercante,
          instrutor de mergulho autônomo pelas certificadoras PADI e SSI.
          Apaixonado pela navegação e da mesma forma que a equipe da escola,
          realiza o trabalho com muito amor.
        </p>

        <h2 className='mt-2 font-medium text-center text-slate-700 '>
          Joyce Cesar
        </h2>
        <p className='mt-2 text-sm text-slate-600 md:w-1/2 md:mx-auto'>
          Nosso braço direito, professora de educação física e a gentileza,
          simpatia e profissionalismo que fazem a diferença.
        </p>

        <h2 className='mt-2 font-medium text-center text-slate-700'>
          Monica Levy
        </h2>
        <p className='mt-2 text-sm text-slate-600 md:w-1/2 md:mx-auto'>
          O coração da escola, arquiteta pós graduada em design náutico,
          navegadora habilitada e mergulhadora certificada.
        </p>
      </div>
    </>
  );
}