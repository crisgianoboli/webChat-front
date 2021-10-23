import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  btnAssociate: {
    width: '13.125rem',
    height: '2.5rem',
    borderRadius: '0.938rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: '13px',
  },
}))

function BtnOutline({ children, onClick, logo }) {
  const { btnAssociate } = useStyles()

  return (
    <Button
      variant="outlined"
      className={btnAssociate}
      startIcon={logo}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default BtnOutline
