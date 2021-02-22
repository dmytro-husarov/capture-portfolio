import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Nav = () => {
  const {pathname} = useLocation()

  return (
    <NavStyle>
      <h1>
        <Link id="logo" to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <LineStyleAnim
            initial={{width: '0%'}}
            animate={{width: pathname === '/' ? '100%' : '0%'}}
            transition={{duration: 0.75}}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <LineStyleAnim
            initial={{width: '0%'}}
            animate={{width: pathname === '/work' ? '100%' : '0%'}}
            transition={{duration: 0.75}}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <LineStyleAnim
            initial={{width: '0%'}}
            animate={{width: pathname === '/contact' ? '100%' : '0%'}}
            transition={{duration: 0.75}}
          />
        </li>
      </ul>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: auto; */
  padding: 1rem 4rem;
  min-height: 10vh;
  background: #282828;
  #logo {
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 2rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 0.5rem;
      #logo {
        font-size: 1.4rem;
      }
      ul {
        margin-top: 0.5rem;
        width: 100%;
        justify-content: space-evenly;
      }
      li {
        padding-left: 0rem;
      }
    }
  }
`
const LineStyleAnim = styled(motion.div)`
  width: 0%;
  margin-top: 0.2rem;
  height: 0.2rem;
  background: #23d997;
`

export default Nav
