import React from 'react'
import { render } from '@testing-library/react'
import Container from './Container'

it('Render a Container', () => {
  const { getByText } = render(<Container>test</Container>)
  const container = getByText(/test/)
  expect(container).toBeInTheDocument()
})