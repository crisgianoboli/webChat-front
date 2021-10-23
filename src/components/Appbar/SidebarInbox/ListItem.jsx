import { bool, element, func, string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import {
  ListItem as MaterialList,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
} from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  listItem: {
    borderLeft: '2px solid transparent',
    borderRadius: '1px 10px 10px 1px',
    paddingLeft: '8px',
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.textPrimary[themeMode],
    },
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: palette.secondary.light,
      borderLeft: `2px solid ${palette.primary.main}`,
      color: palette.primary.dark,
      '& div': {
        color: palette.primary.dark,
      },
      '& span': {
        color: palette.primary.dark,
        fontWeight: 'bold',
      },
      '&:hover': {
        backgroundColor: palette.secondary.light,
      },
    },
  },
  listItemText: {
    '& span': {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '19px',
    },
  },
  normal: {
    color: palette.primary.main,
    margin: '0 6px',
    minWidth: '40px',
    '& svg': {
      width: '20px',
      height: '20px',
      fill: palette.primary.main,
    },
  },
  small: {
    color: palette.primary.dark,
    minWidth: '36px',
  },
  textContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconTooltip: {
    backgroundColor: palette.secondary.light,
    color: palette.primary.dark,
    fontSize: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
  },
}))

const ListItem = ({
  handleClick,
  label,
  icon,
  selected,
  size,
  showImage,
  event,
  className,
  disabled,
}) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <MaterialList
      button
      onClick={() => handleClick(event)}
      selected={selected}
      className={clsx(classes.listItem, { [className]: className })}
      disabled={disabled}
    >
      {showImage && (
        <Tooltip
          title={t(label)}
          placement="right"
          classes={{
            tooltip: classes.iconTooltip,
          }}
        >
          <ListItemIcon className={classes[size]}>{icon}</ListItemIcon>
        </Tooltip>
      )}
      <div className={classes.textContainer}>
        <ListItemText primary={t(label)} className={classes.listItemText} />
      </div>
    </MaterialList>
  )
}

ListItem.propTypes = {
  label: string.isRequired,
  icon: element.isRequired,
  selected: bool,
  handleClick: func.isRequired,
  size: string,
  showImage: bool,
}

ListItem.defaultProps = {
  selected: false,
  size: 'normal',
  showImage: false,
}

export default ListItem
