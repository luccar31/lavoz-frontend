import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders a main', () => {
    render(<div>passes</div>)

    const div = screen.getByText('passes')

    expect(div).toBeInTheDocument()
  })
})