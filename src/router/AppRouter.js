/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, Suspense, useReducer, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Context, globalState, modalReducer } from '../context'
import Appbar from '../components/Appbar'
import BreakScreen from '../views/BreakScreen'
import useUnloadBeacon from '../hooks/auth/useUnloadBeacon'
import { PROFILE_TOKEN, TOKEN } from '../utils'
import { clientExitCase } from '../utils'

const Inbox = lazy(() => import('../views/InboxScreen'))
const CaseScreen = lazy(() => import('../views/CaseScreen'))

const AppRouter = () => {
  const [state, dispatch] = useReducer(modalReducer, globalState)
  const {
    modalState: {
      onPause,
      caseState: { blockedGuid, caseId },
    },
  } = state
  //const { signout } = useAuth()
  useUnloadBeacon({
    url: '/api/auth/logout',
    payload: () => {
      return {
        body: JSON.stringify({ onPause }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
          'Content-Type': 'application/json',
          Profile: localStorage.getItem(PROFILE_TOKEN),
        },
        method: 'POST',
        keepalive: true,
      }
    },
  })

  const prevent = e => {
    e.preventDefault()
    e.returnValue = ''
  }

  const handleBeforeUnload = async e => {
    if (blockedGuid) {
      await clientExitCase(caseId, {
        onPause,
        blockedGuid,
      })
    }
    prevent(e)
  }
  // const handleUnload = e => {
  //   signout()
  // }

  useEffect(() => {
    window.addEventListener('popstate', e => handleBeforeUnload(e))
    window.addEventListener('beforeunload', e => handleBeforeUnload(e))
    return () => {
      window.removeEventListener('popstate', e => handleBeforeUnload(e))
      window.removeEventListener('beforeunload', e => handleBeforeUnload(e))
    }
  })

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/break/:EventTypeId" component={BreakScreen} />
          <Suspense fallback={<></>}>
            <Appbar />
            <Switch>
              <Route exact path="/cases" component={Inbox} />
              <Route
                exact
                path="/case/:caseId/conversations/:conversationId"
                component={CaseScreen}
              />
              <Route exact path="/case/:caseId" component={CaseScreen} />
              <Redirect to="/cases" />
            </Switch>
          </Suspense>
        </Switch>
      </Context.Provider>
    </Router>
  )
}

export default AppRouter
