import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  ArrowUp
} from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Birth Chart Reading', path: '/services' },
    { label: 'Career Guidance', path: '/services' },
    { label: 'Marriage Matching', path: '/services' },
    { label: 'Vastu Consultation', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Astrologers', path: '/about' },
    { label: 'Blog', path: '/about' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
    { label: 'Refund Policy', path: '#' },
  ]
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 bg-slate-950/80 border-t border-white/10 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <span className="text-xl font-bold text-gold-gradient font-cinzel">
                Aynkaran
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Guiding you through the cosmic journey with ancient wisdom and modern insights. 
              Discover your destiny with our expert astrological consultations.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-cinzel text-amber-400 mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-amber-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-cinzel text-amber-400 mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-amber-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-cinzel text-amber-400 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>19, Ayyasamy Nagar, Thottipalayam Road, Chinniyampalayam post,<br />Coimbatore, Tamil Nadu, 641062, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+91 94898 36247</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>astrovganesan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Aynkaran Astro Center. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.label}
                to={link.path}
                className="text-white/40 hover:text-amber-300 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center hover:bg-amber-400 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}