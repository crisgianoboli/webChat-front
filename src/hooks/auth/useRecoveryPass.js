import clientLogin from '../../client/client.login'

export const useRecoveryPass = () => {
  const USERNAME = 'username'
  const recoveryUser = async credential => {
    try {
      return await clientLogin.post('/auth/recovery/password/code', credential)
    } catch (error) {
      //FIXME estos datos no deberian ser hardcodeados, deberian venir del backend
      console.error(error)
      return {
        status: 500,
        error: 'Error en contraseña a recuperar.',
      }
    }
  }
  const recoveryPass = async credential => {
    if (!credential.username) {
      credential.username = localStorage.getItem(USERNAME)
    }
    const objData = {
      username: credential.username,
      newPassword: credential.password,
      code: credential.code,
    }
    try {
      return await clientLogin.post('/auth/recovery/password/', objData)
    } catch (error) {
      return {
        status: 500,
        error: 'Codigo incorrecto',
      }
    }
  }
  return {
    recoveryUser,
    recoveryPass,
    USERNAME,
  }
}
