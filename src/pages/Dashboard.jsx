import Navbar from "../components/Navbar"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { FaChartBar, FaCrown, FaHourglassHalf, FaBolt } from "react-icons/fa"

function Dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pt-20">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 py-12 w-full">
        {/* Welcome Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome, <span className="text-cyan-400">{user?.name || 'User'}</span>
            </h1>
            <p className="text-slate-400">Here's a quick overview of your API usage and plan.</p>
          </div>
          <button className="btn-primary flex items-center justify-center gap-2 max-w-max">
            <FaBolt /> Upgrade Plan
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card group hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-400 font-medium">API Usage</p>
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <FaChartBar />
              </div>
            </div>
            <h2 className="text-5xl font-extrabold text-white mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-cyan-400 transition-all">
              {user?.usage || 0}
            </h2>
            <p className="text-sm text-slate-500 mt-2">+12% from last month</p>
          </div>

          <div className="card group hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-400 font-medium">Current Plan</p>
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                <FaCrown />
              </div>
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 to-pink-400 transition-all">
              {user?.isPremium ? "Enterprise" : "Free"}
            </h2>
            <p className="text-sm text-slate-500 mt-2">Active until next billing cycle</p>
          </div>

          <div className="card group hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-400 font-medium">Remaining Credits</p>
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <FaHourglassHalf />
              </div>
            </div>
            <h2 className="text-5xl font-extrabold text-white mt-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-emerald-400 to-teal-400 transition-all">
              {user?.isPremium ? "∞" : Math.max(0, 6 - (user?.usage || 0))}
            </h2>
            <p className="text-sm text-slate-500 mt-2">Credits reset on 1st of month</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard