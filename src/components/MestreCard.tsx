import { Transition, Dialog } from "@headlessui/react";
import { useState, Fragment } from "react";
import { RiWhatsappLine } from "react-icons/ri";

export function MestreCard() {
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
        className='max-w-xl min-h-52 bg-white mt-2 rounded-lg drop-shadow-xl border px-4 py-2 flex flex-col hover:cursor-pointer mx-auto'
      >
        <div className='flex items-center'>
          <img
            src='https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='
            alt=''
            className='rounded-md h-32'
          />
          <p className='pl-5 pr-2 font-normal text-slate-600'>
            Habilita o aluno a conduzir embarcações de esporte e recreio a até
            20 milhas náuticas da costa.
          </p>
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl -z-50 bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='mt-2'>
                    <p className='mt-2 text-lg font-semibold'>Mestre amador:</p>
                    <p className='mt-2 text-sm'>
                      A MM Náutica oferece duas possibilidades de curso,
                      extensivo e intensivo, ambos contemplam as matérias
                      pertinentes ao exame da marinha e, nosso foco principal é
                      a aprovação do aluno com conhecimento e segurança para
                      fazer-se ao mar.
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none '
                      onClick={closeModal}
                    >
                      Entendi
                    </button>
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
