import React, { useContext } from 'react'
import { Direction } from './Common'
import Context from './StackContext'
import style from './StackSpace.module.css'

const DESKTOP_DIRECTION_STYLE_MAP: Record<Direction, string> = {
  [Direction.HORIZONTAL]: style.main__horizontal,
  [Direction.VERTICAL]: style.main__vertical
}

const MOBILE_DIRECTION_STYLE_MAP: Record<Direction, string> = {
  [Direction.HORIZONTAL]: style.main__rs__horizontal,
  [Direction.VERTICAL]: style.main__rs__vertical
}

function StackSpace() {
  const { direction } = useContext(Context)

  let dDirection
  let mDirection
  if (typeof direction === 'object') {
    dDirection = direction.desktop
    mDirection = direction.mobile
  } else {
    dDirection = direction
  }

  const classList = [
    style.main,
    DESKTOP_DIRECTION_STYLE_MAP[dDirection],
    mDirection && MOBILE_DIRECTION_STYLE_MAP[mDirection]
  ]

  return (
    <div className={classList.filter(v => !!v).join(' ')} />
  )
}

export default StackSpace