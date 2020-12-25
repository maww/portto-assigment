import React from 'react'
import { render } from '@testing-library/react'
import { Direction } from './Common'
import Stack from './Stack'
import StackSpace from './StackSpace'


it('Render a StackSpace', () => {
  const { getByText } = render(
    <Stack direction={Direction.VERTICAL}>
      <div>test</div>
      <StackSpace data-testid="space"/>
      <div>b</div>
    </Stack>
  )

  const stack = getByText(/test/).parentNode
  const space = stack.children[1]
  expect(space).toHaveClass('main__vertical')
})