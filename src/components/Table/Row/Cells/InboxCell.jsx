import { useContext } from 'react'

import { makeStyles } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'

import { Context } from '../../../../../src/context'

const useStyles = makeStyles(({ palette }) => ({
  row: {
    borderBottom: ({ themeMode }) =>
      `1px solid ${palette.dividerTable[themeMode]}`,
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: 13,
    padding: '8px',
    cursor: 'pointer',
  },
  flexRow: {
    alignItems: 'center',
    display: 'flex',
    '& .MuiBadge-root': {
      marginLeft: '0px',
    },
  },
}))

export default function InboxCell({
  id,
  component,
  align,
  customClasses,
  noFlexRow,
  children,
}) {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)

  return (
    <>
      <TableCell
        className={`${classes.row} ${customClasses}`}
        align={align}
        component={component}
        id={id}
        scope="row"
      >
        {noFlexRow ? (
          <>{children}</>
        ) : (
          <div className={classes.flexRow}>{children}</div>
        )}
      </TableCell>
    </>
  )
}
