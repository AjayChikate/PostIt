'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='relative z-10 flex justify-center'>
      <div className='fixed w-[90vw] max-w-6xl bg-slate-800 text-white px-4 py-3 m-3 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between'>

        
        <div className='flex justify-between items-center w-full md:w-auto'>
          <div className='rounded-full bg-white px-5 py-2 text-2xl font-extrabold text-cyan-500 shadow'>
            PostIT
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-3xl md:hidden focus:outline-none'
          >
            ☰
          </button>
        </div>

        
        <div className={`flex-col md:flex-row flex gap-2 mt-4 md:mt-0 transition-all duration-300 ease-in-out 
          ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link href="/" className='rounded-full bg-white text-slate-800 px-4 py-2 font-medium hover:bg-slate-200 transition'>Home</Link>
          <Link href="/profile" className='rounded-full bg-white text-slate-800 px-4 py-2 font-medium hover:bg-slate-200 transition'>Profile</Link>
          <Link href="/view" className='rounded-full bg-white text-slate-800 px-4 py-2 font-medium hover:bg-slate-200 transition'>All Posts</Link>
        </div>

        
        <div className={`flex-col md:flex-row flex gap-2 mt-2 md:mt-0 transition-all duration-300 ease-in-out 
          ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link href="/login" className='rounded-xl bg-red-400 hover:bg-red-500 px-4 py-2 text-white font-semibold transition'>Login</Link>
          <Link href="/signup" className='rounded-xl bg-green-400 hover:bg-green-500 px-4 py-2 text-white font-semibold transition'>Register</Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
