import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
  const {pathname} = useLocation()

  useLayoutEffect(() => {
    window.scroll({
      top: 0,
    })
  }, [pathname])

  return null
}

export default ScrollTop
