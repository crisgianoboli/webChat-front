import { useContext, useState } from 'react'
import { node, string } from 'prop-types'
import clsx from 'clsx'

import { Button, Collapse, makeStyles, Typography } from '@material-ui/core'

import CaretDownIcon from '../../assets/CaretDownIcon'
import { Context } from '../../context'

const useStyles = makeStyles(({ palette }) => ({
  rotateIcon: {
    transform: 'rotate(180deg)',
  },
  endIcon: {
    color: palette.primary.main,
    margin: '0',
    width: '0.625rem',
  },
  button: {
    border: ({ themeMode }) => `1px solid ${palette.dividerTable[themeMode]}`,
    height: '2.5rem',
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonText: {
    margin: '0 10px',
    fontWeight: 600,
    fontSize: '0.813rem',
    color: palette.primary.main,
  },
  wrapper: {
    '& .MuiCollapse-wrapper': {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0 10px 0',
    },
    '& .MuiCollapse-wrapperInner': {
      width: '85%',
    },
  },
}))
const CollapseButton = ({ buttonLabel, children, isOpen }) => {
  const [open, setOpen] = useState(isOpen)
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)
  const { endIcon, rotateIcon, button, buttonText, wrapper } = useStyles({
    themeMode,
  })
  const handleClick = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <>
      <Button className={button} onClick={handleClick}>
        <CaretDownIcon variant={clsx(endIcon, { [rotateIcon]: !open })} />
        <Typography className={buttonText}>{buttonLabel}</Typography>
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit className={wrapper}>
        {children}
      </Collapse>
    </>
  )
}
CollapseButton.propTypes = {
  buttonLabel: string.isRequired,
  children: node.isRequired,
}
export default CollapseButton
