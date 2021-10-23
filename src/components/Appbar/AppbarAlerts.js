import { useContext } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import { makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'

const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: spacing(10),
    paddingRight: spacing(2),
  },
  icon: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
  badge: {
    '& span': {
      backgroundColor: '#F2994A', // orange
      color: 'white',
    },
  },
}))

const AppbarAlerts = () => {
  const { state, dispatch } = useContext(Context)
  const { container, icon, badge } = useStyles(state.modalState)

  // TODO cuando este el menu de usuario sacar esto de aca
  const handleClick = () => {
    dispatch(
      actionsCreator.toggleThemeMode(
        state.modalState.themeMode === 'main' ? 'dark' : 'main'
      )
    )
  }

  return (
    <div className={container}>
      <IconButton aria-label="mails" onClick={handleClick}>
        <SearchIcon className={icon} />
      </IconButton>
      <IconButton aria-label="show 4 new mails">
        <Badge badgeContent={4} className={badge}>
          <NotificationsNoneIcon className={icon} />
        </Badge>
      </IconButton>
    </div>
  )
}

export default AppbarAlerts
