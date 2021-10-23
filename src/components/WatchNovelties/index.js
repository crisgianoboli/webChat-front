import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { CircularProgress, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.primary.white,
    background: palette.secondary.black,
    borderRadius: '50%',
  },
}))

function CircularProgressWithLabel(props) {
  const classes = useStyles()
  return (
    <Box display="flex" alignSelf="center">
      <CircularProgress
        classes={{
          root: classes.root,
        }}
        size={16}
        variant="determinate"
        thickness={21}
        {...props}
      />
    </Box>
  )
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
}

function CircularStatic() {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10))
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <CircularProgressWithLabel value={progress} />
}

export default CircularStatic
