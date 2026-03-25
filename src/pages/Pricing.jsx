import Navbar from "../components/Navbar"
import { FaCheck } from "react-icons/fa"

function Pricing() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pt-20 relative overflow-hidden">
      <Navbar />
      
      {/* Ambient background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Transparent</span> Pricing
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get started for free, then rapidly scale to enterprise-grade capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          
          {/* Free Tier */}
          <div className="card flex flex-col w-full h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Starter</h2>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                ₹0<span className="text-xl font-medium text-slate-400 ml-1">/mo</span>
              </div>
              <p className="text-slate-400 mt-4 leading-relaxed">Perfect for testing the waters and seeing the AI in action.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-300">
                <FaCheck className="text-cyan-400 shrink-0" /> 2 AI Predictions per month
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <FaCheck className="text-cyan-400 shrink-0" /> Basic Fraud Detection
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <FaCheck className="text-cyan-400 shrink-0" /> Community Support
              </li>
            </ul>
            
            <button className="btn-secondary w-full py-3 mt-auto">Current Plan</button>
          </div>

          {/* Premium Tier */}
          <div className="card flex flex-col relative sm:scale-[1.02] border-cyan-500/30 shadow-[0_0_30px_rgba(14,165,233,0.15)] bg-slate-900/60 transition-transform hover:-translate-y-1 w-full h-full">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full flex shadow-lg">
                Most Popular
              </span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Enterprise</h2>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                ₹299<span className="text-xl font-medium text-slate-400 ml-1">/mo</span>
              </div>
              <p className="text-slate-400 mt-4 leading-relaxed">Unlimited processing power for heavy organizational workloads.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <FaCheck className="text-blue-400 shrink-0" /> <strong className="font-semibold">Unlimited</strong> AI Predictions
              </li>
              <li className="flex items-center gap-3 text-white">
                <FaCheck className="text-blue-400 shrink-0" /> Advanced Neural Network Models
              </li>
              <li className="flex items-center gap-3 text-white">
                <FaCheck className="text-blue-400 shrink-0" /> Dedicated Account Manager
              </li>
              <li className="flex items-center gap-3 text-white">
                <FaCheck className="text-blue-400 shrink-0" /> 24/7 Priority Support
              </li>
            </ul>
            
            <button className="btn-primary w-full py-3 shadow-[0_0_20px_rgba(14,165,233,0.3)] mt-auto">
              Upgrade Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pricing