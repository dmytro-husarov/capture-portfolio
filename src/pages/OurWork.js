import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {
  pageAnim,
  photoAnim,
  fadeAnim,
  lineAnim,
  sliderAnim,
  sliderContainerAnim
} from '../animation/animation'
import ScrollTop from '../components/ScrollTop'


const OurWork = () => {
  return (
    <WorkStyleAnim
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnim}
    >
      <motion.div variants={sliderContainerAnim}>
        <Frame1 variants={sliderAnim}/>
        <Frame2 variants={sliderAnim}/>
        <Frame3 variants={sliderAnim}/>
        <Frame4 variants={sliderAnim}/>
      </motion.div>
      <MovieStyle>
        <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-athlete">
          <HideStyle>
            <motion.img
              variants={photoAnim}
              src={athlete}
              alt="athlete"
            />
          </HideStyle>
        </Link>
      </MovieStyle>
      <MovieStyle>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer"/>
        </Link>
      </MovieStyle>
      <MovieStyle>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes"/>
        </Link>
      </MovieStyle>
      <ScrollTop />
    </WorkStyleAnim>
  )
}

const WorkStyleAnim = styled(motion.div)`
  min-height: 90vh;
  padding: 1rem 4rem;
  background: white;
  overflow: hidden;
  h2 {
    padding: 1rem 4rem;
  }
  @media screen {
    @media (max-width: 1024px) {
      padding: 0.5rem 1.4rem;
      h2 {
        padding: 0.5rem 2rem;
      }
    }
  }
`
const MovieStyle = styled.div`
  padding-bottom: 2rem;
  .line {
    margin-bottom: 1rem;
    height: 0.3rem;
    background: #23d997;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
const HideStyle = styled.div`
  overflow: hidden;
`
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
