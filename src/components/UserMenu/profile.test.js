import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import { ThemeProvider } from '@material-ui/core'

import theme from '../../theme/theme'
import Profile from './Profile'

const mockHandleClick = jest.fn()
test('render profile con el nombre de usuario "Epiron"', () => {
  const EPIRON = 'Epiron'
  render(
    <ThemeProvider theme={theme}>
      <Profile name={EPIRON} onClick={mockHandleClick} />
    </ThemeProvider>
  )
  const p = screen.queryByTestId('profile-name')
  expect(p).toBeTruthy()
  expect(p).toHaveTextContent(EPIRON)
})

test('render profile sin nombre de usuario', () => {
  render(
    <ThemeProvider theme={theme}>
      <Profile onClick={mockHandleClick} />
    </ThemeProvider>
  )
  const p = screen.queryByTestId('profile-name')
  expect(p).toBeTruthy()
  expect(p).toHaveTextContent('')
})

test('prueba del boton de cerrar sesion', () => {
  render(
    <ThemeProvider theme={theme}>
      <Profile onClick={mockHandleClick} />
    </ThemeProvider>
  )
  const button = screen.queryByText('CerrarSesion')
  fireEvent.click(button)
  expect(button).toBeTruthy()
  expect(mockHandleClick).toHaveBeenCalledTimes(1)
})
