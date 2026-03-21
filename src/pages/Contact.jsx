import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  AtSign,
  HelpCircle
} from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 98765 43211'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@aynkaranastro.in', 'support@aynkaranastro.in'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Spiritual Lane, Divine City', 'Cosmic State 12345, India'],
    color: 'from-red-500 to-pink-600'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
    color: 'from-amber-500 to-orange-600'
  }
]

const inquiryTypes = [
  'General Inquiry',
  'Book Consultation',
  'Service Information',
  'Technical Support',
  'Feedback',
  'Partnership'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-white mb-4">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <StaggerContainer className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="glass rounded-xl p-6 flex items-start gap-4 group hover-glow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-white mb-2">{info.title}</h3>
                    {info.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-white/60 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Form */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-cinzel font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : null}

              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-amber-400" />
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">Email Address</label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-amber-400 text-sm font-semibold mb-2">Inquiry Type</label>
                    <div className="relative">
                      <HelpCircle className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                      <select
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none appearance-none"
                      >
                        <option value="" className="bg-slate-900">Select inquiry type</option>
                        {inquiryTypes.map(type => (
                          <option key={type} value={type} className="bg-slate-900">{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-amber-400 text-sm font-semibold mb-2">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help you..."
                    className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Map Placeholder */}
        <FadeIn>
          <div className="glass rounded-2xl p-2">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-900/50 to-slate-900/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
              </div>
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4 animate-bounce" />
                <p className="text-white/60 text-lg">Interactive Map Integration</p>
                <p className="text-white/40 text-sm mt-2">123 Spiritual Lane, Divine City</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}