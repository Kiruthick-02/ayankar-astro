import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'px-6 py-3 text-white/80 hover:text-amber-400 transition-colors font-medium',
  danger: 'px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all',
  outline: 'px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-amber-400 hover:text-amber-400 transition-all'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  ...props 
}) {
  const baseClasses = `${variants[variant]} ${sizes[size]} ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`
  
  const content = (
    <>
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  )

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.02 },
    whileTap: disabled || loading ? {} : { scale: 0.98 },
  }

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <motion.button {...motionProps} className={baseClasses} {...props}>
          {content}
        </motion.button>
      </Link>
    )
  }

  if (href) {
    return (
      <motion.a 
        href={href} 
        {...motionProps} 
        className={`inline-flex items-center gap-2 ${baseClasses}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button 
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps} 
      className={`inline-flex items-center justify-center gap-2 ${baseClasses}`}
      {...props}
    >
      {content}
    </motion.button>
  )
}