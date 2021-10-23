import { useContext } from 'react'

import { makeStyles } from '@material-ui/core'

import { format } from '../../constants'
import InboxCell from './InboxCell'
import Selectable from './Selectable'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  timer: {
    backgroundColor: ({ themeMode }) => palette.boxPanelTable[themeMode],
    borderRadius: '8px',
    padding: '5px 8px',
    whiteSpace: 'nowrap',
  },
}))

function WaitingCell({ CaseModifiedDate }) {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)

  return (
    <>
      <InboxCell align="left" noFlexRow>
        <span className={classes.timer}>
          {CaseModifiedDate && format(CaseModifiedDate.replace(/\s/g, ''))}
        </span>
      </InboxCell>
    </>
  )
}

export default Selectable(WaitingCell)
