"use client"


import React from 'react'
import axios from 'axios'
import { FaGlobe, FaUser, FaHandshake, FaSearch, FaRegNewspaper } from "react-icons/fa";
import { useState } from 'react'


const Page = () => {

  const [dataa, setdataa] = useState([])
  const userDetails = async () => {
    const res = await axios.get("/api/users/profile")
    const { b } = res.data
    setdataa(b)

  }

  return (
    <>

      <main>
        <section className="min-h-[100vh] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">

          <div className="bg-gradient-to-br from-purple-400 to-indigo-500 flex flex-col items-center justify-center px-6 py-10">
            <div className="mt-[90px] w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 space-y-6 text-center">
              <h1 className="text-3xl font-extrabold text-gray-800"><FaUser /> Welcome to Your Profile</h1>
              <p className="text-gray-600">
                This is your personal dashboard. Explore your reports, manage posts, and connect for support.
              </p>

              <hr className="border-gray-300" />

              <button
                onClick={userDetails}
                className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
              >
                <div className="flex flex-row justify-center items-center gap-2">
                  <FaSearch />
                  <span>Fetch My Personal Details</span>
                </div>

                <div className="mt-3 text-left px-4 text-sm text-gray-700">
                  <p><span className="font-bold">Name:</span> {dataa.username}</p>
                  <p><span className="font-bold">Email:</span> {dataa.email}</p>
                </div>
              </button>

              <hr className="border-gray-300" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/myview" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition duration-200 shadow-md">
                  <FaRegNewspaper /> My Posts
                </a>
                <a href="/view" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition duration-200 shadow-md">
                  <FaGlobe /> All posts
                </a>
                <a href="/support" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition duration-200 shadow-md">
                  <FaHandshake /> Support
                </a>
              </div>
            </div>
          </div>


          <div className="bg-white flex flex-col items-center justify-center px-4">
            <img src="./favicon.ico" alt="User Icon" className="w-40 h-40 mb-6 rounded-full shadow-lg border-4 border-purple-400" />
            <p className="text-xl font-semibold text-gray-700">"Posting on PostIt is like leaving notes in the universe—some echo back, some spark ideas, and some start revolutions."</p>
          </div>
        </section>
        <section className="bg-red-400 min-h-[100vh] flex items-center justify-center">
          <p className="text-white text-3xl font-bold animate-bounce">🚧 More features coming soon...</p>
        </section>
      </main>
    </>

  )
}

export default Page



















