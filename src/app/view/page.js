import React from 'react'
import Add_public from '@/components/Add_public'
import Link from 'next/link'
import Leaderboard from '@/components/Leaderboard'



const Page = () => {
  return (
    <>


      <main className="bg-gradient-to-br from-pink-100 to-indigo-500 min-h-screen ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="mt-[90px] w-full flex justify-center">
            <div className=" w-full max-w-md md:fixed">
              <Leaderboard />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full mt-[90px] p-4 md:p-6 ">
              <Add_public />
            </div>
          </div>

        </section>
      </main>

    </>
  )
}

export default Page
