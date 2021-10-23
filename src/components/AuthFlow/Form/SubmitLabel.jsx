import { Typography, CircularProgress, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
  submitLabel: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}))

const SubmitLabel = ({ label, isLoading }) => {
  const { submitLabel } = useStyles()
  const { t } = useTranslation()
  return isLoading ? (
    <Typography className={submitLabel}>
      {t('Cargando')}
      <CircularProgress color="primary.white" size={15} />
    </Typography>
  ) : (
    <Typography>{label}</Typography>
  )
}

export default SubmitLabel
