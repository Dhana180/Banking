import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { FaBrain, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaShieldAlt } from "react-icons/fa"

function Model() {
  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    age: "",
    network: "Yes",
    prior_auth: "No",
    billing: "",
    delay: "",
    plan: "HDHP",
    procedure: "",
    diagnosis: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const predict = async (e) => {
    e.preventDefault()

    // Check if user is logged in
    if (!user) {
      setError("Please login to use the AI Engine.")
      return
    }

    if (!user.isPremium && user.usage >= 2) {
      setError("Free limit reached. Expand your operations with Premium.")
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await axios.post("http://localhost:5000/predict", formData)
      setResult(res.data)

      const updatedUser = {
        ...user,
        usage: (user.usage || 0) + 1
      }
      login(updatedUser)
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(`Backend Error: ${err.response.data.error}`)
      } else {
        setError("Failed to reach the backend. Ensure your Flask server is running on port 5000.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pt-20 relative overflow-hidden">
      <Navbar />

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-12 py-12 w-full relative z-10 flex flex-col items-center">
        <div className="text-center mb-10 w-full">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-6 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
            <FaBrain className="text-4xl text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            AI <span className="text-gradient">Claim Predictor</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg pt-2">
            Enter the medical claim details to evaluate the risk of denial in real-time.
          </p>
        </div>

        <div className="card w-full shadow-[0_0_30px_rgba(30,41,59,0.5)] border-white/10 p-8 mb-10">
          <form onSubmit={predict} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Age */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Patient Age</label>
                <input
                  type="number" required min="0" max="120"
                  name="age" value={formData.age} onChange={handleChange}
                  className="input-field w-full" placeholder="e.g. 45"
                />
              </div>

              {/* Billed Amount */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Billed Amount</label>
                <input
                  type="number" required min="0" step="0.01"
                  name="billing" value={formData.billing} onChange={handleChange}
                  className="input-field w-full" placeholder="e.g. 1500.50"
                />
              </div>

              {/* In Network */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Is provider in network?</label>
                <select
                  name="network" value={formData.network} onChange={handleChange}
                  className="input-field w-full [&>option]:bg-slate-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Prior Auth */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Prior authorization required?</label>
                <select
                  name="prior_auth" value={formData.prior_auth} onChange={handleChange}
                  className="input-field w-full [&>option]:bg-slate-900"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Delay */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Days between service and submission</label>
                <input
                  type="number" required min="0"
                  name="delay" value={formData.delay} onChange={handleChange}
                  className="input-field w-full" placeholder="e.g. 5"
                />
              </div>

              {/* Insurance Plan */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Insurance Plan</label>
                <select
                  name="plan" value={formData.plan} onChange={handleChange}
                  className="input-field w-full [&>option]:bg-slate-900"
                >
                  <option value="HDHP">HDHP</option>
                  <option value="HMO">HMO</option>
                  <option value="POS">POS</option>
                  <option value="PPO">PPO</option>
                </select>
              </div>

              {/* Procedure Code */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Procedure Code</label>
                <input
                  type="text" required
                  name="procedure" value={formData.procedure} onChange={handleChange}
                  className="input-field w-full" placeholder="e.g. CPT_001"
                />
              </div>

              {/* Diagnosis Code */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Diagnosis Code</label>
                <input
                  type="text" required
                  name="diagnosis" value={formData.diagnosis} onChange={handleChange}
                  className="input-field w-full" placeholder="e.g. ICD_001"
                />
              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-4 mt-4 text-lg font-bold flex justify-center items-center gap-2 transition-all"
            >
              {loading ? (
                <span className="animate-pulse">Analyzing Risk Factors...</span>
              ) : (
                <>Analyze Claim <FaBrain /></>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
              <FaExclamationTriangle className="text-red-400 shrink-0" />
              <p className="text-red-300 text-sm font-medium">{error}</p>
            </div>
          )}

          {result && (
            <div className={`mt-8 p-6 backdrop-blur-md rounded-xl border relative overflow-hidden shadow-lg ${result.status === 'APPROVED' ? 'bg-emerald-900/30 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]' :
                result.status === 'DENIED' ? 'bg-red-900/30 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.15)]' :
                  'bg-amber-900/30 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
              }`}>
              <div className={`absolute top-0 left-0 w-1 h-full ${result.status === 'APPROVED' ? 'bg-emerald-500' :
                  result.status === 'DENIED' ? 'bg-red-500' : 'bg-amber-500'
                }`}></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  {result.status === 'APPROVED' ? (
                    <FaCheckCircle className="text-emerald-400 text-3xl shrink-0 mt-1" />
                  ) : result.status === 'DENIED' ? (
                    <FaTimesCircle className="text-red-400 text-3xl shrink-0 mt-1" />
                  ) : (
                    <FaShieldAlt className="text-amber-400 text-3xl shrink-0 mt-1" />
                  )}

                  <div>
                    <p className="text-slate-300 text-sm mb-1 uppercase tracking-wider font-semibold">Diagnosis Complete</p>
                    <p className={`font-bold text-2xl drop-shadow-sm ${result.status === 'APPROVED' ? 'text-emerald-400' :
                        result.status === 'DENIED' ? 'text-red-400' : 'text-amber-400'
                      }`}>
                      {result.status}
                    </p>
                    <p className="text-slate-300 mt-2 font-medium">
                      Denial Probability: <span className="text-white font-bold">{result.probability}</span>
                    </p>
                  </div>
                </div>

                {result.status !== 'APPROVED' && (
                  <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-700/50 flex-1 md:max-w-xs">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Detected Risk Factor</p>
                    <p className="text-slate-200 font-medium">{result.reason}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Model