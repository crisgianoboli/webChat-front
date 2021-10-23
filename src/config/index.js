export const casesRefreshInterval =
  process.env.REACT_APP_CASES_REFRESH_TIME || 10000
export const caseRefreshInterval =
  process.env.REACT_APP_CASE_REFRESH_TIME || 10000
export const conversationRefreshInterval =
  process.env.REACT_APP_CONVERSATION_REFRESH_TIME || 10000

export const notificationsInterval =
  process.env.REACT_APP_NOTIFICATIONS_REFRESH_TIME || 10000
export const attachmentsRefreshInterval =
  process.env.REACT_APP_ATTACHED_REFRESH_TIME || 100000
export const observationsRefreshInterval =
  process.env.REACT_APP_OBSERVATIONS_REFRESH_TIME || 4000

export const language = process.env.REACT_APP_LANGUAGE || 'es-AR'

export const vitalsReport =
  process.env.NODE_ENV === 'development' ? console.log : () => {}
