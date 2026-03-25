import Navbar from "../components/Navbar"
import { FaChartLine, FaShieldAlt, FaBrain, FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20 relative overflow-hidden">
      <Navbar />

      {/* Ambient glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* HERO SECTION */}
      <div className="section text-center relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cyan-300 text-sm font-medium tracking-wide">
          ✨ Next-Generation AI Insurance Platform
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mx-auto">
          Intelligent Decisions for
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text pb-2">
            Modern Banking
          </span>
        </h1>

        <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Predict claim approvals instantly with AI-powered analytics, reduce fraud risks by 99%, and streamline your operational workflow.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto">
          <Link to="/login" className="btn-primary w-full flex items-center justify-center gap-2 group">
            Start Free Trial
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/pricing" className="btn-secondary w-full text-center">
            View Pricing
          </Link>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Insure<span className="text-cyan-400">AI</span></h2>
          <p className="text-slate-400 mt-4">Built for enterprise-scale reliability and speed.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 w-full">
          <div className="card group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <FaBrain className="text-3xl text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">AI Predictions</h3>
            <p className="text-slate-400 leading-relaxed">Leverage cutting-edge machine learning models for accurate, split-second claim decision making.</p>
          </div>

          <div className="card group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <FaChartLine className="text-3xl text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Deep Analytics</h3>
            <p className="text-slate-400 leading-relaxed">Unlock hidden patterns with data-driven insights tailored to your specific user demographics.</p>
          </div>

          <div className="card group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <FaShieldAlt className="text-3xl text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Fraud Detection</h3>
            <p className="text-slate-400 leading-relaxed">Proactively prevent fake claims and identify anomalies in real-time, saving millions annually.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home