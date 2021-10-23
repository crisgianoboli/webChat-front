import { Box, Typography, makeStyles } from '@material-ui/core'
import TextButton from '../components/UI/atoms/Buttons/TextButton'
import Modal from '../components/Modal'

const useStyles = makeStyles(theme => ({
  cancelTypography: {
    opacity: '0.5',
  },
}))

function LeaveModal({ modalOpen, handleCancel, handleConfirm }) {
  const classes = useStyles()

  return (
    <Modal
      open={modalOpen}
      title={<Typography variant="subtitle">Salir</Typography>}
      bgTitle="#DAEFF8"
      customToggle={handleCancel}
    >
      <Box display="flex" direction="row" justifyContent="space-evenly">
        <TextButton
          text={
            <Typography variant="normal" className={classes.cancelTypography}>
              Cancelar
            </Typography>
          }
          onClick={handleCancel}
        />
        <TextButton text="Salir" onClick={handleConfirm} />
      </Box>
    </Modal>
  )
}

export default LeaveModal
