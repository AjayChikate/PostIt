"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { FaSync } from "react-icons/fa";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const router = useRouter();


  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_Server_url}/api/todo/leaderboard`);
      const data = await res.json();
      const { leaderboard } = data;
      setLeaders(leaderboard);
    } catch (error) {
      console.error("Failed to load leaderboard:", error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const crownEmoji = ["👑", "🥈", "🥉"]; // top 3 icons

  return (
    <>
      <div className="text-4xl font-black mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 animate-pulse">
        Top Creators
      </div>

      <div className="p-6 overflow-y-auto bg-white rounded-3xl shadow-2xl max-w-md mx-auto mt-6 h-[400px] scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100 animate-fade-in">
        <ul className="space-y-4">
          {leaders.map((user, i) => (
            <li
              key={user.username}
              className={`flex justify-between items-center px-5 py-4 gap-10 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl
              ${i === 0
                  ? "bg-yellow-100 border-l-4 border-yellow-500"
                  : i === 1
                    ? "bg-gray-300 border-l-4 border-gray-500"
                    : i === 2
                      ? "bg-orange-100 border-l-4 border-orange-400"
                      : "bg-slate-100"
                }`}
            >
              <span className="font-semibold text-lg flex items-center gap-2">
                {i < 3 && <span className="text-2xl animate-bounce">{crownEmoji[i]}</span>}
                {i + 1}. {user.username}
              </span>
              <span className="text-indigo-700 font-extrabold text-lg">{user.totalLikes} 👍</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={fetchLeaderboard}
        className="mt-4 mx-auto block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-row justify-center items-center gap-2">
          <FaSync />
          <span>Leaderboard</span>
        </div>

      </button>
    </>
  );
};

export default Leaderboard;


