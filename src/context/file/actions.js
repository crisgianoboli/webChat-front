export const ActionType = {
  TOGGLEL_OBSERVATION_FILE: 'TOGGLEL_OBSERVATION_FILE',
}

export const actionsFileCreator = {
  toggleObservationFile: bool => ({
    type: ActionType.TOGGLEL_OBSERVATION_FILE,
    payload: !bool,
  }),
}
