import { render, screen } from '@testing-library/react'
import Header from './views/Layout/Layout'

const user = {}

test('Should render the header', () => {
  render(<Header user={user} />)

  const image = screen.getByAltText(/Alchemy Logo/i)
  expect(image).toBeInTheDocument()

  const username = screen.getByRole('banner', { paragraph: /meet/i })
  expect(username).toBeInTheDocument()
})
