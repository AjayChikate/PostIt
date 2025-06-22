"use client"
import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const page = () => {
  const router = useRouter()
  const [topic, settopic] = useState("")
  const [description, setdescription] = useState("")
  const [imageFile, setimageFile] = useState(null)

  const handle = async (e) => {
    e.preventDefault()

    if (!topic || !description) {
      alert("fill completely")
      return
    }
    else {
      try {
        const formData = new FormData();
        formData.append("topic", topic);
        formData.append("description", description);
        formData.append("imageFile", imageFile);
        const res = await axios.post("/api/todo/myview", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });


        if (res.status == 201) {
          router.push("/myview");
        }
        else {
          throw new Error("Server returned unexpected status code");
        }
      }
      catch (err) {
        console.log(err.message);
      }

    }
  }

  return (
    <>
      <main className="bg-gradient-to-br from-purple-100 to-purple-400 grid grid-cols-1 md:grid-cols-2 min-h-screen">

        <section className="mt-[90px] flex items-center justify-center p-6">
          <form
            className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200 space-y-5"
            onSubmit={handle}
          >
            <h2 className="text-2xl font-bold text-center text-green-700">Create a new post</h2>

            <input
              placeholder="Title"
              type="text"
              value={topic}
              onChange={(e) => settopic(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setimageFile(e.target.files[0])}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full font-bold bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition duration-200"
            >
              <div className="flex flex-row justify-center items-center gap-2">
                <span>Post It</span>
                <FaPaperPlane />
              </div>
            </button>
          </form>
        </section>


        <section className="bg-white flex items-center justify-center relative overflow-hidden">
          <div className=" flex flex-col items-center justify-center">
            <img
              src="./favicon.ico"
              className="w-40 h-40 animate-pulse drop-shadow-lg"
              alt="Debugger Icon"
            />
            <p className="text-lg text-gray-700 mt-4 font-semibold">
              Let's Post!
            </p>
          </div>

        </section>
      </main>
    </>

  )
}

export default page
