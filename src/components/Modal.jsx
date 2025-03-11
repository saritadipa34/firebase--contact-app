import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";

const Modal = ({onClose}) => {
  return createPortal (
    <>
    <div 
    className="absolute inset-0 h-screen flex justify-center items-center w-screen z-40 backdrop-blur"
    >
    <div className='relative h-[200px] z-50 w-[300px] bg-white pt-4 pb-0 px-1'>
      <ImCross onClick={onClose} className="absolute right-1 cursor-pointer"/>
       </div>
    </div>
    </>
  ,document.getElementById("modal-root"))
}

export default Modal
