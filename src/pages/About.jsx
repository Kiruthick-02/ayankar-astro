import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Globe, Star, Heart } from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer'


const expert = 
  {
  name: 'Astro V. Ganesan.',
  role: 'Chief Astrologer',
  experience: '20 years',
  specialty: 'Vedic Astrology, Numerology',
  image: '/assets/images/astro.png',
  description: `Jothisha Aadhithya Astro V. Ganesan: With 20 years of experience in Advanced K.B Stellar Astrology, I harness the cosmic energy of the universe to provide clear, honest insights. I specialize in birth time correction and can differentiate predictions for twin children. My commitment to clarifying all client doubts ensures satisfaction, and I offer swift astro predictions via WhatsApp and other communication media. Grateful to my mentors, I strive to grow and assist others on their astrological journey every day.`
}

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
              Aynkaran <span className="text-gold-gradient">Astro Center</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              At Aynkaran Astro Center, we believe in the power of the stars to illuminate life’s path. Our team of experienced astrologers, steeped in the ancient wisdom of K.B. Stellar Astrology, offers accurate predictions and simplified solutions to your life’s challenges.
              Discover the transformative power of astrology and unlock your full potential with Aynkaran Astro Center.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Our team of expert astrologers combines decades of traditional learning with modern 
              approaches to deliver insights that are both accurate and actionable. We believe that 
              astrology is not just about prediction—it's about empowerment.
            </p>
            
            <div className="flex flex-wrap gap-4">
             <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="btn-primary"
  onClick={() => {
    document.getElementById('expert')?.scrollIntoView({
      behavior: 'smooth'
    })
  }}
>
  About the Astrologer
</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
                Our Methodology
              </motion.button>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative">
              <div className="relative">
  <div className="aspect-video rounded-3xl overflow-hidden glass">
    <img
      src="/assets/images/center.png"
      alt="Astrologer"
      className="w-full h-full object-cover "
    />

    {/* Optional overlay for style */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-amber-500/20" />
  </div>

  {/* Floating Stats (keep this if you want) */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
className="absolute -top-6 -right-6 glass rounded-2xl p-6"
  >
    <div className="text-4xl font-bold text-amber-400 mb-1">20+</div>
    <div className="text-white/60 text-sm">Years of Trust</div>
  </motion.div>
</div>
              
             
            </div>
          </FadeIn>
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

      {/* Single Expert Section */}
<section id="expert" className="max-w-7xl mx-auto px-6">
  <FadeIn className="text-center mb-16">
    <h2 className="text-4xl font-cinzel font-bold text-white mb-4">
      Meet Our <span className="text-gold-gradient">Expert Astrologer</span>
    </h2>
    <p className="text-white/60 max-w-2xl mx-auto">
      Learn from a highly experienced Vedic astrologer with decades of expertise
    </p>
  </FadeIn>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid lg:grid-cols-2 gap-12 items-center glass rounded-3xl p-8 md:p-12"
  >
    {/* Image */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden h-[600px]">
        <img
  src={expert.image}
  alt={expert.name}
  className="w-full h-full object-cover"
/>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-amber-500/20 rounded-2xl" />
    </div>

    {/* Content */}
    <div>
      <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-2">
        {expert.name}
      </h3>
      <p className="text-amber-400 font-medium mb-4 text-lg">
        {expert.role}
      </p>

      <div className="flex gap-6 mb-6 text-sm">
        <div>
          <span className="text-white/60">Experience:</span>
          <p className="text-white font-medium">{expert.experience}</p>
        </div>
        <div>
          <span className="text-white/60">Specialty:</span>
          <p className="text-white font-medium">{expert.specialty}</p>
        </div>
      </div>

      <p className="text-white/70 leading-relaxed mb-6 whitespace-pre-line">
        {expert.description}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary"
      >
        Book Consultation
      </motion.button>
    </div>
  </motion.div>
</section>
    </div>
  )
}