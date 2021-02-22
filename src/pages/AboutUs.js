import { motion } from 'framer-motion'
import styled from 'styled-components'
import { pageAnim } from '../animation/animation'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ScrollTop from '../components/ScrollTop'
import ServicesSection from '../components/ServicesSection'


const AboutUs = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnim}
    >
      <HideStyle>
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </HideStyle>

      <ScrollTop />
    </motion.div>
  )
}

const HideStyle = styled.div`
  overflow: hidden;
`

export default AboutUs
