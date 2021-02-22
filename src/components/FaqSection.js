import styled from 'styled-components'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { scrollReveal } from '../animation/animation'
import { useScroll } from '../hooks/useScroll'
import ToggleQuestion from './ToggleQuestion'


const FaqSection = () => {
  const [element, controls] = useScroll()

  return (
    <FaqStyleAnim
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <ToggleQuestion title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum.</p>            
          </div>
        </ToggleQuestion>
        <ToggleQuestion title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum.</p>
          </div>
        </ToggleQuestion>
        <ToggleQuestion title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum.</p>
          </div>
        </ToggleQuestion>
        <ToggleQuestion title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum.</p>
          </div>
        </ToggleQuestion>
      </AnimateSharedLayout>
    </FaqStyleAnim>
  )
}

const FaqStyleAnim = styled(motion.div)`
  min-height: 90vh;
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  color: white;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter
  }
  .answer {
    padding: 0.5rem 0;
    p {
      padding: 0.3rem 0;
    }
  }
  @media screen {
    @media (max-width: 1024px) {
      padding: 2rem;
    }
  }
`

export default FaqSection
