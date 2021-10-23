import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ThemeProvider } from '@material-ui/core/styles'
import { render, screen } from '@testing-library/react'
import theme from '../../theme/theme'

import UserMenu from './'

const queryClient = new QueryClient()
let open = false
const handleClose = jest.fn()
const mockSignOutfn = jest.fn()
jest.mock('../../hooks/auth/useAuth', () => ({
  useAuth: () => ({
    useSignout: () => ({ mutate: mockSignOutfn }),
  }),
}))

test('no se renderea si open = false', () => {
  render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserMenu handleClose={handleClose} open={open} />
      </QueryClientProvider>
    </ThemeProvider>
  )
  const div = screen.queryByRole('presentation')
  expect(div).toBeFalsy()
})

test('se renderea si open = true', () => {
  open = true
  render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserMenu handleClose={handleClose} open={open} />
      </QueryClientProvider>
    </ThemeProvider>
  )
  const div = screen.getAllByRole('presentation')
  expect(div).toBeTruthy()
})
