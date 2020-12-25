import { createContext, useCallback, useEffect, useState } from 'react'
import { ACCOUT_ADDRESS } from '../../const/Common'
import useDerivedRef from '../../hooks/useDerivedRef'
import axios from 'axios'

interface ContextValue {
  state: FetchState
  list: Data.Asset[]
  isEnd: boolean
}

const LIMIT = 20

const DEFAULT_CONTEXT_VALUE: ContextValue = Object.freeze({
  state: 'VOID',
  list: [],
  isEnd: false
})

const Context = createContext<ContextValue>(DEFAULT_CONTEXT_VALUE)

function useContextState(): [ContextValue, () => void] {
  const [offset, setOffset] = useState(0)
  const [value, setValue] = useState<ContextValue>(DEFAULT_CONTEXT_VALUE)
  const { isEnd } = value
  useEffect(() => {
    if (isEnd) {
      return
    }

    setValue((prev) => ({
      ...prev,
      state: 'LOADING'
    }))
    axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        owner: ACCOUT_ADDRESS,
        offset,
        limit: LIMIT,
      }
    })
    .then(({ data: { assets } }) => setValue((prev) => ({
      state: 'VOID',
      list: prev.list.concat(assets),
      isEnd: !assets.length
    })))
  }, [offset, isEnd])

  const valueRef = useDerivedRef(value)
  const update = useCallback(() => {
    const { state } = valueRef.current
    if (state === 'LOADING') {
      return
    }

    setOffset((prev) => prev + LIMIT)
  }, [valueRef])

  return [value, update]
}

export default Context
export { useContextState, LIMIT }