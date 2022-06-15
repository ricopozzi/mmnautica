export function ClientsSection() {
  return (
    <>
      <main className='min-h-[20vh] pt-4 mt-14 flex flex-col items-center'>
        <h1 className='text-center text-xl font-bold mb-8 '>Clientes:</h1>
        <div className='flex gap-x-[3%] gap-y-3 md:gap-10 flex-wrap justify-center'>
          <img src='netflix.svg' className='w-[30%] md:w-32' />

          <img src='pilao.webp' alt='' className='w-[30%] md:w-32 h-20' />

          <img
            src='caras.svg'
            alt='revista caras'
            className='w-[30%] md:w-32'
          />
        </div>
      </main>
    </>
  );
}
