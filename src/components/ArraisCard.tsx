import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import { useState, Fragment } from "react";
import { RiWhatsappLine } from "react-icons/ri";

export function ArraisCard() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div
        onClick={openModal}
        className='max-w-xl lg:hidden min-h-52 bg-white mt-2 rounded-lg drop-shadow-xl border pr-4 flex flex-col duration-200 hover:cursor-pointer mx-auto 
        hover:bg-stone-200'
      >
        <div className='flex items-center'>
          <img
            src='arraismobile.jpg'
            alt=''
            className='rounded-l-md  object-cover h-32 w-32'
          />

          <p className='pl-5 pr-2 font-normal text-slate-600'>
            Habilita o aluno a comandar embarcações de esporte e recreio em
            aguas abrigadas.
          </p>
        </div>
      </div>

      <div
        onClick={openModal}
        className='mt-2 w-96 bg-base-100 drop-shadow-2xl hidden lg:flex lg:flex-col mr-auto rounded-lg'
      >
        <figure className=''>
          <img
            src='arrais.jpg'
            alt='Shoes'
            className='rounded-t-lg object-cover w-full h-52'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Arrais amador!</h2>
          <p>
            Habilita o aluno a comandar embarcações de esporte e recreio em
            aguas abrigadas.
          </p>
          <div className='card-actions justify-end'>
            <button className=' bg-blue-100 w-24 h-9 rounded-md mt-7 text-blue-900 font-medium '>
              Ver Mais
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  as='div'
                  className='w-full max-w-md transform overflow-hidden rounded-2xl -z-50 bg-white p-6 text-left align-middle shadow-xl transition-all'
                >
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Arrais
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='mt-2 text-lg font-semibold'>
                      São dois momentos:
                    </p>
                    <p className='mt-2 text-sm'>
                      1 dia com prática e teoria onde acontece o embarque do
                      aluno para realizar as manobras previstas pela Marinha do
                      Brasil, e, um segundo momento onde o aluno realizará o
                      exame teórico na delegacia da capitania dos portos de São
                      Sebastião.
                    </p>
                    <p className='mt-2 text-sm '>
                      O treinamento prático é realizado no canal de São
                      Sebastião com Carga horária de 6 horas.
                    </p>
                    <ul className='mt-2'>
                      <p className='font-semibold'>Incluso no curso da MM:</p>
                      <li className='mt-2'>- Material didático</li>
                      <li>- Taxas da marinha</li>
                      <li>- Serviço de despachante</li>
                      <li>- Treinamento prático de 6 horas</li>
                      <li>- Lanche a bordo</li>
                    </ul>
                    <p></p>
                  </div>

                  <div className='mt-4 hover:cursor-pointer'>
                    <div
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none '
                      onClick={closeModal}
                    >
                      Entendi
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
