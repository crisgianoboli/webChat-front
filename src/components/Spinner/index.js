import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
}))
const withSpinner = Component => props => {
  const { isLoading, ...otherProps } = props
  const classes = useStyles()
  return (
    <>
      {isLoading ? (
        <div className={classes.root}>
          <CircularProgress color="primary" />
        </div>
      ) : (
        <Component {...otherProps} />
      )}
    </>
  )
}

export default withSpinner
