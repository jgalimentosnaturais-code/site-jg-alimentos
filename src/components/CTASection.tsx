import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/animations'

export default function CTASection() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, #854f1a 0%, #a26730 60%, #b87d45 100%)' }}
        >
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <motion.span
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>storefront</span>
            Para o seu negócio
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative text-3xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            Pronto para fazer parte <br className="hidden lg:block" />
            da nossa rede de parceiros?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative text-base lg:text-lg text-white/80 max-w-xl mx-auto mb-10"
          >
            Entre em contato agora e solicite seu catálogo completo com tabela de preços e condições especiais para atacado.
          </motion.p>

          <motion.div variants={fadeUp} className="relative flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/5544988266741"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-sm no-underline shadow-lg"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
              Solicitar catálogo via WhatsApp
            </motion.a>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>phone</span>
              (44) 98826-6741
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
