import { contextFactory } from '../config/context'
import { cellsReducer } from './tableCells/reducer'
import { modalsReducer } from './modals/reducer'

export const cellsState = {
  headCells: [],
}

export const modalState = {
  caseModal: false,
  editorModal: false,
  observationModal: false,
  configModal: false,
  tagModal: false,
  upload: false,
  fileName: '',
  file: '',
  drawer: {
    name: '',
    isOpen: false,
    caseId: null,
    caseConversationId: null,
  },
  themeMode: 'main',
  pause: null,
  onPause: null,
  caseState: {
    blockedGuid: null,
    groupAccountId: null,
    allowUserToCreateTags: null,
    caseId: null,
    groupAccount: {},
    userAssignedId: null,
    accountId: null,
    clientId: null,
    userChannelId: null,
    accountTypeId: null,
    clientName: null,
  },
  showBlockedPause: false,
}

export const globalState = {
  cellsState,
  modalState,
}

export const tableReducer = (state, action) => ({
  cellsState: cellsReducer(state.cellsState, action),
})

export const modalReducer = (state, action) => ({
  modalState: modalsReducer(state.modalState, action),
  cellsState: cellsReducer(state.cellsState, action),
})

export const { useDispatch, useSelector, Context } = contextFactory(globalState)
