import { makeStyles } from '@material-ui/core'
import InboxCell from './InboxCell'
import Selectable from './Selectable'
import AvatarBase64 from '../../../Channel/AvatarBase64'

const useStyles = makeStyles(({ palette }) => ({
  namesContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'nowrap',
  },
  userName: {
    color: palette.primary.main,
    fontSize: '12px',
  },
}))

function UserCell({ ProfileImage, ClientFullName, UCUserName }) {
  const classes = useStyles()

  return (
    <>
      <InboxCell align="left">
        <AvatarBase64 size="medium" ImageBase64={ProfileImage} />
        <div className={classes.namesContainer}>
          {ClientFullName && <span>{ClientFullName}</span>}
          <span className={classes.userName}>{UCUserName}</span>
        </div>
      </InboxCell>
    </>
  )
}

export default Selectable(UserCell)
