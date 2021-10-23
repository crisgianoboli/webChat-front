import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from '@material-ui/core'

import theme from '../../theme/theme'
import Version from './Version'
import { version } from '../../../package.json'

test('render Version con account = Epiron test', () => {
  render(
    <ThemeProvider theme={theme}>
      <Version />
    </ThemeProvider>
  )
})
