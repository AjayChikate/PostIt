"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaBullseye } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signup = async () => {
    try {
      const res = await axios.post("/api/users/signup", user);
      console.log(res);
      if(res.data.status==409){
        alert("Username already taken")
      }
      else{
        router.push("/login");
      }
      
    } catch (err) {
      
      console.log("there is error in sending data", err);
    }
  };

  return (
    <>
      <main className="bg-gradient-to-br from-green-100 to-green-500 min-h-screen flex flex-col">
        <section className="min-h-[100vh] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 p-6 md:p-10">

          <div className="flex flex-col items-center justify-center rounded-3xl p-6">
            <div className=" mt-[90px] w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl space-y-6 hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-center text-purple-700">
                Create Your Account
              </h2>

              <input
                placeholder="Your Username"
                type="text"
                value={user.name}
                onChange={(e) =>
                  setuser({ ...user, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                placeholder="Your Email"
                type="email"
                value={user.email}
                onChange={(e) =>
                  setuser({ ...user, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                placeholder="Create a strong Password"
                type="password"
                value={user.password}
                onChange={(e) =>
                  setuser({ ...user, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                onClick={signup}
                className="w-full bg-gradient-to-r from-purple-700 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white font-semibold py-2 rounded-lg transition duration-300"
              >
                Submit
              </button>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-purple-500 font-medium hover:underline"
                >
                  Login here
                </Link>
              </div>
            </div>
          </div>


          <div className=" flex flex-col items-center justify-center">
            <img
              src="./favicon.ico"
              className="w-40 h-40 animate-pulse drop-shadow-lg"
              alt="Debugger Icon"
            />
            <p className="text-lg text-gray-700 mt-4 font-semibold">
              Let&apos;s Post!
            </p>
          </div>
        </section>


        <section className="bg-red-400 min-h-[100vh] flex items-center justify-center">

          <div className="flex flex-row justify-center items-center gap-2">
            <span className="text-white text-3xl font-bold animate-bounce">Premium features loading... Sign up to be first in line!</span>
            <FaBullseye />
          </div>



        </section>
      </main>
    </>
  );
};

export default Page;
