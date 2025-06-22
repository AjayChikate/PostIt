import Leaderboard from "@/components/Leaderboard";
import { FaUsers, FaCompass } from "react-icons/fa"

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-100 to-purple-400 min-h-screen flex flex-col">


      <section className="mt-[90px] min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-16 items-center">


        <div className="flex flex-col justify-center items-start gap-6 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight">
            Hello, This is <span className="text-purple-600">PostIT</span>! 📝
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            A platform for expressive minds! PostIT enables users to share thoughts, ideas, and images seamlessly. Whether you're reflecting, creating, or exploring, join our vibrant community and start posting today.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/signup"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              <div className="flex flex-col justify-center items-center gap-2">
                <FaUsers />
                <span>Join community</span>

              </div>
            </a>
            <a
              href="/view"
              className="bg-white text-purple-700 border-2 border-purple-600 font-semibold px-6 py-2 rounded-lg hover:bg-purple-100 transition"
            >
              <div className="flex flex-col justify-center items-center gap-2">
                <FaCompass />
                <span>Explore</span>

              </div>
            </a>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center ">
          <div className="w-full max-w-md">
            <Leaderboard />
          </div>
        </div>
      </section>


      <section className="bg-red-400 min-h-[100vh] flex items-center justify-center">
        <p className="text-white text-3xl font-bold">🚧 More features coming soon...</p>
      </section>
    </main>
  );
}

