import { makeStyles } from '@material-ui/core'
import AvatarBase64 from '../../../Channel/AvatarBase64'
import InboxCell from './InboxCell'
import Rectangle from './Rectangle'
import Selectable from './Selectable'

const useStyles = makeStyles(theme => ({
  mLeft: {
    marginLeft: '5px',
  },
}))

function ChannelCell({ ChannelIcon, Followers }) {
  const classes = useStyles()
  return (
    <>
      <InboxCell align="left">
        <Rectangle>
          <AvatarBase64 size="small" ImageBase64={ChannelIcon} />
          {Followers === 0 ? null : (
            <span className={classes.mLeft}>{Followers}</span>
          )}
        </Rectangle>
      </InboxCell>
    </>
  )
}

export default Selectable(ChannelCell)
