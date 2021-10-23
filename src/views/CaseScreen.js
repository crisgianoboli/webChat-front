/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import useCase from '../hooks/useCase'
import useEnterCase from '../hooks/enterCase'
import CaseList from '../components/CaseList'
import Conversation from '../components/Conversation'
import CaseSidebar from '../components/CaseSidebar/'
import Modal from '../components/Modal'
import { Context } from '../context'
import { actionsCreator } from '../context/modals/actions'
import FileList from '../components/TextEditor/FileList'
//import { conversationRefreshInterval } from '../config'
// import useSendEvent from '../hooks/events/sendEvent'
//import RouteLeavingGuard from '../router/RouteLeavingGuard'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
  },
  grid: {
    height: 'calc(100vh - 82px)',
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
  notification: {},
  conversation: {
    maxWidth: '80%',
    flexBasis: '80%',
  },
  user: {
    backgroundColor: palette.primary.white,
  },
  titleContainer: {
    backgroundColor: '#DAEFF8',
  },
  cancelTypography: {
    opacity: '0.5',
  },
}))

const CaseScreen = () => {
  const {
    state: {
      modalState: { caseModal, onPause },
    },
    dispatch,
  } = useContext(Context)
  const { root, grid, notification, conversation, user } = useStyles()
  const { caseId } = useParams()
  const { data, isLoading } = useCase(caseId)
  const { data: enterCase } = useEnterCase({ caseId, onPause })

  useEffect(() => {
    if (enterCase) {
      const {
        BlockedGuid,
        GroupAccountId,
        GroupAccount,
        UserAssignedId,
        AccountId,
        ClientId,
        UserChannelId,
        AccountTypeId,
        ClientName,
      } = enterCase
      dispatch(
        actionsCreator.toggleCaseState({
          blockedGuid: BlockedGuid,
          groupAccountId: GroupAccountId,
          allowUserToCreateTags: GroupAccount.AllowUserToCreateTags,
          caseId,
          groupAccount: GroupAccount,
          userAssignedId: UserAssignedId,
          accountId: AccountId,
          clientId: ClientId,
          userChannelId: UserChannelId,
          accountTypeId: AccountTypeId,
          clientName: ClientName,
        })
      )
    }
  }, [enterCase])

  //TODO ver envio de estos eventos
  useEffect(() => {
    // sendEvent(GESTIONANDO)
    dispatch(actionsCreator.toggleShowBlockedPause(true))
    window.addEventListener('beforeunload', () => {
      // sendEvent(FIN_GESTIONANDO)
      // sendEvent(FIN_SESION)
    })
  }, [])

  return (
    <>
      {/* <RouteLeavingGuard
        navigate={path => history.push(path)}
        shouldBlockNavigation={() => true}
      /> */}
      <div className={root}>
        <Grid container wrap="nowrap">
          <Grid item xs={3} lg={2} className={`${grid} ${notification}`}>
            <CaseList />
          </Grid>
          {!isLoading && (
            <>
              <Grid item xs={8} lg={9} className={`${grid} ${conversation}`}>
                <Conversation caseData={data} isLoading={isLoading} />
              </Grid>
              <Grid item xs className={`${grid} ${user}`}>
                <CaseSidebar caseData={data} isLoading={isLoading} />
              </Grid>
            </>
          )}
        </Grid>
        <Modal
          open={caseModal}
          toggleModal={actionsCreator.toggleModal}
          title="subir archivo"
        >
          <FileList
            oneFile
            toggleModal={actionsCreator.toggleModal}
            open={caseModal}
          />
        </Modal>
      </div>
    </>
  )
}

export default CaseScreen
