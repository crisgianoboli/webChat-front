import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

import EmptyInbox from '../../assets/EmptyInbox'

const useStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    alignItems: 'center',
    background: 'white',
    border: `1px solid ${palette.primary.light}`,
    borderRadius: '0 0 12px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    height: '114px',
    marginBottom: spacing(2),
    marginTop: spacing(10),
    width: '213px',
  },
  title: {
    color: palette.primary.dark,
    fontSize: '20px',
    lineHeight: '27.28px',
  },
  paragraph: {
    color: palette.primary.dark,
    fontWeight: '300',
    fontSize: '16px',
    marginBottom: spacing(10),
    maxWidth: '261px',
    textAlign: 'center',
  },
}))

const TableNoRecords = () => {
  const { container, icon, title, paragraph } = useStyles()
  const { t } = useTranslation()

  return (
    <div className={container}>
      <div className={icon}>
        <EmptyInbox />
      </div>
      <h3 className={title}>{t('BandejaVacia')}</h3>
      <p className={paragraph}>{t('BandejaVaciaTip')}</p>
    </div>
  )
}

export default TableNoRecords
