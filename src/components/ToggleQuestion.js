import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const ToggleQuestion = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <QuestionStyleAnim layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>  
      {toggle && children}
      <LineStyle />
    </QuestionStyleAnim>
  )
}

const QuestionStyleAnim = styled(motion.div)`
  padding: 0.7rem 0;
  cursor: pointer;
`
const LineStyle = styled.div`
  margin: 0.7rem 0;
  width: 100%;
  height: 0.2rem;
  background: #cccccc;
`

export default ToggleQuestion
