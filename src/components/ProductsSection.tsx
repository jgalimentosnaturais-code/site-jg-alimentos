import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { stagger, fadeUp, viewport } from '../lib/animations'

const products = [
  {
    name: 'Oleaginosas',
    description: 'Castanhas, nozes, amêndoas e muito mais',
    images: [
      '/images/oleaginosas.jpg',
      '/images/oleaginosas-2.jpg',
      '/images/oleaginosas-3.jpg',
    ],
  },
  {
    name: 'Frutas Secas',
    description: 'Damascos, tâmaras, uvas passas e outras',
    images: [
      '/images/frutas-secas.jpg',
      '/images/frutas-secas-2.jpg',
      '/images/frutas-secas-3.jpg',
    ],
  },
  {
    name: 'Temperos Naturais',
    description: 'Especiarias selecionadas para o seu negócio',
    images: [
      '/images/temperos.jpg',
      '/images/temperos-2.jpg',
      '/images/temperos-3.jpg',
    ],
  },
]

const INTERVAL_MS = 4000

function ProductCard({ product }: { product: typeof products[number] }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % product.images.length)
  }, [product.images.length])

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + product.images.length) % product.images.length)
  }, [product.images.length])

  useEffect(() => {
    if (paused || product.images.length <= 1) return
    const id = setInterval(next, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, next, product.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-[260px] sm:h-[320px] md:h-[400px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Imagens com transição */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={product.images[current]}
          alt={`${product.name} ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          loading="lazy"
          decoding="async"
        />
      </AnimatePresence>

      {/* Hover scale overlay */}
      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* Setas de navegação — aparecem no hover */}
      {product.images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
            aria-label="Imagem anterior"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
            aria-label="Próxima imagem"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
          </button>
        </>
      )}

      {/* Texto e dots */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="text-sm text-white/70 mt-1">{product.description}</p>

        {/* Pontos indicadores */}
        {product.images.length > 1 && (
          <div className="flex gap-1.5 mt-3">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  return (
    <section className="py-12 md:py-20 bg-surface" id="produtos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
