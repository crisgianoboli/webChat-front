/* eslint-disable sonarjs/no-collapsible-if */
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import AuthFlow from '../components/AuthFlow'
import { recoverForm1, recoverForm2, recoverForm3 } from './constant'
import { useRecoveryPass } from '../hooks/auth/useRecoveryPass'

import { Box } from '@material-ui/core'

const stepsForm = [recoverForm1, recoverForm2, recoverForm3]

const RecoverScreen = () => {
  const [step, setStep] = useState(0)
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(null)
  const { recoveryPass, recoveryUser, USERNAME } = useRecoveryPass()
  const history = useHistory()

  const prevStep = () =>
    step ? setStep(prevState => prevState - 1) : history.push('/login')

  const setNextStep = prevState => prevState + 1

  const alertMessage = (message, severity) => ({
    message,
    severity,
  })

  const nextStep = async data => {
    if (step === 0 && data.username) {
      const resp = await recoveryUser(data)
      if (resp.status === 200) {
        localStorage.setItem(USERNAME, data.username)
        setStep(setNextStep)
        return setError(null)
      } else {
        return setError('Usuario y/o email incorrecto')
      }
    }
    if (step === 1) {
      setStep(setNextStep)
    }
    if (step === 2) {
      const resp = await recoveryPass(data)
      if (resp.status === 200) {
        setAlert(alertMessage(resp.data.message, 'success'))
        setTimeout(() => {
          setAlert(null)
          history.push({
            pathname: `/`,
          })
        }, 4000)
      } else {
        setAlert(alertMessage('El código es incorrecto', 'error'))
      }
    }
  }
  return (
    <Box display="flex" flexDirection="column">
      <AuthFlow
        onClickForm={nextStep}
        prevStep={prevStep}
        formData={stepsForm[step]}
        height={stepsForm[step].height}
        error={error}
        alert={alert}
      />
    </Box>
  )
}

export default RecoverScreen
