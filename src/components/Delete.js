"use client"
import React from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation'
import { FaTrash } from 'react-icons/fa';
const Delete = (props) => {
  const router = useRouter()
  const dele = async () => {

    await axios.delete(`${process.env.NEXT_PUBLIC_Server_url}/api/todo/myview`, {
      params: { id: props.id },
    });

    router.push("/myview", { scroll: false })
  }

  return (
    <button
      onClick={dele}
      className="text-white-600 hover:text-red-500 
             hover:scale-110 active:scale-90 
             transition-transform duration-300 
             p-2 rounded-full hover:bg-red-100 shadow-sm 
             hover:shadow-md"
    >
      <FaTrash size={20} />
    </button>

  )
}

export default Delete
