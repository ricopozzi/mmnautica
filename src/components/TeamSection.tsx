export function TeamSection() {
  return (
    <>
      <div id='team' className='mt-8 px-5 min-h-80 flex flex-col'>
        <div className='flex items-center justify-center mt-7 mb-3'>
          <h1 className='font-bold text-xl '>Equipe</h1>
        </div>

        <h2 className='mt-7 mb-3 font-medium text-lg text-gray-700 text-center'>
          Equipe MM Náutica:
        </h2>

        <h2 className='mt-4 font-medium text-center text-slate-700'>
          Capitão Marcos Levy
        </h2>
        <p className='mt-2 text-justify text-slate-600 md:w-1/2 md:mx-auto'>
          CEO da MM Nautica, Yachtmaster offshore, pertence à Marinha Mercante,
          instrutor de mergulho SCUBA.Apaixonado pela navegação.
        </p>

        <h2 className='mt-4 font-medium text-center text-slate-700 '>
          Joyce Cesar
        </h2>
        <p className='mt-2 text-justify text-slate-600 md:w-1/2 md:mx-auto'>
          Nosso braço direito. Joyce é professora de educação física e a
          gentileza, simpatia e profissionalismo que fazem a diferença.
        </p>

        <h2 className='mt-4 font-medium text-center text-slate-700'>
          Monica Levy
        </h2>
        <p className='mt-2 text-justify text-slate-600 md:w-1/2 md:mx-auto'>
          O coração da escola, arquiteta pós graduada em design náutico,
          navegadora habilitada e mergulhadora certificada.
        </p>

        <h2 className='mt-4 font-medium text-center text-slate-700'>
          André Cabral
        </h2>

        <img
          src='/andre-cabral.webp'
          className='w-36 h-36 mx-auto rounded-lg my-4'
        />
        <p className='mt-2  text-slate-600 md:w-1/2 md:mx-auto text-center'>
          Esse é o André Cabral . Biologo, capitão amador e homem do mar
          competente.
        </p>
      </div>
    </>
  );
}
