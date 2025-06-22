import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white-100 text-gray-700 py-6  border-t border-black-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        
        <div className="text-xl font-bold text-cyan-600">Post It 🚀</div>

       
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-slate-500 transition">Home</Link>
          <Link href="/support" className="hover:text-slate-500 transition">Support</Link>
          <a 
            href="https://github.com/AjayChikate" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-500 transition flex items-center gap-1"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        
        <p className="text-xs text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Post It. Coded by Ajay
        </p>
      </div>
    </footer>
  );
};

export default Footer;
