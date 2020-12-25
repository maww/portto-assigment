import React from 'react'
import { render } from '@testing-library/react'
import Stack from './Stack'

it('Render a Stack', () => {
  const { getByText } = render(
    <Stack>
      <div>test-1</div>
      <div>test-2</div>
    </Stack>
  )

  const div1 = getByText(/test-1/)
  expect(div1).toBeInTheDocument()

  const div2 = getByText(/test-2/)
  expect(div2).toBeInTheDocument()
})