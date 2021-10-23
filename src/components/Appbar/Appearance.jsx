import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, makeStyles, Typography } from '@material-ui/core'

import { themeMode } from './constants'
import FormButton from '../UI/atoms/Buttons/FormButton'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'

const useStyles = makeStyles(({ palette }) => ({
  title: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: '1.0625rem',
    color: ({ themeMode }) => palette.textSecondary[themeMode],
  },
  text: {
    color: ({ themeMode }) => palette.textInvert[themeMode],
  },
}))

const Appearance = () => {
  const { t } = useTranslation()
  const {
    dispatch,
    state: { modalState },
  } = useContext(Context)
  const [theme, setTheme] = useState(modalState.themeMode)
  const { title, text } = useStyles({ themeMode: modalState.themeMode })

  const handleClick = () => {
    dispatch(actionsCreator.toggleConfigModal(true))
    dispatch(actionsCreator.toggleThemeMode(theme))
  }

  return (
    <Box display="flex" flexDirection="column">
      <Typography className={title}>{t('Temas')}</Typography>
      <Box display="flex" margin="35px 0 75px">
        {themeMode.map(({ label, Icon, value }) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            onClick={() => setTheme(value)}
          >
            <Box margin="0 15px">
              <Icon isSelect={value === theme ? true : false} />
            </Box>
            <Typography className={text}>{label}</Typography>
          </Box>
        ))}
      </Box>
      <FormButton
        type="button"
        buttonLabel="Aplicar tema"
        onClick={handleClick}
        isValid
        dirty
        width="190px"
      />
    </Box>
  )
}

export default Appearance
