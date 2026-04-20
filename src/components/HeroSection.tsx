import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/animations'

function PulseButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="relative inline-flex">
      <motion.span
        className="absolute inset-0 rounded-xl bg-primary/30 pointer-events-none"
        animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut', repeatDelay: 0 }}
      />
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white no-underline"
        style={{ background: 'linear-gradient(135deg, #854f1a, #a26730)' }}
      >
        {children}
      </motion.a>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-surface flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm" style={{ fontSize: '14px' }}>verified</span>
            Distribuidor Atacadista B2B
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight"
          >
            Alimentos naturais{' '}
            <em className="italic text-primary not-italic" style={{ fontStyle: 'italic' }}>
              com qualidade
            </em>{' '}
            para o seu negócio
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base lg:text-lg text-on-surface/60 leading-relaxed max-w-lg">
            Fornecemos oleaginosas, frutas secas e temperos naturais selecionados para distribuidores, mercados e redes de varejo em todo o Brasil.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <PulseButton href="https://wa.me/5544988266741">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
              Solicitar catálogo
            </PulseButton>
            <motion.a
              href="#produtos"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-primary border-2 border-primary/30 hover:border-primary/60 transition-colors no-underline bg-transparent"
            >
              Ver produtos
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_downward</span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
            {[['6+', 'Anos de mercado'], ['500+', 'Clientes ativos'], ['100%', 'Natural']].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-primary">{num}</p>
                <p className="text-xs text-on-surface/50 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
          style={{ overflow: 'visible' }}
        >
          <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Produtos JG Alimentos"
              className="w-full h-[520px] object-cover"
              fetchPriority="high"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>local_shipping</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Entrega Nacional</p>
                <p className="text-xs text-on-surface/50">Todo o Brasil</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
