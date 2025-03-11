import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { dataBase } from "../config/firebase";
import { collection,getDocs } from "firebase/firestore";
import ContactCard from "./ContactCard";
import NoContact from "./NoContact";
import Modal from "./Modal";

const Page = () => {
const[contacts,setContacts]=useState([])
const[noContact,setNoContact]=useState(false)
const[modal,setModal]=useState(false)


useEffect(()=>{
const getContacts= async()=>{
    try{
        const contactsRef=collection(dataBase,"contacts");
        const contactSnapshot= await getDocs(contactsRef);
const contactLists=contactSnapshot.docs.map((doc)=>{
    return{
        id: doc.id,
        ...doc.data()
    }
})
setContacts(contactLists)
console.log(contactLists)

    } catch(error){
console.log(error)
    }
}
getContacts()

},[])


  return (
    <div className="max-w-[370px] p-0 h-[500px]">
      <div className="flex gap-5  justify-between">
      <div className="flex w-[300px] relative bg-transparent border rounded-lg">
      <IoMdSearch  className="absolute text-white size-[30px] left-[10px] top-2"/>
      <input className="pl-12 h-[42px] outline-0" type="text" placeholder="Search Contact" />
       </div>
     <div className="flex">
      <IoMdAdd onClick={()=>setModal(true)} className=" border-white p-3 h-10 w-10 cursor-pointer top-0 rounded-full bg-white"  />
    </div>
    </div>
  
  { noContact ? (<NoContact />) : (
   contacts.map((contact)=>{
    return(
<ContactCard key={contact.id}  contact={contact}/>
    ) 
   }) 
  )
  }

  {modal && <Modal onClose={()=>setModal(false)}/>}
    </div> 
  )
}

export default Page
