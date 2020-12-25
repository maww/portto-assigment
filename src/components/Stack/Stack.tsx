import React, { PropsWithChildren } from 'react'
import { Align, Direction, Gutter } from './Common'
import StackContext from './StackContext'
import style from './Stack.module.css'

export interface Props {
  className?: string
  
  direction?: Direction | RwdConfig<Direction>

  gutter?: Gutter

  align?: Align

  isCentered?: boolean
}

const DESKTOP_DIRECTION_STYLE_MAP: Record<Direction, string> = {
  [Direction.HORIZONTAL]: '',
  [Direction.VERTICAL]: style.main__vertical
}

const MOBILE_DIRECTION_STYLE_MAP: Record<Direction, string> = {
  [Direction.HORIZONTAL]: style.main__rs__horizontal,
  [Direction.VERTICAL]: style.main__rs__vertical
}

const GUTTER_STYLE_MAP: Record<Gutter, string> = {
  [Gutter.VOID]: '',
  [Gutter.SMALL]: style.main__gutter__small,
  [Gutter.MEDIUM]: style.main__gutter__medium,
  [Gutter.LARGE]: style.main__gutter__large,
  [Gutter.XLARGE]: style.main__gutter__xlarge
}

const ALIGN_STYLE_MAP: Record<Align, string> = {
  [Align.START]: '',
  [Align.CENTER]: style.main__align__center,
  [Align.END]: style.main__align__end,
  [Align.STRETCH]: style.main__align__stretch
}

export default function Stack(props: PropsWithChildren<Props>): JSX.Element {
  const {
    children,
    className,
    direction = Direction.HORIZONTAL,
    gutter = Gutter.VOID,
    align = Align.START,
    isCentered
  } = props

  let dDirection
  let mDirection
  if (typeof direction === 'object') {
    dDirection = direction.desktop
    mDirection = direction.mobile
  } else {
    dDirection = direction || Direction.HORIZONTAL
  }

  const classList = [
    className,
    style.main,
    DESKTOP_DIRECTION_STYLE_MAP[dDirection],
    mDirection && MOBILE_DIRECTION_STYLE_MAP[mDirection],
    GUTTER_STYLE_MAP[gutter],
    ALIGN_STYLE_MAP[align],
    isCentered && style.main__centered
  ]

  return (
    <StackContext.Provider value={{ direction }}>
      <div className={classList.filter(v => !!v).join(' ')}>
        {children}
      </div>
    </StackContext.Provider>
  )
}