import { useTranslation } from 'react-i18next'
import { array, bool, func, object, shape, string } from 'prop-types'

import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'

import FormContainer from './Form/FormContainer'
import ImgLogin from './ImageContainer'
import Novelties from './Novelties'
import { version } from '../../../package.json'

const useStyles = makeStyles(({ palette }) => ({
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: palette.primary.blueCharcoal,
    flexDirection: 'column',
  },
  login: {
    borderRadius: '9px',
    border: `1px solid ${palette.primary.white}`,
    width: '80vw',
    height: '80vh',
    color: palette.primary.dark,
    background: palette.primary.white,
  },
  imgBox: {
    height: '100%',
    background: `radial-gradient(circle, ${palette.primary.white} 0%, ${palette.primary.main} 80%)`,
    borderRadius: '8.5px 0 0 8.5px',
  },
  title: {
    fontWeight: 'bold',
  },
  version: {
    fontSize: '0.7rem',
    lineHeight: '11px',
    color: palette.primary.gray,
    display: 'flex',
    alignSelf: 'flex-end',
  },
  subtitle: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 400,
    width: '100%',
    height: 'fit-content',
  },
  flowContainer: {
    padding: '25px 80px 10px',
  },
  step: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: 13,
    color: palette.primary.corduroy,
    maxWidth: '38px',
  },
}))

const AuthFlow = ({
  onClickForm,
  error,
  formData,
  alert,
  isLogin,
  prevStep,
  next,
}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const {
    title,
    subtitle,
    fields,
    direction,
    link,
    buttonLabel,
    step,
    errorList,
    validationSchema,
    changeState,
  } = formData
  return (
    <Box className={classes.loginContainer}>
      {isLogin && (
        <Box position="absolute" top={0}>
          <Alert severity="error">{isLogin}</Alert>
        </Box>
      )}
      <Grid container direction="row" className={classes.login}>
        <Grid
          item
          xs={7}
          className={classes.imgBox}
          container
          justifyContent="center"
          alignItems="center"
        >
          <ImgLogin />
          <Novelties />
        </Grid>
        <Grid item xs={5} container className={classes.flowContainer}>
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Typography variant="h4" className={classes.title}>
              {t(title)}
            </Typography>
            {step && (
              <Typography
                className={classes.step}
              >{`Paso ${step} de 3`}</Typography>
            )}
          </Box>
          {subtitle && (
            <Typography variant="h5" className={classes.subtitle}>
              {t(subtitle)}
            </Typography>
          )}
          <FormContainer
            onClickForm={onClickForm}
            step={step}
            error={error}
            fields={fields}
            link={link}
            direction={direction}
            buttonLabel={buttonLabel}
            prevStep={prevStep}
            errorList={errorList}
            validationSchema={validationSchema}
            changeState={changeState}
            alert={alert}
            isLogin={isLogin}
          />
          <Box className={classes.version}>{`${t('Version')} ${version}`}</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

AuthFlow.propTypes = {
  onClickForm: func,
  prevStep: func,
  next: func,
  error: string,
  alert: string,
  isLogin: bool,
  formData: shape({
    title: string,
    subtitle: string,
    fields: array,
    version: string,
    direction: string,
    link: object,
    buttonLabel: string,
    nextStep: string,
    step: string,
    errorList: array,
    validationSchema: object,
    changeState: func,
  }),
}

export default AuthFlow
