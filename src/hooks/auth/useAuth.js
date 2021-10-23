import { useContext, createContext, useState } from 'react'
//FIXME cambiar ubicacion de las constantes
import { xEpironUser, TOKEN, PROFILE_TOKEN } from '../../utils'
import clientLogin from '../../client/client.login'
import client from '../../client/client'
import { useQuery } from 'react-query'

export const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

const getAppInstance = async () => {
  const { data } = await clientLogin.get('/auth/login/appInstance')
  return data
}

export const useAppInstance = () => {
  return useQuery('appInstance', () => getAppInstance(), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}

export const useProvideAuth = () => {
  const [user, setUser] = useState(null)

  const signin = async credential => {
    try {
      const resp = await clientLogin.post('/auth/login', credential)
      setUser(credential.username)
      localStorage.setItem(xEpironUser, credential.username)
      localStorage.setItem(TOKEN, resp.data.token)
      localStorage.setItem(PROFILE_TOKEN, resp.data.profile_token)
      return resp
    } catch (error) {
      const { status } = error?.response
      const msg =
        status === 401 ? 'Nombre de usuario y/o contraseña incorrecta' : null
      return {
        status,
        msg,
      }
    }
  }

  const signout = async (onPause = false) => {
    try {
      await client.post('/auth/logout', {
        onPause,
      })
    } catch (err) {
      console.error(err)
    }
    localStorage.clear()
    setUser(null)
  }

  return {
    user,
    signin,
    signout,
  }
}
