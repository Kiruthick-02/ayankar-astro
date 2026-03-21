import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Globe, Star, Heart } from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer'

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: BookOpen, value: '50+', label: 'Expert Astrologers' },
  { icon: Globe, value: '25+', label: 'Countries Served' },
]

const team = [
  {
    name: 'Dr. Rajesh Sharma',
    role: 'Chief Astrologer',
    experience: '25+ years',
    specialty: 'Vedic Astrology, Numerology',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Priya Venkatesh',
    role: 'Senior Consultant',
    experience: '18+ years',
    specialty: 'Marriage Matching, Gemology',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Amit Patel',
    role: 'Vastu Expert',
    experience: '15+ years',
    specialty: 'Vastu Shastra, Feng Shui',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Lakshmi Devi',
    role: 'Spiritual Guide',
    experience: '20+ years',
    specialty: 'Mantra Therapy, Rituals',
    image: '/api/placeholder/300/300'
  }
]

const values = [
  {
    icon: Star,
    title: 'Authenticity',
    description: 'We follow traditional Vedic principles with unwavering dedication to authenticity.'
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Every consultation is delivered with empathy, understanding, and genuine care.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in astrological accuracy and service quality.'
  }
]

export default function About() {
  return (
    <div className="page-transition pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-white mb-6 leading-tight">
              Illuminating Lives Through <span className="text-gold-gradient">Ancient Wisdom</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Founded in 2010, Aynkaran Astro Center began with a simple mission: to make authentic 
              Vedic astrology accessible to everyone seeking guidance. What started as a small consultation 
              room has grown into a trusted global center for astrological excellence.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Our team of expert astrologers combines decades of traditional learning with modern 
              approaches to deliver insights that are both accurate and actionable. We believe that 
              astrology is not just about prediction—it's about empowerment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                Meet Our Team
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
                Our Methodology
              </motion.button>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-amber-500/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border-2 border-amber-400/30 rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 border-2 border-purple-400/30 rounded-full flex items-center justify-center"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-purple-600 rounded-full flex items-center justify-center">
                        <Star className="w-16 h-16 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                <div className="text-white/60 text-sm">Years of Trust</div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-purple-600/20 flex items-center justify-center"
                  >
                    <stat.icon className="w-8 h-8 text-amber-400" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold text-white font-cinzel mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-4">
            Our Core <span className="text-gold-gradient">Values</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            The principles that guide every consultation and interaction at Aynkaran
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 text-center hover-glow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-4">
            Meet Our <span className="text-gold-gradient">Expert Astrologers</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Learn from the best minds in Vedic astrology, each with decades of experience
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden hover-glow group"
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-amber-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-cinzel font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 text-sm font-medium mb-3">{member.role}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>Experience:</span>
                      <span className="text-white">{member.experience}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Specialty:</span>
                      <span className="text-white text-right">{member.specialty}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 py-2 rounded-lg border border-amber-400/30 text-amber-400 text-sm font-medium hover:bg-amber-400/10 transition-colors"
                  >
                    View Profile
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  )
}