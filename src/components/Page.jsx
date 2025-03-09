import { IoMdAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

const Page = () => {
  return (
   
            <div className="flex gap-8 justify-between">
      <div className="flex  w-[310px]  relative bg-transparent border rounded-lg">
      <IoMdSearch  className="absolute  text-white size-[30px] left-[10px] top-2"/>
      <input className=" pl-12 h-[40px] outline-0 " type="text" placeholder="Search Contact" />
       </div>
     <div className="flex">
      <IoMdAdd  className=" border-white p-3 h-10 w-10 cursor-pointer top-0 rounded-full bg-white"  />
    </div>
    </div> 
 
  )
}

export default Page
