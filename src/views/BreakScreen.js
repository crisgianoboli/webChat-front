import React from 'react'
import { useTranslation } from 'react-i18next'
import Lottie from 'react-lottie'
import { useParams } from 'react-router-dom'

import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Chronometer from '../components/Chronometer'
import cupAnimation from '../assets/cupAnimation'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const useStyles = makeStyles(({ palette }) => ({
  container: {
    height: '100vh',
    color: palette.primary.white,
    background: `radial-gradient(circle, ${palette.primary.main} 0%, ${palette.primary.dark} 80%)`,
  },
  grid: {
    width: '70%',
    height: '16rem',
  },
  icon: {
    color: palette.primary.white,
    fontSize: 60,
  },
  border: {
    borderRight: `1px solid ${palette.primary.white}`,
    height: '100%',
  },
  titlePause: {
    fontSize: '3rem',
  },
}))

const BreakScreen = () => {
  const { EventTypeId } = useParams()
  const styles = useStyles()
  const { t } = useTranslation()
  return (
    <Box
      className={styles.container}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container className={styles.grid}>
        <Grid item xs={4} className={styles.border}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            flexDirection="column"
          >
            <Lottie
              options={{ animationData: cupAnimation, ...defaultOptions }}
            />
            <Typography className={styles.titlePause}>{t('Break')}</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Chronometer EventTypeId={EventTypeId} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default BreakScreen
