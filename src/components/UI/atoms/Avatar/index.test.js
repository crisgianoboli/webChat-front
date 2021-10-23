import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Avatar from './'

describe('<Avatar />', () => {
  it('no hay imagen', () => {
    const component = render(<Avatar />)
    const img = screen.queryByRole('img')
    expect(img).not.toBeInTheDocument()
  })

  it('hay imagen', () => {
    render(<Avatar image="agusFace" />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'agusFace')
    expect(img).toHaveAttribute('alt', 'FotoPerfil')
  })

  it('imagen por children', () => {
    render(
      <Avatar>
        <img src="agusFace" alt="fotoPerfil" />
      </Avatar>
    )
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'agusFace')
    expect(img).toHaveAttribute('alt', 'fotoPerfil')
  })
})
