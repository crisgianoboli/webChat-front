import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from '@material-ui/core/styles'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import reportWebVitals from './reportWebVitals'
import { vitalsReport } from './config/index'
import AuthRouter from './router/AuthRouter'
import theme from './theme/theme'
import './i18n/i18n'
import queryClient from './cache'

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(vitalsReport)
