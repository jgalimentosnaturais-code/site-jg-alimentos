import { motion } from 'framer-motion'
import { pageTransition, stagger, fadeUp, scaleIn, viewport } from '../lib/animations'
import CTASection from '../components/CTASection'

const categories = [
  {
    name: 'Oleaginosas',
    image: '/images/oleaginosas.jpg',
    items: ['Castanha do Pará', 'Castanha de Caju', 'Amêndoa', 'Nozes', 'Avelã', 'Macadâmia', 'Pistache', 'Amendoim'],
  },
  {
    name: 'Frutas Secas',
    image: '/images/frutas-secas.jpg',
    items: ['Damasco Seco', 'Tâmara', 'Uva Passa', 'Ameixa Seca', 'Figo Seco', 'Cranberry', 'Mirtilo Seco', 'Manga Seca'],
  },
  {
    name: 'Temperos Naturais',
    image: '/images/temperos.jpg',
    items: ['Açafrão', 'Canela em Pó', 'Cominho', 'Páprica Defumada', 'Cúrcuma', 'Pimenta do Reino', 'Noz-moscada', 'Cardamomo'],
  },
]

export default function CatalogPage() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="pt-64 pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-4"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>menu_book</span>
              Catálogo de produtos
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
              Nosso catálogo completo
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base text-on-surface/60 max-w-xl mx-auto">
              Conheça toda a nossa linha de alimentos naturais disponíveis para atacado. Entre em contato para tabela de preços e condições especiais.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="rounded-2xl overflow-hidden bg-white shadow-sm border border-outline/10"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h2 className="absolute bottom-4 left-5 text-xl font-bold text-white">{cat.name}</h2>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 list-none m-0 p-0">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-on-surface/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="https://wa.me/5544988266741"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white no-underline"
                    style={{ background: 'linear-gradient(135deg, #4F74AD, #7A9FD4)' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                    Solicitar catálogo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </motion.main>
  )
}
