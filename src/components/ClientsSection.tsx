export function ClientsSection() {
  return (
    <>
      <main className='h-[20vh] pt-4 mt-14 flex flex-col items-center'>
        <h1 className='text-center text-xl font-bold mb-8 '>Clientes:</h1>
        <div className='flex gap-6 md:gap-10'>
          <img src='netflix.svg' className='w-28 md:w-32' />

          <img src='pilao.webp' alt='' className='w-28 md:w-32 h-20' />

          <img src='caras.svg' alt='revista caras' className='w-28 md:w-32' />
        </div>
      </main>
    </>
  );
}
