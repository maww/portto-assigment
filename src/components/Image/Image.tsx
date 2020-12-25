import React, { ImgHTMLAttributes, useEffect, useState } from 'react'
import { Block } from '../Placeholder'
// import style from './Image.module.css'

function Image(props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  const { src = '' } = props
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    const img = document.createElement('img')
    const callback = () => setLoaded(true)
    img.addEventListener('load', callback)
    img.src = src

    return () => {
      img.removeEventListener('load', callback)
    }
  }, [src])

  return isLoaded
    ? (
      <img
        {...props}
      />
    )
    : <Block />
}

export default Image