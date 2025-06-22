


"use client"
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Likes = (props) => {
  const router = useRouter()
  const liked = props.liked

  const update = async () => {
    // console.log(process.env.Server_url)
    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_Server_url}/api/todo/likes`, {
        id: props.id,
      })

      if (res.status === 200) {

        router.push("/view", { scroll: false })
      }
    } catch (err) {
      alert("login to like")
      console.log("there is like in error")
    }
  }

  return (



    <button
      onClick={update}
      className={`flex flex-row gap-2 justify-center items-center 
              px-5 py-2 rounded-full 
              bg-gradient-to-r from-pink-500 to-blue-500 
              text-white text-2xl font-bold shadow-md 
              transition-all duration-300 ease-in-out 
              hover:scale-105 hover:shadow-xl hover:animate-pulse 
              active:scale-95`}
    >
      {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}

    </button>




  )
}

export default Likes
