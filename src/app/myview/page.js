import React from 'react'
import Add from '@/components/Add'
import Link from 'next/link'
import { FaPlus } from "react-icons/fa";

const Page = () => {
  return (
    <>


      <main className="bg-gradient-to-br from-orange-100 to-yellow-500 min-h-screen">
        <section className="grid grid-cols-1 md:grid-cols-1 min-h-[100vh] w-full p-4">
          <div className="w-full pt-24">
            <Add />
          </div>
        </section>
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2   z-50 flex items-center gap-2">
          <p className="hidden md:block text-sm font-semibold text-white bg-green-500 px-4 py-2 rounded-md shadow-lg">
            Add More Posts
          </p>
          <Link
            href="/newadd"
            className="text-xl bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform hover:scale-110"
          >
            <FaPlus/>
          </Link>
        </div>
      </main>

    </>
  )
}

export default Page
