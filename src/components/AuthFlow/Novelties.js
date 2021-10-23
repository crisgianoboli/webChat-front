import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import { Box, alpha, Typography } from '@material-ui/core'

import DotsStepper from '../DotsStepper'

const useStyles = makeStyles(({ palette }) => ({
  bgNovelties: {
    background: alpha(palette.primary.codGray, 0.4),
    color: palette.primary.white,
    borderRadius: '0 25px 0 10px',
    padding: '18px 0',
    minHeight: '9rem',
  },
  titleNovelties: {
    color: palette.primary.white,
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '1.125rem',
    marginBottom: '18px',
    marginLeft: '24px',
    lineHeight: '18px',
  },
}))

const Novelties = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box
      alignSelf="flex-end"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Typography variant="h5" className={classes.titleNovelties}>
        {t('Novedades')}
      </Typography>
      <Box className={classes.bgNovelties}>
        <DotsStepper />
      </Box>
    </Box>
  )
}

export default Novelties
