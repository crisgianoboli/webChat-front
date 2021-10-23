import { format } from '../../constants'
import InboxCell from './InboxCell'
import Selectable from './Selectable'

function EntranceCell({ CaseCreated }) {
  return (
    <InboxCell align="left">{format(CaseCreated.replace(/\s/g, ''))}</InboxCell>
  )
}

export default Selectable(EntranceCell)
