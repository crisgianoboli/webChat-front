import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Modal } from '@material-ui/core'
import { useAuth, useAppInstance } from '../hooks/auth/useAuth'
import AuthFlow from '../components/AuthFlow'
import { loginFormData } from './constant'
import Preload from './Preload'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  login: {
    display: 'flex',
    flexDirection: 'column',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
  },
}))

function LoginPage() {
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()

  const { isLoading, isSuccess, data, error: aError } = useAppInstance()

  if (!isLoading && isSuccess) {
    loginFormData.loadFieldOptions(data)
  }
  const classes = useStyles()
  const [error, setError] = useState(null)
  const [isLogin, setIsLogin] = useState(false)
  let { from } = location.state || { from: { pathname: '/' } }

  const login = async data => {
    setError(null)
    const { push, replace } = history
    const res = await auth.signin(data)
    if (res.status === 200) {
      replace(from)
    } else {
      // TODO manage errors
      const { status, msg } = res
      if (status === 401) return setError(msg)
      push('/server-error')
    }
  }

  return (
    <div className={classes.login}>
      <AuthFlow
        onClickForm={login}
        error={error}
        formData={loginFormData}
        p
        isLogin={isLogin}
      />
      <Modal
        className={classes.modal}
        open={isLoading}
        disableAutoFocus
        disableEnforceFocus
      >
        <Preload />
      </Modal>
      {aError && <Redirect to="/server-error" />}
    </div>
  )
}

export default LoginPage
