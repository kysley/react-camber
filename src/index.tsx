import * as React from 'react'

type CamberProps = {
  loop?: boolean
}

export const Camber: React.FC<CamberProps> = ({ loop = true }) => {
  const handleScroll = React.useCallback(() => {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    )
    const windowBottom = windowHeight + window.pageYOffset

    if (windowBottom >= docHeight) {
      if (loop) window.scroll(0, 0)
    }
  }, [loop])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return null
}
