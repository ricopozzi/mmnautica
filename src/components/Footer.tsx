import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className='min-h-12 bg-blue-600 flex justify-center py-4 gap-x-2'>
        <div
          onClick={() => {
            window.open("https://www.instagram.com/mmnautica/");
          }}
          className='bg-gray-800 rounded-lg hover:cursor-pointer'
        >
          <AiOutlineInstagram size={38} color={"white"} />
        </div>
        <div
          onClick={() => {
            window.open("https://www.facebook.com/mmnautica/");
          }}
          className='bg-gray-800 rounded-lg hover:cursor-pointer w-9 h-38 flex justify-center items-center'
        >
          <FaFacebook size={30} color={"white"} className='rounded-2xl' />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=5511982779222&text=Ol%C3%A1%2C%20vim%20pelo%20site!"
            );
          }}
          className='bg-gray-800 rounded-lg hover:cursor-pointer w-9 h-38 flex justify-center items-center'
        >
          <FaWhatsapp size={30} color={"white"} className='rounded-2xl' />
        </div>
      </footer>
    </>
  );
}
