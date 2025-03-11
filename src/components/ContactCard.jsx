import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

const ContactCard = ({contact}) => {
  return (
    
      <div key={contact.id} className="border px-2 mt-2 gap-2 w-full flex items-center bg-yellow-200 h-[55px] rounded-lg">
<FaRegUserCircle className="size-8 text-orange-400 cursor-pointer" />
<div className="text-sm bg-red-200 pl-3 w-4/5 flex-grow ">
<h1 className="truncate">{contact.name}</h1>
<h1>{contact.email}</h1>
</div>
<div className="flex gap-1">
<RiEditCircleFill  className="size-7 cursor-pointer" />
<AiFillDelete   className="size-7 text-orange-400 cursor-pointer" />
</div>
</div>
  )
}

export default ContactCard
