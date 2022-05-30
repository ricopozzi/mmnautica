import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { Menu } from "@headlessui/react";
import { DropdownMenu } from "./DropdownMenu";

export function Header() {
  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className='h-20 flex px-2 z-40 w-full bg-white justify-center'>
        <div className='flex w-3/4 h-full justify-center mx-auto'>
          <nav className=' hidden w-full h-full md:flex justify-center items-center mx-auto'>
            <a
              href='#start'
              onClick={handleClick}
              className='cursor-pointer text-xl font-semibold hover:bg-blue-100 hover:text-blue-900 rounded-md min-w-16 px-2 h-8 flex justify-center items-center'
            >
              Início
            </a>
            <a
              href='#services'
              onClick={handleClick}
              className='ml-4 cursor-pointer text-xl font-semibold hover:bg-blue-100 hover:text-blue-900 rounded-md min-w-16 px-2 h-8 flex justify-center items-center'
            >
              Serviços
            </a>
            <a
              href='#team'
              onClick={handleClick}
              className='ml-4 cursor-pointer text-xl font-semibold hover:bg-blue-100 hover:text-blue-900 rounded-md min-w-16 px-2 h-8 flex justify-center items-center'
            >
              Equipe
            </a>
            <a
              href='#contact'
              onClick={handleClick}
              className='ml-4 cursor-pointer text-xl font-semibold hover:bg-blue-100 hover:text-blue-900 rounded-md min-w-16 px-2 h-8 flex justify-center items-center'
            >
              Contato
            </a>
          </nav>
        </div>
        <DropdownMenu handleClick={handleClick} />
      </div>
    </>
  );
}
