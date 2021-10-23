import { ButtonGroup, makeStyles } from '@material-ui/core'
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined'
import BaseButton from './BaseButton'

const useStyles = makeStyles(({ palette, spacing }) => ({
  group: {
    backgroundColor: palette.secondary.light,
    height: '42px',
    justifyContent: 'space-between',
    marginRight: spacing(2),
    '& .MuiButton-outlined': {
      border: 'none',
    },
  },
  menuButton: {
    padding: '12px',
    width: '116px',
  },
  playButton: {
    width: '44px',
  },
}))

//TODO Atomic - refactor - no creo que deba ser un átomo, el componente es muy grande.
export default function AppbarButtonTimer({ handleClick, timer, anchorEl }) {
  const classes = useStyles()

  return (
    <ButtonGroup className={classes.group}>
      <BaseButton
        aria-label="timer-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<PhoneInTalkOutlinedIcon />}
        className={classes.menuButton}
      >
        {timer}
      </BaseButton>
      <BaseButton className={classes.playButton}>
        {anchorEl ? (
          <PlayCircleFilledWhiteOutlinedIcon data-testid="play-circle-icon" />
        ) : (
          <PauseCircleOutlineIcon data-testid="pause-circle-icon" />
        )}
      </BaseButton>
    </ButtonGroup>
  )
}
