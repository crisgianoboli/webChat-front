import { ActionType } from './actions'
import { headCells } from '../../components/Table/constants'

export const cellsReducer = (state, action) => {
  switch (action.type) {
    case ActionType.GET_CELLS:
      return {
        ...state,
        headCells,
      }
    case ActionType.SET_CELL:
      const { id, isSelected } = action.payload
      state.headCells.find(cell => {
        if (cell.id === id) {
          cell.isSelected = isSelected
          return cell
        } else {
          return null
        }
      })
      return {
        ...state,
        headCells: state.headCells,
      }
    default:
      return state
  }
}
