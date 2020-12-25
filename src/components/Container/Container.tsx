import React, { PropsWithChildren } from 'react'
import style from './Container.module.css'

export interface Props {
  className?: string
}

export default function Container(props: PropsWithChildren<Props>) {
  const { children, className } = props
  return (
    <div className={className}>
      <div className={style.main}>
        {children}
      </div>
    </div>
  )
}