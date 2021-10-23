import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'

import BusinessUnit from './BusinessUnit'
import theme from '../../theme/theme'

const mockHandleClick = jest.fn()
test('render BusinessUnit con el nombre de usuario "Epiron 3.0"', () => {
  const EPIRON = 'Epiron 3.0'
  render(
    <ThemeProvider theme={theme}>
      <BusinessUnit account={EPIRON} onClick={mockHandleClick} />
    </ThemeProvider>
  )
  const account = screen.queryByText(EPIRON)
  expect(account).toBeTruthy()
  expect(account).toHaveTextContent(EPIRON)
})
