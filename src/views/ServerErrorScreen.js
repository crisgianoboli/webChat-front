import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Lottie from 'react-lottie'
import { Grid, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ServerErrorAnim from '../assets/ServerErrorAnim'
import BaseButton from '../components/UI/atoms/Buttons/BaseButton'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: '100vh',
    width: '100%',
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: 27,
    fontWeight: 700,
  },

  message: {
    fontFamily: 'Nunito',
    fontSize: 24,
    fontWeight: 300,
  },

  errorCode: {
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: 300,
  },

  retryBtn: {
    color: palette.primary.white,
    backgroundColor: palette.primary.main,
    fontSize: '0.9rem',
    padding: '0.4rem 1.2rem',
    '&:hover': {
      backgroundColor: palette.primary.mainBlueHover,
    },
  },
}))

export default function ServerErrorScreen() {
  const { root, title, message, errorCode, retryBtn } = useStyles()
  const history = useHistory()
  const { push } = history
  const { t } = useTranslation()
  const handleRetryClick = () => {
    push('/')
  }
  return (
    <>
      <Grid container className={root}>
        <Grid item xs={6}>
          <Box
            component="div"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box component="div">
              <Box component="div" mb={2}>
                <Typography component="h2" className={title}>
                  {t('Ups! Esto es inesperado')}
                </Typography>
              </Box>
              <Box component="div" mb={1}>
                <Typography component="p" className={message}>
                  {t('El servidor parece no estar respondiendo')}
                </Typography>
              </Box>
              <Box component="div" mb={7}>
                <Typography component="p" className={errorCode}>
                  {t('Error Code: 500')}
                </Typography>
              </Box>
              <Box component="div" textAlign="center">
                <BaseButton className={retryBtn} onClick={handleRetryClick}>
                  {t('Reintentar')}
                </BaseButton>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="div" height="100%" display="flex" alignItems="center">
            <Lottie
              options={{ animationData: ServerErrorAnim, ...defaultOptions }}
              width={560}
              height={560}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
