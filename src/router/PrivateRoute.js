import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/auth/useAuth'
//import { TOKEN } from '../utils'

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()
  //TODO verificar si es necesario el token
  //const token = localStorage.getItem(TOKEN)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
