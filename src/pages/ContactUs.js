import { motion } from 'framer-motion'
import styled from 'styled-components'
import { pageAnim, titleAnim } from '../animation/animation'
import ScrollTop from '../components/ScrollTop'


const ContactUs = () => {
  return (
    <ContactStyleAnim
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnim}
    >
      <TitleStyle>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </TitleStyle>
      <div>
        <Hide>
          <SocialStyleAnim variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </SocialStyleAnim>
        </Hide>
        <Hide>
          <SocialStyleAnim variants={titleAnim}>
            <Circle />
            <h2>Send an email.</h2>
          </SocialStyleAnim>
        </Hide>
        <Hide>
          <SocialStyleAnim variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </SocialStyleAnim>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyleAnim>
  )
}

const ContactStyleAnim = styled(motion.div)`
  padding: 3rem 4rem;
  min-height: 90vh;
  background: white;
  color: #353535;
  @media screen {
    @media (max-width: 1024px) {
      padding: 1.5rem 2rem;
    }
  }
`
const TitleStyle = styled.div`
  margin-bottom: 1rem;
  color: black;
`
const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #353535;
`
const SocialStyleAnim = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 1rem;
  }
  @media screen {
    @media (max-width: 1024px) {
      h2 {
        margin: 0.7rem;
      }
    }
  }
`

export default ContactUs
