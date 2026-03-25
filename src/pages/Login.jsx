import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { FaRobot, FaLock, FaEnvelope } from "react-icons/fa"

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) => {
    if(e) e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      login({
        name: "Enterprise User",
        usage: 0,
        isPremium: false
      })
      navigate("/dashboard")
    }, 800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Ambient background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="card w-full max-w-md mx-6 relative z-10 border-white/20 shadow-[0_0_40px_rgba(14,165,233,0.1)]">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl mb-4 shadow-[0_0_15px_rgba(14,165,233,0.4)]">
            <FaRobot className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-extrabold text-white text-center">
            Welcome Back
          </h2>
          <p className="text-slate-400 mt-2 text-center text-sm">
            Sign in to your InsureAI account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              className="input pl-11 w-full" 
              placeholder="Email address"
              type="email"
              required
            />
          </div>
          
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              className="input pl-11 w-full" 
              placeholder="Password"
              type="password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm py-1">
            <label className="flex items-center text-slate-300 cursor-pointer group">
              <input type="checkbox" className="mr-2 rounded border-white/10 bg-white/5 accent-cyan-500 cursor-pointer" />
              <span className="group-hover:text-white transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Forgot password?</a>
          </div>

          <button type="submit" className="btn-primary w-full py-3 flex justify-center items-center gap-2" disabled={loading}>
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-8 text-sm">
          Don't have an account? <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Start free trial</a>
        </p>
      </div>
    </div>
  )
}

export default Login