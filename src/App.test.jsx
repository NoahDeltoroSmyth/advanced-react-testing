import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
// import Header from './views/Layout/Layout'
import App from './App'

// const user = {}

test('Should render the header', async () => {
  render(<App />)

  const image = screen.getByAltText(/Alchemy Logo/i)
  const text = await screen.findByRole('banner', { paragraph: /meet vonta/i })

  expect(screen.getByText(/loading/i)).toBeInTheDocument()
  expect(image).toBeInTheDocument()
  expect(text).toBeInTheDocument()
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
})
