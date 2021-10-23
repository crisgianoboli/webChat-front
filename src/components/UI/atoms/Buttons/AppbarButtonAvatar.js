import { makeStyles } from '@material-ui/core'
import Avatar from '../Avatar'
import BaseButton from './BaseButton'

const useStyles = makeStyles(({ palette, spacing }) => ({
  button: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))

export default function AppbarButtonAvatar({ handleClickAvatar }) {
  const classes = useStyles()

  return (
    <BaseButton
      aria-label="avatar-button"
      className={classes.button}
      onClick={handleClickAvatar}
    >
      <Avatar size="medium" color="green" displayBadge />
    </BaseButton>
  )
}
