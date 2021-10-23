import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, makeStyles, Typography } from '@material-ui/core'

import Divider from '../UI/atoms/Divider'
import { string } from 'prop-types'
import { Context } from '../../../src/context'
import { version } from '../../../package.json'
const useStyles = makeStyles(({ palette, typography }) => ({
  versionStyle: {
    padding: '0 30px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    maxHeight: '5rem',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
  },
  typography: {
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightRegular,
    fontSize: typography.button.fontSize,
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    '& span': {
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      margin: '0 10px',
    },
  },
}))

const Version = () => {
  const { state } = useContext(Context)
  const { versionStyle, typography } = useStyles(state.modalState)
  const { t } = useTranslation()
  return (
    <>
      <Box className={versionStyle}>
        <Typography className={typography}>
          {`${t('SimpleVersion')}:`}
          <Box component="span" data-testid="version">
            {version}
          </Box>
        </Typography>
      </Box>
      <Divider />
    </>
  )
}

Version.propTypes = {
  account: string.isRequired,
}

Version.defaultProps = {
  account: '',
}

export default Version
