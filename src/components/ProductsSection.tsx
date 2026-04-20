import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../lib/animations'

const products = [
  {
    name: 'Oleaginosas',
    description: 'Castanhas, nozes, amêndoas e muito mais',
    image: '/images/oleaginosas.jpg',
  },
  {
    name: 'Frutas Secas',
    description: 'Damascos, tâmaras, uvas passas e outras',
    image: '/images/frutas-secas.jpg',
  },
  {
    name: 'Temperos Naturais',
    description: 'Especiarias selecionadas para o seu negócio',
    image: '/images/temperos.jpg',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 bg-surface" id="produtos">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>category</span>
            Nossos produtos
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
            Linha completa de alimentos naturais
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-on-surface/60 mt-3 max-w-xl mx-auto">
            Trabalhamos com as principais categorias do mercado de alimentos naturais, com qualidade e procedência garantidas.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[400px]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-sm text-white/70 mt-1">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
