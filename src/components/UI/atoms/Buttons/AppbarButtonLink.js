import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

import BaseButton from './BaseButton'
import { Context } from '../../../../../src/context'

const useStyles = makeStyles(({ palette, spacing }) => ({
  listItemText: {
    alignItems: 'center',
    borderBottom: '4px solid transparent',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    paddingTop: '4px',
    textDecoration: 'none',
    width: '100%',
  },
  active: {
    borderBottom: ({ themeMode }) =>
      `1px solid ${palette.textPrimary[themeMode]}`,
  },
  button: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderRadius: '0px',
    height: spacing(10),
    padding: '0px',
    width: '110px',
    '& span': {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
    },
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.panelHover[themeMode],
    },
  },
}))

//TODO Atomic - Se podría refactorizar y crear un atomo mas general para reutilizar y hacer un átomo o una molecula.
export default function AppbarButtonLink({ title, path }) {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)

  return (
    <BaseButton className={classes.button} key={title}>
      <NavLink
        exact
        to={path}
        className={classes.listItemText}
        activeClassName={classes.active}
      >
        <Typography variant="button" align="center">
          {title}
        </Typography>
      </NavLink>
    </BaseButton>
  )
}
