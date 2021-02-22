import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import { scrollReveal } from '../animation/animation'
import { useScroll } from '../hooks/useScroll'


const ServicesSection = () => {
  const [element, controls] = useScroll()

  return (
    <ServicesStyleAnim
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionStyle>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </DescriptionStyle>
      <ImageStyle>
        <img src={home2} alt="camera"/>
      </ImageStyle>
    </ServicesStyleAnim>
  )
}

const ServicesStyleAnim = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  color: white;
  h2 {
    padding: 2rem 0;
  }
  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
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
      padding-right: 0;
      h2 {
        padding: 1rem;
      }
    }
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen {
    @media (max-width: 375px) {
      flex-direction: column;
    }
  }
`
const Card = styled.div`
  width: 50%;
  padding: 0.3rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 0.5rem;
      background: white;
      font-size: 1rem;
      color: black;
    }
  }
  p {
    font-size: 0.8rem;
  }
  @media screen {
    @media (max-width: 375px) {
      width: 100%;
      .icon {
        img {
          width: 12%;
        }
        h3 {
          margin-left: 1rem;
          padding: 0.3rem;
          background: white;
          font-size: 0.8rem;
          color: black;
        }
      }
      p {
        padding: 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
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

export default ServicesSection