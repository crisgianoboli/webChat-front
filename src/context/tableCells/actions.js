export const ActionType = {
  GET_CELLS: 'GET_CELLS',
  SET_CELL: 'SET_CELL',
  GET_MODAL: 'GET_MODAL',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
}

export const actionsCreator = {
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
  toggleModal: bool => ({
    type: ActionType.TOGGLE_MODAL,
    payload: bool,
  }),
}
