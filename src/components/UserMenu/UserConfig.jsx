import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, makeStyles, Typography } from '@material-ui/core'

import Divider from '../UI/atoms/Divider'
import { actionsCreator } from '../../context/modals/actions'
import { Context } from '../../../src/context'

const useStyles = makeStyles(({ palette, typography }) => ({
  userConfig: {
    padding: '0 30px',
    height: '100%',
    maxHeight: '8.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
  },
  typography: {
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightRegular,
    fontSize: typography.button.fontSize,
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
  button: {
    cursor: 'pointer',
  },
}))

const UserConfig = ({ handleClose }) => {
  const {
    state: {
      modalState: { configModal, themeMode },
    },
    dispatch,
  } = useContext(Context)
  const { userConfig, typography, button } = useStyles({
    configModal,
    themeMode,
  })
  const { t } = useTranslation()
  // TODO hacer los modales y test

  const handleClick = () => {
    handleClose()
    dispatch(actionsCreator.toggleConfigModal(configModal))
  }

  return (
    <>
      <Box className={userConfig}>
        <Typography className={typography} data-testid="atajosTeclado">
          {t('AtajosTeclado')}
        </Typography>
        <Box type="button" onClick={handleClick} className={button}>
          <Typography className={typography} data-testid="configuracion">
            {t('Configuracion')}
          </Typography>
        </Box>
        <Typography className={typography} data-testid="ayuda">
          {t('Ayuda')}
        </Typography>
      </Box>
      <Divider />
    </>
  )
}

export default UserConfig
