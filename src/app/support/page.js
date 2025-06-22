"use client"; 

import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Support = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-200 flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-5xl font-bold text-orange-500 mb-4">Need Help?</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Found a bug or have a feature request? Check out our GitHub and raise an issue.  
        We'd love to hear from you!
      </p>

      <Link
        href="https://github.com/AjayChikate" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-gray-900 transition transform duration-300"
      >
        <FaGithub size={24} />
        Visit GitHub Repository
      </Link>

      <p className="text-sm text-gray-400 mt-10 text-center">
        Or just give us a ⭐ if you love Post It!
      </p>
    </main>
  );
};

export default Support;
