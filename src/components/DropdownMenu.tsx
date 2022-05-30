import { Menu } from "@headlessui/react";

export function DropdownMenu({ handleClick }: any) {
  return (
    <Menu as='div' className='relative ml-auto pt-4 z-20'>
      <Menu.Button
        className='inline-flex md:hidden ml-auto mr-2 justify-center w-14 h-14 bg-blue-500 my-auto rounded-md border shadow-sm px-4 text-center
      items-center text-white font-semibold bordernone
      '
      >
        Menu
      </Menu.Button>
      <Menu.Items
        className='origin-top-right absolute right-0 mt-1 w-56 rounded-md drop-shadow-2xl bg-gray-100 border-2 
    
      '
      >
        <div className='py-1 border-b'>
          <a
            href='#start'
            className='group flex items-center px-4 py-2 text-sm text-gray-700'
            onClick={handleClick}
          >
            Início
          </a>
        </div>
        <div className='py-1 border-b'>
          <a
            href='#services'
            className='group flex items-center px-4 py-2 text-sm text-gray-700'
            onClick={handleClick}
          >
            Serviços
          </a>
        </div>
        <div className='py-1 border-b'>
          <a
            href='#team'
            className='group flex items-center px-4 py-2 text-sm text-gray-700'
            onClick={handleClick}
          >
            Equipe
          </a>
        </div>
        <div className='py-1'>
          <a
            href='#contact'
            className='group flex items-center px-4 py-2 text-sm text-gray-700'
            onClick={handleClick}
          >
            Contato
          </a>
        </div>
      </Menu.Items>
    </Menu>
  );
}
