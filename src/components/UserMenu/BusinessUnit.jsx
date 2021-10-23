import { useContext } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { func, string } from 'prop-types'

import { Box, makeStyles, Typography } from '@material-ui/core'

import { Context } from '../../../src/context'

const useStyles = makeStyles(({ palette, typography }) => ({
  businessUnit: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    padding: '0 30px',
    height: '100%',
    maxHeight: '5rem',
    display: 'flex',
  },
  button: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    border: ({ themeMode }) => `1px solid ${palette.textPrimary[themeMode]}`,
    borderRadius: 15,
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    padding: '7px 10px',
  },
  typography: {
    fontSize: typography.button.fontSize,
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontFamily: typography.fontFamily,
  },
  name: {
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    fontSize: typography.footer.fontSize,
  },
  icon: {
    height: '13px',
    width: '13px',
    fill: ({ themeMode }) => palette.TextButtonPanel[themeMode],
  },
}))

const BusinessUnit = ({ account, onClick }) => {
  const { state } = useContext(Context)
  const { businessUnit, typography, name } = useStyles(state.modalState)
  const { t } = useTranslation()

  return (
    <Box className={businessUnit}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" flexDirection="column">
          <Typography className={typography}>{t('UnidadNegocio')}</Typography>
          <Typography className={clsx(typography, name)}>{account}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

BusinessUnit.propTypes = {
  account: string.isRequired,
  onClick: func.isRequired,
}

BusinessUnit.defaultProps = {
  account: 'Epiron Producción 3.0',
}

export default BusinessUnit
