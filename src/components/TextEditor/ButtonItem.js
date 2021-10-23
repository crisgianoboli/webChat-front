import { IconButton, Tooltip, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    padding: '5px 12px',
  },
}))

const ButtonItem = ({ label, icon, style, onChange }) => {
  const { button } = useStyles()
  return (
    <Tooltip title={label}>
      <IconButton className={button} onClick={() => onChange(style)}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default ButtonItem
