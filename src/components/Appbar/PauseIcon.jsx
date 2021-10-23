import clsx from 'clsx'
import { bool, string } from 'prop-types'

import { makeStyles } from '@material-ui/core'

import CaretDownIcon from '../../assets/CaretDownIcon'
import StopIcon from '../../assets/StopIcon'

const useStyles = makeStyles(({ palette }) => ({
  rotateIcon: {
    transform: 'rotate(180deg)',
  },
  endIcon: {
    color: palette.primary.main,
    margin: '0',
    width: '0.625rem',
  },
}))

const PauseIcon = ({ pause, anchorEl }) => {
  const { rotateIcon, endIcon } = useStyles()
  return (
    <>
      {pause ? (
        <StopIcon />
      ) : (
        <CaretDownIcon
          variant={clsx(endIcon, { [rotateIcon]: Boolean(anchorEl) })}
        />
      )}
    </>
  )
}

PauseIcon.propTypes = {
  pause: bool.isRequired,
  anchorEl: string.isRequired,
}

export default PauseIcon
