import { motion } from 'framer-motion'
import { fadeIn } from '../../hooks/useAnimations.js'

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="relative h-64 sm:h-72 lg:h-80 flex items-center justify-center bg-gradient-to-br from-brand-green-600 via-brand-green-700 to-emerald-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <motion.div {...fadeIn} className="relative text-center px-6">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">{title}</h1>
        {subtitle && <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
      </motion.div>
    </section>
  )
}
