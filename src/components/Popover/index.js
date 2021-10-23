import { memo } from 'react'
import { bool, func, node, string } from 'prop-types'

import { makeStyles, Popover } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  popOverContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxHeight: '9.375rem',
    overflowY: 'auto',
  },
  popover: {
    '& .MuiPopover-paper': {
      background: palette.primary.white,
      minHeight: '3.125rem',
      maxHeight: '50rem',
      overflowY: 'auto',
      maxWidth: '230px',
      width: props => props.width,
      height: props => props.height,
    },
  },
}))

const PopoverCustom = ({
  children,
  handleClose,
  anchorEl,
  width,
  heigth,
  id,
}) => {
  const { popover } = useStyles()

  const open = Boolean(anchorEl)

  return (
    <Popover
      id={`simple-popover-${id}`}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      className={popover}
    >
      {children}
    </Popover>
  )
}

PopoverCustom.propTypes = {
  children: node.isRequired,
  handleClose: func.isRequired,
  anchorEl: bool.isRequired,
  id: string.isRequired,
}

export default memo(PopoverCustom)
