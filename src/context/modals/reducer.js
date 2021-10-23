import { ActionType } from './actions'

export const modalsReducer = (state, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_MODAL:
      return {
        ...state,
        caseModal: action.payload,
      }
    case ActionType.TOGGLE_MODAL_EDITOR:
      return {
        ...state,
        editorModal: action.payload,
      }
    case ActionType.TOGGLE_MODAL_OBSERVATION:
      return {
        ...state,
        observationModal: action.payload,
      }
    case ActionType.TOGGLE_TAG_MODAL:
      return {
        ...state,
        tagModal: action.payload,
      }
    case ActionType.TOGGLEL_OBSERVATION_FILE:
      return {
        ...state,
        file: action.payload,
      }
    case ActionType.TOGGLEL_OBSERVATION_FILE_UPLOAD:
      return {
        ...state,
        upload: action.payload,
      }
    case ActionType.TOGGLEL_OBSERVATION_FILE_NAME:
      return {
        ...state,
        fileName: action.payload,
      }
    case ActionType.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      }
    case ActionType.TOGGLE_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      }
    case ActionType.TOGGLE_PAUSE:
      return {
        ...state,
        pause: action.payload,
      }
    case ActionType.TOGGLE_CONFIG_MODAL:
      return {
        ...state,
        configModal: action.payload,
      }
    case ActionType.TOGGLE_CASE_STATE:
      return {
        ...state,
        caseState: action.payload,
      }
    case ActionType.TOGGLE_SHOW_BLOCKED_PAUSE:
      return {
        ...state,
        showBlockedPause: action.payload,
      }
    case ActionType.TOGGLE_ON_PAUSE:
      return {
        ...state,
        onPause: action.payload,
      }
    case ActionType.TOGGLE_TOOLTIP_TAGS:
      return {
        ...state,
        tooltipTags: action.payload,
      }
    default:
      return state
  }
}
