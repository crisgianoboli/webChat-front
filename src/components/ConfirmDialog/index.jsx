import React from 'react'
import { useTranslation } from 'react-i18next'
import { string, func } from 'prop-types'

import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { DialogTitle } from '@material-ui/core'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  actions: {
    paddingTop: '15px',
  },
  dialogTitle: {
    padding: '15px 25px',
    '& .MuiTypography-h6': {
      color: palette.primary.main,
    },
  },
}))

const ConfirmDialog = ({ children, setOpen, onConfirm, title, icon }) => {
  const { t } = useTranslation()

  const { actions, dialogTitle } = useStyles()

  const handleClick = () => {
    setOpen(false)
    onConfirm()
  }

  return (
    <>
      <Box display="flex">
        {icon && (
          <Box display="flex" alignItems="center">
            {icon}
          </Box>
        )}
        <Box>
          <DialogTitle className={dialogTitle}>{title}</DialogTitle>
          <DialogContent>{children}</DialogContent>
        </Box>
      </Box>
      <DialogActions className={actions}>
        <Button variant="text" onClick={() => setOpen(false)}>
          {t('Cancelar')}
        </Button>
        <Button variant="contained" onClick={handleClick} color="primary">
          {t('Aceptar')}
        </Button>
      </DialogActions>
    </>
  )
}

ConfirmDialog.propTypes = {
  title: string.isRequired,
  onConfirm: func.isRequired,
  setOpen: func.isRequired,
}

export default ConfirmDialog
