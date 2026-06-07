import { motion } from 'framer-motion'
import { fadeUp } from '../../hooks/useAnimations.js'

export default function SectionHeader({ title, subtitle, center = true, light = false }) {
  return (
    <motion.div {...fadeUp} className={`${center ? 'text-center' : ''}`}>
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/75' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
