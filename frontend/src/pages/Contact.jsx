import Navbar from "../components/Navbar"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa"

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pt-20 relative overflow-hidden">
      <Navbar />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-12 py-16 w-full relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions about our enterprise plans or need technical support? Our specialized team is ready to help.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="card p-6 flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-blue-500/20 rounded-lg mb-4 text-cyan-400">
                <FaEnvelope className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
              <p className="text-slate-400 text-sm mb-2">For general inquiries and support.</p>
              <a href="mailto:support@insureai.com" className="text-cyan-400 font-medium hover:text-cyan-300">support@insureai.com</a>
            </div>

            <div className="card p-6 flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-purple-500/20 rounded-lg mb-4 text-purple-400">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Headquarters</h3>
              <p className="text-slate-400 text-sm">Find us at our main global office.</p>
              <p className="text-slate-300 font-medium mt-2">101 Innovation Drive<br/>Tech Hub, CA 94043</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card md:col-span-3">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5 ">First Name</label>
                  <input type="text" className="input" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Last Name</label>
                  <input type="text" className="input" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Work Email</label>
                <input type="email" className="input" placeholder="john@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Message subject</label>
                <select className="input appearance-none text-slate-300 bg-slate-900/50">
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">How can we help?</label>
                <textarea className="input min-h-[120px] resize-y" placeholder="Tell us a little bit about your needs..."></textarea>
              </div>

              <button className="btn-primary w-full py-3 flex justify-center items-center gap-2 mt-4">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact