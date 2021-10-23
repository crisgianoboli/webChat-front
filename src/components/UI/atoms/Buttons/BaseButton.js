import { forwardRef } from 'react'

import MaterialButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({}))

const BaseButton = forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <MaterialButton className={classes} {...props} ref={ref}>
      {props.children}
    </MaterialButton>
  )
})

export default BaseButton
