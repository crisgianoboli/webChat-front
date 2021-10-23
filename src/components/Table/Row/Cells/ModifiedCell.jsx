import { format } from '../../constants'
import InboxCell from './InboxCell'
import Rectangle from './Rectangle'
import Selectable from './Selectable'

function ModifiedCell({ AlertColorsCode, TimeLastComentClient }) {
  return (
    <InboxCell align="left">
      <Rectangle backgroundByAlert AlertColorsCode={AlertColorsCode}>
        {TimeLastComentClient &&
          format(TimeLastComentClient.replace(/\s/g, ''))}
      </Rectangle>
    </InboxCell>
  )
}

export default Selectable(ModifiedCell)
