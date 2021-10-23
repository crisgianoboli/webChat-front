import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, makeStyles, Typography } from '@material-ui/core'

import KonectaLogo from '../../assets/KonectaLogo'
import { Context } from '../../../src/context'
import KonectaLogoDark from '../../assets/KonectaLogoDark'

const useStyles = makeStyles(({ palette, typography }) => ({
  footer: {
    paddingBottom: 30,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
  typography: {
    fontSize: typography.footer.fontSize,
    fontWeight: typography.footer.fontWeight,
    marginRight: 10,
  },
}))

const Footer = () => {
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)
  const { footer, typography } = useStyles({ themeMode })
  const { t } = useTranslation()
  return (
    <Box className={footer}>
      <Typography className={typography}>{t('by')}</Typography>
      {themeMode === 'main' ? <KonectaLogo /> : <KonectaLogoDark />}
    </Box>
  )
}

export default Footer
