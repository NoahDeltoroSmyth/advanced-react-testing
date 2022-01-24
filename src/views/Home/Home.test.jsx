import { findByText, render, screen } from '@testing-library/react'
import App from '../../App'

// const user = {
//   id: 1,
//   created_at: '2021-12-13T00:17:29+00:00',
//   name: 'Vonta',
//   avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
//   header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
//   likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
//   motto: 'Res Non Verba',
//   color: 'crimson',
// }

test('Should render the user profile', async () => {
  render(<App />)

  const name = await screen.findByRole('heading', { name: /vonta/i })
  const motto = await screen.findByLabelText(/motto/i)
  const interestHeading = await screen.findByText(/interests/i)
  const avatar = await screen.findByAltText(/avatar/i)
  const headerImage = await screen.findByAltText(/header/i)
  const likes = await screen.findAllByRole(/listitem/i)

  expect(name).toBeInTheDocument()
  expect(motto).toBeInTheDocument()
  expect(interestHeading).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(headerImage).toBeInTheDocument()
  expect(likes.length).toEqual(6)
})
