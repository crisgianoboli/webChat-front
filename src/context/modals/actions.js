export const ActionType = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  TOGGLE_MODAL_EDITOR: 'TOGGLE_MODAL_EDITOR',
  TOGGLE_MODAL_OBSERVATION: 'TOGGLE_MODAL_OBSERVATION',
  TOGGLE_TAG_MODAL: 'TOGGLE_TAG_MODAL',
  TOGGLEL_OBSERVATION_FILE: 'TOGGLEL_OBSERVATION_FILE',
  TOGGLEL_OBSERVATION_FILE_UPLOAD: 'TOGGLEL_OBSERVATION_FILE_UPLOAD',
  TOGGLEL_OBSERVATION_FILE_NAME: 'TOGGLEL_OBSERVATION_FILE_NAME',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  TOGGLE_STEPS: 'TOGGLE_STEPS',
  TOGGLE_THEME_MODE: 'TOGGLE_THEME_MODE',
  GET_CELLS: 'GET_CELLS',
  SET_CELL: 'SET_CELL',
  GET_MODAL: 'GET_MODAL',
  TOGGLE_PAUSE: 'TOGGLE_PAUSE',
  TOGGLE_CONFIG_MODAL: 'TOGGLE_CONFIG_MODAL',
  TOGGLE_CASE_STATE: 'TOGGLE_CASE_STATE',
  TOGGLE_SHOW_BLOCKED_PAUSE: 'TOGGLE_SHOW_BLOCKED_PAUSE',
  TOGGLE_ON_PAUSE: 'TOGGLE_ON_PAUSE',
  TOGGLE_TOOLTIP_TAGS: 'TOGGLE_TOOLTIP_TAGS',
}

export const actionsCreator = {
  toggleModal: bool => ({
    type: ActionType.TOGGLE_MODAL,
    payload: !bool,
  }),
  toggleModalEditor: bool => ({
    type: ActionType.TOGGLE_MODAL_EDITOR,
    payload: !bool,
  }),
  toggleModalObservation: bool => ({
    type: ActionType.TOGGLE_MODAL_OBSERVATION,
    payload: !bool,
  }),
  toggleTagModal: bool => ({
    type: ActionType.TOGGLE_TAG_MODAL,
    payload: !bool,
  }),
  toggleObservationFileName: string => ({
    type: ActionType.TOGGLEL_OBSERVATION_FILE_NAME,
    payload: string,
  }),
  toggleObservationFileUpload: bool => ({
    type: ActionType.TOGGLEL_OBSERVATION_FILE_UPLOAD,
    payload: !bool,
  }),
  toggleObservationFile: string => ({
    type: ActionType.TOGGLEL_OBSERVATION_FILE,
    payload: string,
  }),
  toggleDrawer: (isOpen, name, caseId, caseConversationId) => ({
    type: ActionType.TOGGLE_DRAWER,
    payload: { isOpen, name, caseId, caseConversationId },
  }),
  toggleThemeMode: mode => ({
    type: ActionType.TOGGLE_THEME_MODE,
    payload: mode,
  }),
  getCells: () => ({
    type: ActionType.GET_CELLS,
  }),
  setCell: cell => ({
    type: ActionType.SET_CELL,
    payload: cell,
  }),
  getModal: () => ({
    type: ActionType.GET_MODAL,
  }),
  togglePause: pause => ({
    type: ActionType.TOGGLE_PAUSE,
    payload: pause,
  }),
  toggleConfigModal: bool => ({
    type: ActionType.TOGGLE_CONFIG_MODAL,
    payload: !bool,
  }),
  toggleCaseState: caseState => ({
    type: ActionType.TOGGLE_CASE_STATE,
    payload: caseState,
  }),
  toggleShowBlockedPause: bool => ({
    type: ActionType.TOGGLE_SHOW_BLOCKED_PAUSE,
    payload: bool,
  }),
  toggleOnPause: pauseId => ({
    type: ActionType.TOGGLE_ON_PAUSE,
    payload: pauseId,
  }),
  toggleTooltipTags: tooltip => ({
    type: ActionType.TOGGLE_TOOLTIP_TAGS,
    payload: tooltip,
  }),
}
