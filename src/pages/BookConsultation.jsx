import { useState } from 'react'
import { motion } from 'framer-motion'

import { servicesData } from '../data/services'
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  Check,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'

const steps = ['Service', 'Date & Time', 'Details', 'Confirm']

const formatPrice = (price) => {
  if (!price) return 'Free'

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price)
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM'
]

export default function BookConsultation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    service: null,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    notes: ''
  })

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicesData.map((service) => (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateForm('service', service)}
                className={`glass rounded-xl p-6 text-left transition-all ${
                  formData.service?.id === service.id 
                    ? 'ring-2 ring-amber-400 bg-amber-400/10' 
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-cinzel font-bold text-white">{service.name}</h3>
                  <span className="text-amber-400 font-bold">
  {formatPrice(service.price)}
</span>
                </div>
                <p className="text-white/50 text-sm">{service.duration}</p>
              </motion.button>
            ))}
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-amber-400 text-sm font-semibold mb-3">Select Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => updateForm('date', e.target.value)}
                className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-amber-400 text-sm font-semibold mb-3">Select Time</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updateForm('time', time)}
                    className={`glass rounded-lg py-2 px-3 text-sm transition-all ${
                      formData.time === time 
                        ? 'bg-amber-400 text-slate-900' 
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        )

            case 2:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-400 text-sm font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    placeholder="Enter your name"
                    className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-amber-400 text-sm font-semibold mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-amber-400 text-sm font-semibold mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  placeholder="your@email.com"
                  className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-400 text-sm font-semibold mb-2">Birth Date</label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => updateForm('birthDate', e.target.value)}
                  className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-amber-400 text-sm font-semibold mb-2">Birth Time</label>
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => updateForm('birthTime', e.target.value)}
                  className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-amber-400 text-sm font-semibold mb-2">Birth Place</label>
              <input
                type="text"
                value={formData.birthPlace}
                onChange={(e) => updateForm('birthPlace', e.target.value)}
                placeholder="City, State, Country"
                className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30"
              />
            </div>

            <div>
              <label className="block text-amber-400 text-sm font-semibold mb-2">Additional Notes</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-white/30" />
                <textarea
                  value={formData.notes}
                  onChange={(e) => updateForm('notes', e.target.value)}
                  placeholder="Any specific questions or concerns..."
                  rows={3}
                  className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white bg-transparent border border-white/10 focus:border-amber-400 focus:outline-none placeholder-white/30 resize-none"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-cinzel font-bold text-amber-400 mb-4">Booking Summary</h3>
              
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/60">Service</span>
                <span className="text-white font-semibold">{formData.service?.name}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/60">Date & Time</span>
                <span className="text-white font-semibold">{formData.date} at {formData.time}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/60">Duration</span>
                <span className="text-white font-semibold">{formData.service?.duration}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/60">Consultant</span>
                <span className="text-white font-semibold">Senior Astrologer</span>
              </div>
              
              <div className="flex justify-between items-center py-3 text-lg">
                <span className="text-amber-400 font-semibold">Total Amount</span>
                <span className="text-amber-400 font-bold text-xl">{formatPrice(formData.service?.price)}</span>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Your Details</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-white/50">Name:</div>
                <div className="text-white">{formData.name}</div>
                <div className="text-white/50">Phone:</div>
                <div className="text-white">{formData.phone}</div>
                <div className="text-white/50">Email:</div>
                <div className="text-white">{formData.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/60">
              <Check className="w-5 h-5 text-green-400" />
              <span>By confirming, you agree to our terms and cancellation policy</span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.service !== null
      case 1: return formData.date && formData.time
      case 2: return formData.name && formData.phone && formData.email
      default: return true
    }
  }

  return (
    <div className="page-transition pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Book Session
          </span>
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4">
            Schedule Your <span className="text-gold-gradient">Consultation</span>
          </h1>
          <p className="text-white/60">Complete the steps below to book your personalized astrological session</p>
        </FadeIn>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-amber-400 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step, idx) => (
              <div key={step} className="relative z-10 flex flex-col items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    idx <= currentStep 
                      ? 'bg-amber-400 text-slate-900' 
                      : 'glass text-white/50'
                  }`}
                  animate={{ scale: idx === currentStep ? 1.1 : 1 }}
                >
                  {idx < currentStep ? <Check className="w-5 h-5" /> : idx + 1}
                </motion.div>
                <span className={`mt-2 text-xs font-medium ${
                  idx <= currentStep ? 'text-amber-400' : 'text-white/50'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-6 md:p-10"
        >
          {renderStep()}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              currentStep === 0 
                ? 'opacity-50 cursor-not-allowed text-white/30' 
                : 'glass text-white hover:bg-white/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </motion.button>

          <motion.button
            whileHover={{ scale: canProceed() ? 1.02 : 1 }}
            whileTap={{ scale: canProceed() ? 0.98 : 1 }}
            onClick={nextStep}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
              canProceed()
                ? 'btn-primary'
                : 'opacity-50 cursor-not-allowed bg-white/10 text-white/30'
            }`}
          >
            {currentStep === steps.length - 1 ? 'Confirm Booking' : 'Continue'}
            {currentStep !== steps.length - 1 && <ChevronRight className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </div>
  )
}