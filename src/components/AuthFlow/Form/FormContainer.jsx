import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { array, bool, func, shape, string } from 'prop-types'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { DynamicForm } from '../../DynamicForm/index'
import ErrorList from './ErrorList'
import FormButton from './../../UI/atoms/Buttons/FormButton'
import SubmitLabel from './SubmitLabel'

const useStyles = makeStyles(({ palette }) => ({
  linkPassword: {
    fontSize: '12px',
    padding: '0.5rem 0',
    color: palette.primary.emperor,
    fontFamily: 'Nunito',
    textDecoration: `underline ${palette.primary.emperor}`,
  },
  error: {
    color: palette.primary.pomegranate,
    fontSize: 12,
  },
  btnLogin: {
    borderRadius: '36px',
    marginTop: '1rem',
    color: palette.primary.white,
    padding: '0.8rem',
    height: '40px',
    '&:hover': {
      color: palette.primary.dark,
    },
  },
  btnActive: {
    background: palette.primary.bostonBlue,
  },
  btnDisabled: {
    background: palette.primary.alto,
  },
  formContainer: {
    height: '75%',
    width: '100%',
  },
  formStyle: {
    height: '100%',
  },
  btnNext: {
    marginTop: '25px',
  },
}))

const FormContainer = ({
  onClickForm,
  prevStep,
  error,
  fields,
  direction,
  link,
  buttonLabel,
  step,
  errorList,
  validationSchema,
  changeState,
  alert,
  isLogin,
}) => {
  const classes = useStyles()

  const [icon, setIcon] = useState({
    minNumber: false,
    capitalLetter: false,
    number: false,
    character: false,
  })
  const [disabled, setDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (error) setIsLoading(false)
  }, [error])

  const validate = e => {
    if (e.password && changeState) {
      setIcon(changeState({ state: icon, value: e.password }))
    }
  }

  const getInitialValues = inputs => {
    const initialValues = {}
    inputs.forEach(field => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.value
      }
    })
    return initialValues
  }

  const formik = useFormik({
    initialValues: getInitialValues(fields),
    validate,
    validationSchema,
    onSubmit: values => {
      setIsLoading(true)
      onClickForm(values)
    },
  })

  const handleChange = e => {
    if (e.target.name === 'authType' && e.target.value === 'OWN') {
      setDisabled(true)
      formik.setFieldValue('domain', '')
    }
    if (e.target.name === 'authType' && e.target.value === 'WINDOWS') {
      setDisabled(false)
    }
    formik.handleChange(e)
  }
  //TODO proptypes para errorlist component
  return (
    <Box width="75%" className={classes.formContainer}>
      <form className={classes.formStyle} onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection={direction}
          justifyContent="space-between"
          alignItems="flex-start"
          height="100%"
          width="100%"
        >
          {alert && <Alert severity={alert.severity}>{alert.message}</Alert>}
          {fields.map(field => (
            <DynamicForm
              field={field}
              key={field.id}
              handleChange={handleChange}
              value={formik.values[field.name]}
              name={field.name}
              error={formik.errors[field.name]}
              disabled={field.id === 'domain' && disabled}
            />
          ))}
          {link && (
            <Box display="flex" justifyContent="space-between" width="100%">
              <Link to={link.to} className={classes.linkPassword}>
                {link.label}
              </Link>
            </Box>
          )}
          {error && <Box className={classes.error}>{error}</Box>}
          <ErrorList errorList={errorList} icon={icon} />
          {
            //TODO Atomic se podría usar el componente
          }
          <FormButton
            clsx={clsx}
            // buttonLabel={buttonLabel}
            dirty={formik.dirty}
            isValid={formik.isValid && !isLogin}
          >
            <SubmitLabel isLoading={isLoading} label={buttonLabel} />
          </FormButton>
          {step && (
            <FormButton
              type={'button'}
              clsx={clsx}
              buttonLabel={'Volver'}
              onClick={prevStep}
              isValid
              dirty
            />
          )}
        </Box>
      </form>
    </Box>
  )
}

FormContainer.propTypes = {
  onClickForm: func,
  prevStep: func,
  error: string,
  fields: array,
  direction: string,
  link: shape({}),
  height: string,
  buttonLabel: string,
  nextStep: string,
  errorList: array,
  verifiedCode: string,
  validationSchema: shape({}),
  changeState: func,
  isLogin: bool,
}

export default FormContainer
