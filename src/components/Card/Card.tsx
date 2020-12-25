import React, { PropsWithChildren } from 'react'
import style from './Card.module.css'

function Card(props: PropsWithChildren<{}>): JSX.Element {
  const { children } = props
  return (
    <div className={style.main}>
      {children}
    </div>
  )
}

export default Card