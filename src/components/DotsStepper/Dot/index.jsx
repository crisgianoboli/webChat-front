import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  dot: {
    width: '13px',
    height: '13px',
    margin: '0 2px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.26)', //TODO ver rgba
    border: `0.72323px solid ${palette.secondary.whiteLilac}`,
    cursor: 'pointer',
  },
  dotActive: {
    backgroundColor: palette.primary.white,
  },
}))

const Dot = ({ onChangeActive, index, activeStep }) => {
  const classes = useStyles()

  return (
    <div
      className={`${classes.dot} ${
        activeStep === index ? classes.dotActive : ''
      }`}
      onClick={() => onChangeActive(index)}
      data-testid={`dot-${index}`}
    ></div>
  )
}

export default Dot
