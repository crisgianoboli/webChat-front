import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { useProvideAuth, authContext } from '../hooks/auth/useAuth'
import PrivateRoute from './PrivateRoute'
import LoginPage from '../views/LoginScreen'
import RecoverScreen from '../views/RecoverScreen'
import AppRouter from './AppRouter'
import ServerErrorScreen from '../views/ServerErrorScreen'

export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/recover">
            <RecoverScreen />
          </Route>
          <Route exact path="/server-error">
            <ServerErrorScreen />
          </Route>
          <PrivateRoute path="/cases">
            <AppRouter />
          </PrivateRoute>
          <Redirect from="/" to="/cases" />
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
