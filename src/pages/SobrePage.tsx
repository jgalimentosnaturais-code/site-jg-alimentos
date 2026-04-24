import { motion } from 'framer-motion'
import { pageTransition, stagger, fadeUp, scaleIn, viewport } from '../lib/animations'
import CTASection from '../components/CTASection'

const values = [
  { icon: 'verified', title: 'Qualidade', text: 'Selecionamos rigorosamente cada produto para garantir a melhor qualidade aos nossos clientes.' },
  { icon: 'handshake', title: 'Confiança', text: 'Construímos relacionamentos duradouros baseados em transparência e comprometimento.' },
  { icon: 'eco', title: 'Naturalidade', text: 'Trabalhamos exclusivamente com alimentos naturais, sem aditivos químicos ou artificiais.' },
  { icon: 'groups', title: 'Parceria', text: 'Tratamos cada cliente como um parceiro estratégico, oferecendo suporte e condições especiais.' },
]

export default function SobrePage() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="pt-24 md:pt-40 lg:pt-56 pb-10 md:pb-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-6"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>info</span>
                Sobre a JG Alimentos
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">
                Mais de 6 anos levando qualidade ao seu negócio
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base text-on-surface/60 leading-relaxed mb-4">
                A JG Alimentos nasceu da paixão por alimentos naturais e da vontade de democratizar o acesso a produtos de qualidade para distribuidores e comerciantes em todo o Brasil.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-on-surface/60 leading-relaxed mb-4">
                Somos especializados na distribuição atacadista de oleaginosas, frutas secas e temperos naturais, atendendo supermercados, lojas de produtos naturais, distribuidoras e redes de varejo.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-on-surface/60 leading-relaxed">
                Com um portfólio criteriosamente selecionado e um atendimento próximo e personalizado, nos tornamos referência no segmento de alimentos naturais no mercado B2B brasileiro.
              </motion.p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative"
            >
              <div className="absolute -inset-6 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/sobre.jpg"
                  alt="JG Alimentos"
                  className="w-full h-[260px] sm:h-[340px] md:h-[380px] lg:h-[420px] object-cover object-[center_62%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[['6+', 'Anos'], ['500+', 'Clientes'], ['+300', 'Produtos']].map(([num, label]) => (
                  <div key={label} className="bg-surface-container-low rounded-xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-primary">{num}</p>
                    <p className="text-xs text-on-surface/50 font-medium mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-on-surface tracking-tight">
              Nossos valores
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="group bg-white rounded-2xl p-5 md:p-7 hover:bg-primary transition-colors duration-300 shadow-sm"
              >
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: '36px' }}
                >
                  {v.icon}
                </span>
                <h3 className="text-base font-bold text-on-surface group-hover:text-white mt-4 mb-2 transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-sm text-on-surface/60 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.main>
  )
}
