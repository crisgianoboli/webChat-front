import { useTranslation } from 'react-i18next'

import {
  Box,
  makeStyles,
  Typography,
  CircularProgress,
} from '@material-ui/core'

import EpironLogo from '../assets/EpironLogo'

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    width: '14rem',
  },
  text: {
    fontWeight: 600,
    color: palette.primary.bostonBlue,
  },
}))

const Preload = () => {
  const { logo, text } = useStyles()
  const { t } = useTranslation()

  return (
    <Box
      height="22.5rem"
      width="27.5rem"
      bgcolor="primary.white"
      borderRadius="20px"
      padding="45px"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
      >
        <EpironLogo variant={logo} />
        <Box>
          <CircularProgress size={70} />
        </Box>
        <Typography className={text}>{t('Iniciando')}</Typography>
      </Box>
    </Box>
  )
}

export default Preload
