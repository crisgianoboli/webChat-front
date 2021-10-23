import { makeStyles } from '@material-ui/core'
import InboxCell from './InboxCell'
import CommentLogo from '../../../../assets/Comment'
import Selectable from './Selectable'
import Rectangle from './Rectangle'

const useStyles = makeStyles(theme => ({
  rectangle: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '8px',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '5px 8px',
    whiteSpace: 'nowrap',
  },
  rectangleColor: {
    backgroundColor: props => theme.palette.primary[props.AlertColorsCode],
  },
  notification: {
    marginRight: '5px',
  },
  iconGeneral: {
    fill: theme.palette.primary.main,
    height: '20px',
    width: '20px',
  },
}))

function NotificationsCell({ Notifications, iconGeneral, AlertColorsCode }) {
  const classes = useStyles({ AlertColorsCode })
  return (
    <>
      <InboxCell align="left" noFlexRow>
        {Notifications ? (
          <Rectangle backgroundByAlert AlertColorsCode={AlertColorsCode}>
            <CommentLogo variant={iconGeneral} />
            <span className={classes.notification}>{Notifications}</span>
          </Rectangle>
        ) : null}
      </InboxCell>
    </>
  )
}

export default Selectable(NotificationsCell)
