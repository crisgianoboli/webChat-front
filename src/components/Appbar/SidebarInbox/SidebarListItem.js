import { useContext } from 'react'

import { useTranslation } from 'react-i18next'
import { bool, element, func, number, oneOfType, string } from 'prop-types'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
} from '@material-ui/core'

import { Context } from '../../../src/../context'

const useStyles = makeStyles(({ palette }) => ({
  listItem: {
    borderLeft: '3px solid transparent',
    borderRadius: '1px 10px 10px 1px',
    paddingLeft: '8px',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.background[themeMode],
    },
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: ({ themeMode }) => palette.background[themeMode],
      borderLeft: ({ themeMode }) =>
        `2px solid ${palette.background[themeMode]}`,
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      '& div': {
        color: ({ themeMode }) => palette.textPrimary[themeMode],
      },
      '& span': {
        color: ({ themeMode }) => palette.textPrimary[themeMode],
        fontWeight: 'bold',
      },
      '&:hover': {
        backgroundColor: ({ themeMode }) => palette.background[themeMode],
      },
    },
  },
  listItemText: {
    '& span': {
      color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '19px',
    },
  },
  normal: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    margin: '0 6px',
    minWidth: '40px',
    '& svg': {
      width: '20px',
      height: '20px',
      fill: ({ themeMode }) => palette.textPrimary[themeMode],
    },
  },
  small: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    minWidth: '36px',
  },
  listBadge: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0em',
    lineHeight: '16px',
  },
  textContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconTooltip: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  },
}))

const SidebarListItem = ({
  badge,
  handleClick,
  customHandleClick,
  label,
  icon,
  selected,
  size,
  showTooltip,
}) => {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)
  const { t } = useTranslation()

  return (
    <ListItem
      button
      onClick={customHandleClick ? () => customHandleClick(label) : handleClick}
      selected={selected}
      className={classes.listItem}
    >
      <Tooltip
        title={showTooltip ? t(label) : ''}
        placement="right"
        classes={{
          tooltip: classes.iconTooltip,
        }}
      >
        <ListItemIcon className={classes[size]}>{icon}</ListItemIcon>
      </Tooltip>
      <div className={classes.textContainer}>
        <ListItemText primary={t(label)} className={classes.listItemText} />
        <span className={classes.listBadge}>{badge}</span>
      </div>
    </ListItem>
  )
}

SidebarListItem.propTypes = {
  label: string.isRequired,
  icon: element.isRequired,
  badge: oneOfType([string, number]),
  selected: bool,
  handleClick: func.isRequired,
  customHandleClick: func,
  size: string,
  showTooltip: bool,
}

SidebarListItem.defaultProps = {
  badge: '',
  selected: false,
  size: 'normal',
  showTooltip: false,
}

export default SidebarListItem
