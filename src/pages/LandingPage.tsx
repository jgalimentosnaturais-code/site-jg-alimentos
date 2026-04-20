import { motion } from 'framer-motion'
import { pageTransition } from '../lib/animations'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import CTASection from '../components/CTASection'

export default function LandingPage() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CTASection />
    </motion.main>
  )
}
