import Rectangle from './Rectangle'
import InboxCell from './InboxCell'
import Selectable from './Selectable'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.main,
    marginRight: '7px',
  },
  iconColor: {
    fill: props => props.AlertColorsCode,
  },
}))

function LastCell({ LastIcon, AlertColorsCode }) {
  const classes = useStyles({ AlertColorsCode })

  return (
    <InboxCell noFlexRow align="left">
      <Rectangle>
        <LastIcon
          className={classes.icon}
          color={classes.iconColor}
          fontSize="small"
        />
      </Rectangle>
    </InboxCell>
  )
}

export default Selectable(LastCell)
