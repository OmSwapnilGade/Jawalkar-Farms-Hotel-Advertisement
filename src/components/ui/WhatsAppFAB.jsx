import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../../utils/constants.js'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-fab hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  )
}
