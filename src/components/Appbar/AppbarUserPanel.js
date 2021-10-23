import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@material-ui/core/Button'
import { makeStyles, Typography, Box } from '@material-ui/core'

import Avatar from '../UI/atoms/Avatar'
import useAuxiliaries from '../../hooks/useAuxiliaries'
import Timer from '../Timer'
import { Context } from '../../context'
import EventsDropdown from '../EventsDropdown'

const useStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },
  dropdown: {
    border: ({ pause }) =>
      pause ? `1px solid ${palette.primary.roman}` : 'none',
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.panelHover[themeMode],
    },
  },
  button: {
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.panelHover[themeMode],
    },
  },
}))

const AppbarUserPanel = ({ handleClickAvatar }) => {
  const { data } = useAuxiliaries()
  const { t } = useTranslation()
  const {
    state: { modalState },
  } = useContext(Context)
  const { pause, showBlockedPause, themeMode } = modalState

  const { dropdown, container, button } = useStyles({
    pause: Boolean(pause),
    themeMode,
  })

  return (
    <div className={container}>
      <EventsDropdown
        className={dropdown}
        items={data}
        show={showBlockedPause}
        pause={pause}
      >
        {pause ? (
          <Box display="flex" flexDirection="column" alignItems="end">
            <Typography variant="body2">{pause}</Typography>
            <Timer isRunning={Boolean(pause)} />
          </Box>
        ) : (
          t('ActivarPausa')
        )}
      </EventsDropdown>
      <Button
        aria-label="avatar-button"
        className={button}
        onClick={handleClickAvatar}
      >
        <Avatar size="medium" color="green" displayBadge />
      </Button>
    </div>
  )
}

export default AppbarUserPanel
