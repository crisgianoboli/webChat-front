import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import BaseButton from './BaseButton'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette }) => ({
  btnLogin: {
    borderRadius: '36px',
    marginTop: '1rem',
    color: palette.primary.white,
    padding: '0.8rem',
    height: '40px',
    minWidth: '150px',
    width: props => props.width,
    '&:hover': {
      color: palette.primary.dark,
    },
  },
  btnActive: {
    background: palette.primary.bostonBlue,
  },
  btnDisabled: {
    background: palette.primary.alto,
  },
}))

export default function FormButton({
  type = 'submit',
  buttonLabel,
  isValid,
  dirty,
  children,
  onClick,
  width,
}) {
  const classes = useStyles({ width })

  return (
    <BaseButton
      type={type}
      className={clsx(classes.btnLogin, {
        [classes.btnDisabled]: !(dirty && isValid),
        [classes.btnActive]: dirty && isValid,
      })}
      disabled={!(dirty && isValid)}
      onClick={onClick}
    >
      <Box component="span" padding="33px" minWidth="100px">
        {buttonLabel || children}
      </Box>
    </BaseButton>
  )
}
