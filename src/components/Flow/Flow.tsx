import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import style from './Flow.module.css'

export enum Gutter {
  VOID,
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
}

const GUTTER_STYLE_MAP: Record<Gutter, string> = {
  [Gutter.VOID]: '',
  [Gutter.SMALL]: style.main__gutter__small,
  [Gutter.MEDIUM]: style.main__gutter__medium,
  [Gutter.LARGE]: style.main__gutter__large,
  [Gutter.XLARGE]: style.main__gutter__xlarge
}

type Props = PropsWithChildren<{
  gutter?: Gutter

  col?:  number
}>


type MainCSSProperties = CSSProperties & {
  ['--app--stack--col']: number
}

function Flow(props: Props): JSX.Element {
  const { children, gutter = Gutter.VOID, col = 1 } = props

  const colList: ReactNode[][] = []
  if (children instanceof Array) {
    children.flat(Infinity).forEach((child, index) => {
      const colIndex = index % col
      let arr = colList[colIndex]
      if (!arr) {
        arr = []
        colList[colIndex] = arr
      }

      arr.push(child)
    })
  } else {
    colList.push([children])
  }

  return (
    <div
      className={`${style.main} ${GUTTER_STYLE_MAP[gutter]}`}
      style={{ '--app--stack--col': col } as MainCSSProperties}
    >
      {colList.map((colChildren, index) => (
        <div key={index} className={style.col}>{colChildren}</div>
      ))}
    </div>
  )
}

export default Flow
export type { Props }