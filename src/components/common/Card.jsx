import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Card({ 
  children, 
  className = '',
  hover = true,
  glass = true,
  to,
  href,
  onClick,
  padding = 'p-6',
  radius = 'rounded-2xl',
  ...props 
}) {
  const baseClasses = `
    ${glass ? 'glass' : 'bg-slate-800/50'}
    ${radius}
    ${padding}
    ${className}
    ${hover ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10' : ''}
  `

  const content = (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      className={baseClasses.trim()}
      {...props}
    >
      {children}
    </motion.div>
  )

  if (to) {
    return <Link to={to} className="block">{content}</Link>
  }

  if (href) {
    return <a href={href} className="block" target="_blank" rel="noopener noreferrer">{content}</a>
  }

  if (onClick) {
    return <button onClick={onClick} className="block w-full text-left">{content}</button>
  }

  return content
}

// Specialized card variants
export function ServiceCard({ icon: Icon, title, description, price, duration, features = [], to }) {
  return (
    <Card to={to} className="h-full flex flex-col group">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-cinzel font-bold text-white group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <div className="text-right">
          <div className="text-amber-400 font-bold">{price}</div>
          <div className="text-white/50 text-xs">{duration}</div>
        </div>
      </div>
      
      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto pt-4 border-t border-white/10">
        <span className="text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <span>→</span>
        </span>
      </div>
    </Card>
  )
}

export function TestimonialCard({ name, role, content, rating, image }) {
  return (
    <Card className="text-center" hover={false}>
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-white/80 italic mb-6 leading-relaxed">"{content}"</p>
      
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-white font-bold">
          {name[0]}
        </div>
        <div className="text-left">
          <div className="font-cinzel font-bold text-white">{name}</div>
          <div className="text-amber-400/80 text-sm">{role}</div>
        </div>
      </div>
    </Card>
  )
}

export function StatCard({ icon: Icon, value, label, color = 'from-amber-500 to-orange-600' }) {
  return (
    <Card className="text-center group">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-white font-cinzel mb-1">{value}</div>
      <div className="text-white/50 text-sm">{label}</div>
    </Card>
  )
}