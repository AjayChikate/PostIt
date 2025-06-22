"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaLock } from 'react-icons/fa'

const Page = () => {

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onlogin = async () => {
    try {
      const res = await axios.post("/api/users/login", user);
      console.log(res);
      window.location.href = "/profile";
    } catch (err) {
      alert("Incorrect details");
      console.log("there is error ", err.message);
    }
  };

  return (
    <>
      <main className="bg-gradient-to-br from-blue-100 to-blue-500 min-h-screen flex flex-col">
        <section className="min-h-[100vh] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 p-4 md:p-10">

          <div className="flex flex-col items-center justify-center mt-[90px] p-6">
            <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl space-y-6 transition-transform duration-500 hover:scale-[1.02]">
              <h2 className="text-3xl font-bold text-center text-blue-600">
                Login to PostIT
              </h2>

              <input
                type="email"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) =>
                  setuser({ ...user, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Enter password"
                value={user.password}
                onChange={(e) =>
                  setuser({ ...user, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={onlogin}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300"
              >
                <div className="flex flex-row justify-center items-center gap-2">
                  <span>Verify</span>
                  <FaLock />
                </div>

              </button>

              <hr className="border-gray-300" />

              <p className="text-center text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>


          <div className=" flex flex-col items-center justify-center">
            <img
              src="./favicon.ico"
              className="w-40 h-40 animate-pulse drop-shadow-lg"
              alt="Debugger Icon"
            />
            <p className="text-xl text-gray-700 mt-4 font-semibold">
              Welcome Back!
            </p>
          </div>
        </section>


        <section className="bg-red-400 min-h-[100vh] flex items-center justify-center">
          <p className="text-white text-3xl font-bold animate-bounce">
            More features coming soon...
          </p>
        </section>
      </main>
    </>
  );
};

export default Page;
