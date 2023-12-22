/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Norway Services Component', () => {
  render(<App />)
  const linkElement = screen.getByText(/Norway Services/i)
  expect(linkElement).toBeInTheDocument()
})
