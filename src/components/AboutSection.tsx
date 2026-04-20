import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn, viewport } from '../lib/animations'

const cards = [
  {
    icon: 'verified',
    title: 'Qualidade Garantida',
    text: 'Produtos selecionados com rigoroso controle de qualidade, direto dos melhores fornecedores do Brasil e do mundo.',
  },
  {
    icon: 'local_shipping',
    title: 'Entrega Nacional',
    text: 'Distribuição para todo o Brasil com logística ágil e rastreamento em tempo real de cada pedido.',
  },
  {
    icon: 'handshake',
    title: 'Parceria B2B',
    text: 'Condições especiais para distribuidores, redes de mercado e atacadistas. Atendimento dedicado ao seu negócio.',
  },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-surface-container-low" id="sobre-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            variants={scaleIn}
            className="rounded-2xl p-8 flex flex-col justify-between min-h-[220px]"
            style={{ background: 'linear-gradient(135deg, #854f1a, #a26730)' }}
          >
            <span className="material-symbols-outlined text-white/60" style={{ fontSize: '40px' }}>eco</span>
            <div>
              <p className="text-5xl font-extrabold text-white leading-none">6+</p>
              <p className="text-sm font-semibold text-white/80 mt-1">Anos de Mercado</p>
            </div>
          </motion.div>

          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group rounded-2xl p-8 bg-white hover:bg-primary transition-colors duration-300 cursor-default shadow-sm"
            >
              <span
                className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300"
                style={{ fontSize: '36px' }}
              >
                {card.icon}
              </span>
              <h3 className="text-base font-bold text-on-surface group-hover:text-white mt-4 mb-2 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-on-surface/60 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
