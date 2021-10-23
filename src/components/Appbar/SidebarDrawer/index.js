import { useState, useContext } from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import { Drawer, CssBaseline, IconButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Context } from '../../../../src/context'

const drawerWidth = 210

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  drawer: {
    borderRight: ({ themeMode }) => `1px solid ${palette.panel[themeMode]}`,
    height: 'calc(100vh - 82px)',
    flexShrink: 0,
    paddingLeft: '2px',
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  refresh: {
    alignItems: 'center',
    display: 'flex',
    minHeight: '64px',
  },
  refreshLabel: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '22px',
  },
  drawerOpen: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    overflowX: 'hidden',
    position: 'static',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
    width: drawerWidth,
  },
  drawerClose: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    overflowX: 'hidden',
    position: 'static',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    width: '60px',
  },
  iconChevron: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    border: ({ themeMode }) => `1px solid ${palette.panel[themeMode]}`,
    color: ({ themeMode }) => palette.textSecondary[themeMode],
    position: 'absolute',
    right: '-12px',
    top: '21px',
    zIndex: '1',
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.background[themeMode],
    },
    '& span': {
      width: '16px',
      height: '16px',
    },
  },
  divider: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
  },
}))

const withDrawer = Component => props => {
  const { state } = useContext(Context)
  const { root, iconChevron, drawer, drawerClose, drawerOpen } = useStyles(
    state.modalState
  )
  const [open, setOpen] = useState(false)

  const { ...otherProps } = props

  const handleDrawerState = () => {
    setOpen(!open)
  }

  return (
    <div className={root}>
      <CssBaseline />

      <IconButton
        onClick={handleDrawerState}
        className={iconChevron}
        size="small"
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>

      <Drawer
        variant="permanent"
        className={clsx(drawer, {
          [drawerOpen]: open,
          [drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [drawerOpen]: open,
            [drawerClose]: !open,
          }),
        }}
      >
        <Component showLabel={open} {...otherProps} />
      </Drawer>
    </div>
  )
}

export default withDrawer
