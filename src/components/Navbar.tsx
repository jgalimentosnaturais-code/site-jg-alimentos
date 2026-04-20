import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'

const links = [
  { label: 'Início', to: '/' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Sobre Nós', to: '/sobre' },
]

const getActiveFromPath = (p: string) => {
  if (p === '/catalogo') return 'Catálogo'
  if (p === '/sobre') return 'Sobre Nós'
  return 'Início'
}

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(() => getActiveFromPath(location.pathname))
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setActive(getActiveFromPath(location.pathname))
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      } bg-surface/80 backdrop-blur-md`}
      style={{ overflow: 'hidden' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => { setActive('Início'); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <img src="/logo.png" alt="JG Alimentos" className="h-10 w-auto" />
        </motion.div>

        <motion.ul
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-1 list-none m-0 p-0"
        >
          {links.map((link) => {
            const isActive = active === link.label
            return (
              <motion.li
                key={link.label}
                variants={itemVariants}
                className="relative px-4 py-2 cursor-pointer"
                onClick={() => { setActive(link.label); navigate(link.to); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span
                  className={`relative text-sm font-medium transition-colors duration-200 pointer-events-none ${
                    isActive ? 'text-primary' : 'text-on-surface/70'
                  }`}
                >
                  {link.label}
                </span>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.a
          href="https://wa.me/5544988266741"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white no-underline"
          style={{ background: 'linear-gradient(135deg, #854f1a, #a26730)' }}
        >
          <span className="material-symbols-outlined text-base" style={{ fontSize: '18px' }}>chat</span>
          Fale conosco
        </motion.a>
      </div>
    </motion.nav>
  )
}
