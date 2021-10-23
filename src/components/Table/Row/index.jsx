import { useContext, useEffect } from 'react'
import { number, string } from 'prop-types'
import { useHistory } from 'react-router-dom'

import MiuTableRow from '@material-ui/core/TableRow'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import { selectIcon } from '../../../utils'
import { Context } from '../../../context'
import { actionsCreator } from '../../../context/tableCells/actions'
import CaseCell from './Cells/CaseCell'
import UserCell from './Cells/UserCell'
import WaitingCell from './Cells/WaitingCell'
import NotificationsCell from './Cells/NotificationsCell'
import LastCell from './Cells/LastCell'
import ChannelCell from './Cells/ChannelCell'
import ModifiedCell from './Cells/ModifiedCell'
import EntranceCell from './Cells/EntranceCell'
import AttentionQueueCell from './Cells/AttentionQueueCell'
import StateCell from './Cells/StateCell'

const TableRow = withStyles(({ palette }) => ({
  root: {
    '& td': {
      minWidth: '84px',
    },
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.background[themeMode],
    },
  },
  selected: {},
}))(MiuTableRow)

const useStyles = makeStyles(({ palette }) => ({
  row: {
    borderBottom: `1px solid ${palette.primary.dark}`,
    color: palette.primary.dark,
    fontSize: 13,
    padding: '8px',
    cursor: 'pointer',
  },
}))

function Row({
  CaseId,
  ClientFullName,
  Followers,
  CaseCreated,
  CaseModifiedDate,
  TimeLastComentClient,
  Notifications,
  Cliente,
  StateName,
  UCUserName,
  CaseTypeName,
  AttentionQueueName,
  ProfileImage,
  ChannelIcon,
  AlertColorsCode,
}) {
  //const ChannelIcon = selectIcon(CaseOrigin)
  const LastIcon = selectIcon(Cliente)
  const { state, dispatch } = useContext(Context)
  const classes = useStyles(state.modalState)
  const {
    cellsState,
    modalState: { themeMode },
  } = state
  const history = useHistory()

  const CaseTypeIcon = selectIcon(CaseTypeName)

  useEffect(() => {
    dispatch(actionsCreator.getCells())
  }, [dispatch])

  const handleCaseClick = () => {
    history.push({
      pathname: `/case/${CaseId}`,
    })
  }

  return (
    <TableRow
      tabIndex={-1}
      className={classes.row}
      themeMode={themeMode}
      onClick={handleCaseClick}
    >
      <CaseCell
        headCells={cellsState.headCells}
        keyCell="CaseId"
        CaseId={CaseId}
        CaseTypeName={CaseTypeName}
        CaseTypeIcon={CaseTypeIcon}
        AlertColorsCode={AlertColorsCode}
      />
      <UserCell
        headCells={cellsState.headCells}
        keyCell="ClientFullName"
        ProfileImage={ProfileImage}
        ClientFullName={ClientFullName}
        UCUserName={UCUserName}
      />
      <WaitingCell
        headCells={cellsState.headCells}
        keyCell="CaseModifiedDate"
        CaseModifiedDate={CaseModifiedDate}
      />
      <NotificationsCell
        headCells={cellsState.headCells}
        keyCell="Notifications"
        AlertColorsCode={AlertColorsCode}
        Notifications={Notifications}
      />
      <LastCell
        headCells={cellsState.headCells}
        keyCell="Cliente"
        AlertColorsCode={AlertColorsCode}
        LastIcon={LastIcon}
      />
      <ChannelCell
        headCells={cellsState.headCells}
        keyCell="Followers"
        ChannelIcon={ChannelIcon}
        Followers={Followers}
      />
      <ModifiedCell
        headCells={cellsState.headCells}
        keyCell="TimeLastComentClient"
        TimeLastComentClient={TimeLastComentClient}
        AlertColorsCode={AlertColorsCode}
      />
      <EntranceCell
        headCells={cellsState.headCells}
        keyCell="CaseCreated"
        CaseCreated={CaseCreated}
      />
      <AttentionQueueCell
        headCells={cellsState.headCells}
        keyCell="AttentionQueueName"
        AttentionQueueName={AttentionQueueName}
      />
      <StateCell
        headCells={cellsState.headCells}
        keyCell="AttentionQueueName"
        StateName={StateName}
      />
    </TableRow>
  )
}

Row.propTypes = {
  CaseId: number.isRequired,
  ClientFullName: string.isRequired,
  CaseOrigin: string.isRequired,
  Followers: number,
  CaseCreated: string.isRequired,
  CaseModifiedDate: string.isRequired,
  TimeLastComentClient: string,
  Notifications: number,
  Cliente: string,
  StateName: string,
  UCUserName: string.isRequired,
  CaseTypeName: string,
  AttentionQueueName: string,
  ProfileImage: string,
}

Row.defaultProps = {
  Followers: 0,
  Notifications: 0,
  Cliente: '',
  StateName: '',
  CaseTypeName: 'Entrante',
  AttentionQueueName: '',
  ProfileImage: '',
}

export default Row
