import { useContext, Fragment } from 'react'
import { func, oneOf, string, arrayOf, shape, bool } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core'

import { Context } from '../../../src/context'

const useStyles = makeStyles(({ palette }) => ({
  label: {
    color: ({ themeMode }) => palette.textHeadTable[themeMode],
    fontWeight: 'bold',
    fontSize: 12,
    opacity: '0.3',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    minWidth: '80px',
  },
  head: {
    backgroundColor: ({ themeMode }) => palette.headTable[themeMode],
    '& .MuiTableCell-stickyHeader': {
      backgroundColor: ({ themeMode }) => palette.headTable[themeMode],
      borderBottom: 'none',
      height: '26px',
    },
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  cell: {
    padding: 0,
  },
  alignLeft: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '8px',
  },
  xlarge: {
    maxWidth: '230px',
  },
  large: {
    width: '150px',
  },
  medium: {
    width: '100px',
  },
  small: {
    width: '50px',
  },
  caseId: {
    paddingLeft: '20px',
  },
  user: {
    paddingLeft: '48px',
  },
  notificacion: {
    minWidth: '100px',
  },
}))

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)
  const { head, label, visuallyHidden, cell, alignLeft } = classes

  // TODO agregar traducciones
  return (
    <TableHead className={head}>
      <TableRow>
        {headCells.map(headCell => (
          <Fragment key={headCell.id}>
            {headCell.isSelected ? (
              <TableCell
                key={headCell.id}
                align="center"
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
                className={`${cell} ${classes[headCell.class]}`}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                  className={`${label} ${classes[headCell.width]} ${alignLeft}`}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ) : null}
          </Fragment>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  onRequestSort: func.isRequired,
  order: oneOf(['asc', 'desc']).isRequired,
  orderBy: string.isRequired,
  headCells: arrayOf(
    shape({
      id: string,
      numeric: bool,
      disablePadding: bool,
      label: string,
      width: string,
    })
  ).isRequired,
}

export default EnhancedTableHead
