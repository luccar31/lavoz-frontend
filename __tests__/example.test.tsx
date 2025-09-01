import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders a main', () => {
    render(<div></div>)

    const div = screen.getByRole('div')

    expect(div).toBeInTheDocument()
  })
})