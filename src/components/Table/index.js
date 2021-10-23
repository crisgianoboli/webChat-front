import { useState, useContext } from 'react'
import PropTypes, { shape, arrayOf, string, any } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'

import Row from './Row'
import EnhancedTableHead from './Head'
import Toolbar from './Toolbar'
import withSpinner from '../Spinner'
import TableNoRecords from './TableNoRecords'
import { Context } from '../../context'

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

const useStyles = makeStyles(({ palette, spacing }) => ({
  enhancedTable: {
    width: '100%',
    '& .MuiPaper-root': {
      backgroundColor: ({ themeMode }) => palette.panel[themeMode],
      border: ({ themeMode }) => `1px solid ${palette.background[themeMode]}`,
      borderRadius: '10px',
      boxShadow: 'none',
      '& .MuiToolbar-root': {
        '& div': {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: ({ themeMode }) => palette.textPrimary[themeMode],
        },
        '& svg': {
          width: '20px',
          fill: palette.primary.light,
        },
      },
    },
  },
  paper: {
    marginBottom: spacing(2),
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  container: {
    maxHeight: 'calc(100vh - 30px - 82px - 70px - 12px)',
  },
}))

const EnhancedTable = ({ headCells, rows, title, buttonTitle, buttonLogo }) => {
  const { state } = useContext(Context)
  const { enhancedTable, paper, table, container } = useStyles(state.modalState)
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('case')
  const [selected, setSelected] = useState([])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }
  return (
    <div className={enhancedTable}>
      <Paper className={paper}>
        <Toolbar
          title={title}
          buttonTitle={buttonTitle}
          buttonLogo={buttonLogo}
        />
        <TableContainer className={container}>
          <Table
            className={table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
            stickyHeader
          >
            {rows.length ? (
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows?.length}
                headCells={headCells}
              />
            ) : null}
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(row => (
                <Row key={row.CaseId} {...row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {!rows.length && <TableNoRecords />}
    </div>
  )
}

EnhancedTable.propTypes = {
  rows: arrayOf(shape({})),
  title: string.isRequired,
  buttonTitle: string,
  buttonLogo: any,
  headCells: arrayOf(
    shape({
      id: PropTypes.string,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
    })
  ),
}

EnhancedTable.defaultProps = {
  headCells: [],
  rows: [],
  buttonTitle: '',
  buttonLogo: null,
}

export default withSpinner(EnhancedTable)
