import styled from 'styled-components'
import { motion } from 'framer-motion'
import home1 from '../img/home1.png'
import { titleAnim, fadeAnim, photoAnim } from '../animation/animation'
import Wave from './Wave'


const AboutSection = () => {
  return (
    <AboutStyleAnim>
      <DescriptionStyle>
        <motion.div className="title">
          <HideStyle>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </HideStyle>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for any photography or videography ideas that you have.
          We have proffessinals with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnim}>Contact Us</motion.button>
      </DescriptionStyle>
      <ImageStyle>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="guy with a camera"
        />
      </ImageStyle>
      <Wave />
    </AboutStyleAnim>
  )
}

const AboutStyleAnim = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  color: white;
  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 2rem;
    }
  }
`
const DescriptionStyle = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 2rem;
  h2 {
    font-weight: lighter;
  }
  @media screen {
    @media (max-width: 1024px) {
      margin-bottom: 2rem;
      padding-right: 0;
    }
  }
`
const HideStyle = styled.div`
  overflow: hidden;
`
const ImageStyle = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media screen {
    @media (max-width: 1024px) {
      width: 100%;
      @media (min-height: 768px) {
        img {
          height: 40vh;
        }
      }
    }
  }
`

export default AboutSection
