import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from "axios";


const Edit =(props) => {
    const a=props.id
    const router=useRouter()
    const [newtopic, setnewtopic] = useState("")
    const [newdescription, setnewdescription] = useState("")
  
    const handle=async(e)=>{
      e.preventDefault()
      
      if(!newtopic||!newdescription){
        alert("fill completely")
        return
      }
      else{
        try{
        const res=await axios.patch(`${process.env.NEXT_PUBLIC_Server_url}/api/todo/myview`, { id:a, newtopic:newtopic, newdescription:newdescription });
       //console.log("putXedit")
        if(res.status==200){
            router.push("/myview")
        }
        else{
          throw new Error("server is busy post req not work")
        }
      }
    catch(err){
      console.log(err)
    }
  }
  }




  return (
    <>
    <main className="bg-gradient-to-br from-red-100 to-indigo-400 grid grid-cols-1 md:grid-cols-2 min-h-screen">
  
  <section className="mt-[90px] flex items-center justify-center p-6">
    <form
      onSubmit={handle}
      className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-300 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center text-orange-600">Update Post</h2>

      <input
        placeholder="Title"
        type="text"
        value={newtopic}
        onChange={(e) => setnewtopic(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <textarea
        placeholder="Description"
        value={newdescription}
        onChange={(e) => setnewdescription(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-200"
      >
         Save
      </button>
    </form>
  </section>


  <section className="bg-white flex items-center justify-center p-6">
    <div className=" flex flex-col items-center justify-center">
            <img
              src="./../favicon.ico"
              className="w-40 h-40 animate-pulse drop-shadow-lg"
              alt="Debugger Icon"
            />
            <p className="text-lg text-gray-700 mt-4 font-semibold">
              Let's Debug Together!
            </p>
          </div>
     
  </section>
</main>
</>

  )
}

export default Edit


       
