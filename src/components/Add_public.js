import React from 'react';
import { cookies } from 'next/headers';
import Likes from './Likes';
import ImageDisplay from './ImageDisplay';
import axios from 'axios';
import { FaUser } from "react-icons/fa";

const getinfo = async () => {
  try {
    const c = await cookies();
    const dc = c.toString();
    const res = await axios.get(`${process.env.NEXT_PUBLIC_Server_url}/api/todo/view`, {
      headers: { Cookie: dc },
    });

    if (res.status === 200) {
      const c = res.data;
      return c;
    } else {
      throw new Error("Failed miserably to fetch");
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const Add_public = async () => {
  const result = await getinfo();
  if (!result) {
    console.error("Error: getinfo() returned undefined or null");
    return;
  }

  const { b } = result;

  return (
    <div className="px-6 py-4 flex flex-col gap-8">
      {b.map((i, index) => (
        <div
          key={i.id || index}
          className="relative p-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-purple-700 transition">
                {i.topic}
              </h2>
              <div className="flex items-center gap-1">
                <Likes id={i._id} liked={i.liked} />
                <span className="text-indigo-700 font-bold text-lg">
                  {i.likes?.length || 0}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {i.description}
            </p>

            <ImageDisplay image={i.image} />

            <span className="absolute bottom-3 right-4 text-purple-800 font-semibold text-sm md:text-lg">
              <div className="flex flex-row justify-center items-center gap-2">
                <span> {i.owner}</span>
                <FaUser />
              </div>

            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Add_public;
