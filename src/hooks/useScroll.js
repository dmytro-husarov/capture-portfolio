import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const useScroll = () => {
  const [element, view] = useInView({threshold: 0.3})
  const controls = useAnimation()

  useEffect(() => {
    if (view) {
      controls.start('show')
    } else {
      controls.start('exit')
    }
  }, [view, controls])
  

  return [element, controls]
}
