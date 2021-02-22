import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { motion } from 'framer-motion'
import { MovieState } from "../movieState"
import { pageAnim } from '../animation/animation'


const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  )
}

const MovieDetail = () => {
  const [movies] = useState(MovieState)
  const [movie, setMovie] = useState(null)
  const history = useHistory()
  const url = history.location.pathname

  useEffect(() => {
    const [currentMovie] = movies.filter(m => {
      return m.url === url
    })
    setMovie(currentMovie)
  }, [movies, url])

  return (
    <>
      { movie && (
        <DetailsStyleAnim
          initial="hidden"
          animate="show"
          exit="exit"
          variants={pageAnim}
        >
          <HeadLineStyle>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie"/>
          </HeadLineStyle>
          <AwardsStyle>
            {movie.awards.map(award => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}              
              />
            ))}
          </AwardsStyle>
          <ImageDisplayStyle>
            <img src={movie.secondaryImg} alt="movie"/>
          </ImageDisplayStyle>
        </DetailsStyleAnim>
      )}
    </>
  )
}

const DetailsStyleAnim = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`
const HeadLineStyle = styled.div`
  width: 100%;
  min-height: 90vh;
  padding-top: 1rem;
  h2 {
    padding-bottom: 1rem;
    text-align: center;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
const AwardsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 90vh;
  padding: 2rem;
  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 1rem;
    }
  }
`
const AwardStyle = styled.div`
  padding: 1rem;
  h3 {
    font-size: 1rem;
  }
  .line {
    width: 100%;
    height: 0.3rem;
    margin: 0.3rem 0;
    background: #23d997;
  }
  p {
    padding: 1rem 0;
  }
`
const ImageDisplayStyle = styled.div`
  width: 100%;
  min-height: 90vh;
  img {
    width: 100%;
    min-height: 80vh;
    object-fit: cover;
  }
`

export default MovieDetail
