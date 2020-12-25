import { Dispatch } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import useDerivedState from './useDerivedState'

it('useDerivedState', () => {
  const { result, rerender } = renderHook<number, [number, Dispatch<number>]>(
    (derivedState = 1) => useDerivedState(derivedState),
  )

  expect(result.current[0]).toBe(1)

  act(() => result.current[1](2))
  expect(result.current[0]).toBe(2)

  rerender(3)
  expect(result.current[0]).toBe(3)
})
