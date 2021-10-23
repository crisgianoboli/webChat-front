import { makeStyles } from '@material-ui/core/styles'
import { Box, ButtonBase } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  linkPassword: {
    fontSize: '12px',
    padding: '0.5rem 0',
    color: palette.primary.emperor,
    fontFamily: 'Nunito',
    textDecoration: `underline ${palette.primary.emperor}`,
  },
  btnNext: {
    marginTop: '25px',
  },
}))

export default function FormButtonBase({
  type = 'button',
  onClickForm,
  nextStep,
}) {
  const classes = useStyles()
  return (
    <ButtonBase type={type} onClick={onClickForm} className={classes.btnNext}>
      <Box component="span" className={classes.linkPassword}>
        {nextStep}
      </Box>
    </ButtonBase>
  )
}
