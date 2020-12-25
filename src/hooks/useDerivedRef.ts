import { MutableRefObject, useRef } from 'react'

function useDerivedRef<V>(val: V): MutableRefObject<V> {
  const ref = useRef(val)
  ref.current = val

  return ref
}

export default useDerivedRef