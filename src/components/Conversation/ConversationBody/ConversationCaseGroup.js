import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { string } from 'prop-types'
import moment from 'moment'

import { Grid, makeStyles, Typography } from '@material-ui/core'

import { Context } from '../../../context'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: '50px',
  },
  dateGrid: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  date: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: '10px',
    textTransform: 'uppercase',
  },
}))

const ConversationCaseGroup = ({ day }) => {
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)
  const { date, dateGrid, root } = useStyles({ themeMode })
  const { t } = useTranslation()
  const today = new Date()

  return (
    <Grid container className={root}>
      <Grid item xs={12} className={dateGrid}>
        <Typography className={date}>
          {moment(today).format('DD/MM/YYYY') === day ? t('Hoy') : day}
        </Typography>
      </Grid>
    </Grid>
  )
}

ConversationCaseGroup.propTypes = {
  day: string,
}

export default ConversationCaseGroup
