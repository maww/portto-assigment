import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function useDerivedState<S>(derivedState: S): [S, Dispatch<SetStateAction<S>>] {
  const state = useState(derivedState)
  const prevRef = useRef(derivedState)
  const [, setState] = state
  useEffect(() => {
    if (derivedState !== prevRef.current) {
      setState(derivedState)
      prevRef.current = derivedState
    }
  }, [derivedState, prevRef, setState])

  return state
}