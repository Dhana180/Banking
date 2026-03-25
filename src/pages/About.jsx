import Navbar from "../components/Navbar"
import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa"

function About() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pt-20 relative overflow-hidden">
      <Navbar />

      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-12 py-16 w-full relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Claims Processing</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At InsureAI, we blend advanced machine learning with deep industry expertise to eliminate fraud, accelerate approvals, and bring transparency to the insurance sector.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="card text-center group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <FaRocket className="text-3xl text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">To automate 90% of routine claims globally, freeing up human adjusters for complex cases that require genuine empathy.</p>
          </div>

          <div className="card text-center group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <FaShieldAlt className="text-3xl text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
            <p className="text-slate-400 leading-relaxed">We employ military-grade encryption and strict data sovereignty principles to protect sensitive policyholder information.</p>
          </div>

          <div className="card text-center group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <FaUsers className="text-3xl text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Built for Teams</h3>
            <p className="text-slate-400 leading-relaxed">Designed collaboratively with leading underwriters to ensure our platform fits seamlessly into existing enterprise workflows.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About