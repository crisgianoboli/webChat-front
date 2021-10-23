/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react'
import clsx from 'clsx'
import { useHistory, useParams } from 'react-router-dom'

import {
  makeStyles,
  ButtonGroup,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core'

import ListItem from '../Appbar/SidebarInbox/ListItem'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'
import useSendEvent from '../../hooks/events/sendEvent'
import PauseIcon from '../../components/Appbar/PauseIcon'

const useStyles = makeStyles(({ palette, spacing }) => ({
  group: {
    height: '42px',
    justifyContent: 'space-between',
    marginRight: spacing(2),
    '& .MuiButton-outlined': {
      border: 'none',
    },
  },
  menuButton: {
    border: ({ themeMode }) => `1px solid ${palette.textPrimary[themeMode]}`,
    padding: '12px 20px',
    width: '11.25rem',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    backgroundColor: ({ themeMode, inPause }) =>
      inPause
        ? palette.primary.greyContainer
        : palette.boxPanelTable[themeMode],
    '&:hover': {
      backgroundColor: palette.primary.light,
    },
  },
  menu: {
    transform: 'translateY(10px)',
    '& .MuiList-root': {
      padding: 0,
    },
    '& .MuiMenu-paper': {
      boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(10px)',
      width: '11.25rem',
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      padding: 0,
      backgroundColor: ({ themeMode, inPause }) =>
        inPause ? palette.secondary.whiteLilac : palette.panel[themeMode],
    },
  },
  menuItem: {
    padding: '0px',
    '& .MuiButtonBase-root': {
      borderBottom: ({ themeMode }) =>
        `1px solid ${palette.textPrimary[themeMode]}`,
      borderRadius: 'none',
      color: ({ themeMode }) => palette.textPrimary[themeMode],
    },
  },
  listItem: {
    borderBottomRightRadius: '0',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
}))

const EventsDropdown = ({
  startIcon,
  children,
  items,
  show,
  className,
  pause,
  inPause,
}) => {
  const { state, dispatch } = useContext(Context)
  const { group, menuButton, menu, menuItem, listItem } = useStyles({
    inPause,
    themeMode: state.modalState.themeMode,
  })

  const [anchorEl, setAnchorEl] = useState(null)
  const [eventId, setEventId] = useState('')
  const [eventName, setEventName] = useState(null)
  const [eventTypeManage, setEventTypeManage] = useState(null)
  const { push } = useHistory()
  const { mutate, isSuccess, isError } = useSendEvent()
  const params = useParams()

  useEffect(() => {
    if (isSuccess && !eventTypeManage) {
      dispatch(actionsCreator.togglePause(null))
      push({
        pathname: `/break/${eventId}`,
      })
    } else if (isError) {
      dispatch(actionsCreator.togglePause('ocurrio un error'))
      setTimeout(() => {
        dispatch(actionsCreator.togglePause(null))
      }, 1500)
    } else if (isSuccess && eventTypeManage) {
      dispatch(actionsCreator.toggleOnPause(eventId))
      dispatch(actionsCreator.togglePause(eventName))
      if (params.EventTypeId) {
        push('/cases')
      }
    }
    setAnchorEl(null)
  }, [isSuccess, isError, eventTypeManage])

  const handleSelectedItem = event => {
    mutate(event)
    setAnchorEl(null)
    setEventTypeManage(event.EventTypeManageCase)
    setEventName(event.EventTypeName)
    setEventId(event.EventTypeId)
  }

  const handleClick = event => {
    if (pause) {
      dispatch(actionsCreator.togglePause(null))
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <ButtonGroup className={clsx(group, { [className]: className })}>
        <Button
          aria-label="dropdown"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          endIcon={<PauseIcon pause={pause} anchorEl={anchorEl} />}
          startIcon={startIcon}
          className={menuButton}
        >
          {children}
        </Button>
      </ButtonGroup>
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        id="pause-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={menu}
      >
        {items &&
          items.map(item =>
            show && !item.EventTypeManageCase ? null : (
              <MenuItem
                disableGutters
                className={menuItem}
                key={`auxiliaries-${item.EventTypeId}`}
              >
                <ListItem
                  handleClick={handleSelectedItem}
                  size="small"
                  label={item.EventTypeName}
                  event={item}
                  className={listItem}
                />
              </MenuItem>
            )
          )}
      </Menu>
    </>
  )
}

export default EventsDropdown
