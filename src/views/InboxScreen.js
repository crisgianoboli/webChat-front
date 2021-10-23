import { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'
import withDrawer from '../components/Appbar/SidebarDrawer'
import SidebarInbox from '../components/Appbar/SidebarInbox'
import ConfigLogo from '../assets/configLogo'
import useLocationParams from '../hooks/useLocationParams'
import { Context } from '../context'
import { actionsCreator } from '../context/modals/actions'
import { useFilteredCases } from '../hooks/useCases'

const useStyles = makeStyles(({ palette, spacing }) => ({
  inbox: {
    display: 'flex',
  },
  container: {
    overflow: 'auto',
    alignItems: 'center',
    backgroundColor: props => palette.background[props.themeMode],
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 30px',
    width: '100%',
    height: 'calc(100vh - 82px)',
  },
  futureTable: {
    padding: spacing(2),
  },
  '@global': {
    '*::-webkit-scrollbar': {
      height: '10px',
      width: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: palette.secondary.light,
      borderRadius: '10px',
      boxShadow: 'inset 0 0 6px rgba(63,150,180,0.2)',
    },
    '*:hover::-webkit-scrollbar-thumb': {
      boxShadow: 'inset 0 0 6px rgba(63,150,180,0.7)',
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(197,223,223,0.7)',
      borderRadius: '10px',
    },
  },
}))

const SidebarInboxDrawer = withDrawer(SidebarInbox)
const InboxScreen = () => {
  const { state, dispatch } = useContext(Context)
  const { t } = useTranslation()
  const { inbox, container } = useStyles(state.modalState)
  const { filter } = useLocationParams()

  //TODO si a la data la estamos pasando directamente al componente table
  const { isLoading, data } = useFilteredCases(filter)
  const { cellsState } = state

  useEffect(() => {
    dispatch(actionsCreator.getCells())
    dispatch(actionsCreator.toggleShowBlockedPause(false))
  }, [dispatch])

  const casesLength = data ? `(${data.length})` : ''

  return (
    <div className={inbox}>
      <SidebarInboxDrawer />
      <div className={container}>
        <Table
          isLoading={isLoading}
          headCells={cellsState.headCells}
          rows={data}
          title={`${t(filter || 'opened')} ${casesLength}`}
          buttonTitle={t('ConfigurarTabla')}
          buttonLogo={ConfigLogo}
        />
      </div>
    </div>
  )
}

export default InboxScreen
