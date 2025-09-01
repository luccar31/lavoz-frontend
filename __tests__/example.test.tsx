import { render, screen } from '@testing-library/react'
import LandingPage from "@/app/(landing)/page";

describe('Home', () => {
  it('renders a main', () => {
    render(<LandingPage />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})