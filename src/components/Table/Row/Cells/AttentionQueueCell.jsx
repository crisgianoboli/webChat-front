import { useContext } from 'react'

import { makeStyles } from '@material-ui/core'

import InboxCell from './InboxCell'
import Selectable from './Selectable'
import ColaLogo from '../../../../assets/ColaLogo'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  cola: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '12px',
    lineHeight: 'normal',
    textAlign: 'initial',
  },
  circle: {
    alignItems: 'center',
    border: ({ themeMode }) => `1px solid ${palette.panelSecondary[themeMode]}`,
    borderRadius: '50%',
    display: 'flex',
    height: '30px',
    justifyContent: 'center',
    margin: '0 5px',
    minHeight: '30px',
    minWidth: '30px',
    width: '30px',
  },
}))

function AttentionQueueCell({ AttentionQueueName }) {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)

  return (
    <>
      <InboxCell align="left">
        <span className={classes.cola}>
          <span className={classes.circle}>
            <ColaLogo />
          </span>
          <span>{AttentionQueueName}</span>
        </span>
      </InboxCell>
    </>
  )
}

export default Selectable(AttentionQueueCell)
