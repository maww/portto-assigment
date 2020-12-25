import React from "react"
import { Direction } from './Common'

export interface ContextValue {
  direction: Direction | RwdConfig<Direction>
}

export default React.createContext<ContextValue>({
  direction: Direction.HORIZONTAL
})