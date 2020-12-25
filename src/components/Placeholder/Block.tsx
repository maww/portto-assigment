import React from 'react'
import style from './Block.module.css'

interface Props {
  className?: string
}

function Block(props: Props): JSX.Element {
  const { className } = props
  return <div className={`${className || ''} ${style.main}`} />
}

export default Block
