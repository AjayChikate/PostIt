import React from 'react';
import { FaThumbsUp, FaEdit } from 'react-icons/fa';
import Link from 'next/link';
import Delete from './Delete';
import { cookies } from 'next/headers';
import axios from 'axios';
import ImageDisplay from './ImageDisplay';

const getinfo = async () => {
  try {
    const c = await cookies();
    const dc = c.toString();
    const res = await axios.get(`${process.env.NEXT_PUBLIC_Server_url}/api/todo/myview`, {
      headers: { Cookie: dc },
    });

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const Add = async () => {
  const result = await getinfo();
  if (!result) {
    console.error("Error: getinfo() returned undefined or null");
    return;
  }

  const { b } = result;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4 md:p-6">
      {b.map((i, index) => (
        <div
          key={i.id || index}
          className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col justify-between h-full p-4 space-y-2">

            <div className="flex flex-col space-y-2 overflow-hidden">
              <p className="text-2xl font-bold text-gray-800 break-words">{i.topic}</p>
              <p className="text-sm text-gray-600 break-words">{i.description}</p>
              <ImageDisplay image={i.image} />
            </div>


            <div className="flex justify-between items-center pt-4 mt-auto">
              <div className="flex items-center gap-1 text-red-500 font-semibold">
                <FaThumbsUp />
                {i.likes?.length || 0}
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/edit/${i._id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <FaEdit />
                  Edit
                </Link>
                <Delete id={i._id} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Add;
