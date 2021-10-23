import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import { arrayOf, shape, string } from 'prop-types'

import { alpha, makeStyles } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab'

import Record from './Record'
import withSpinner from '../../../Spinner'
import TimelineHeaderIcon from '../../../../assets/TimelineHeaderIcon'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  timeContainer: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    marginTop: '0px',
    paddingTop: '1rem',
    position: 'relative',
    '& .MuiTimelineItem-missingOppositeContent:before': {
      flex: 0,
    },
  },
  timeContent: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontFamily: 'nunito',
    fontSize: '13px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  timeDot: {
    alignItems: 'center',
    backgroundColor: palette.primary.white,
    border: ({ themeMode }) => `1px solid ${palette.textPrimary[themeMode]}`,
    boxShadow: 'none',
    display: 'flex',
    height: '22px',
    justifyContent: 'center',
    margin: '0px',
    padding: '3px',
    width: '22px',
  },
  timeDotIcon: {
    height: '16px',
  },
  timeItem: {
    cursor: 'pointer',
    '&:hover .MuiTimelineContent-root': {
      fontWeight: 600,
    },
  },
  timeLine: {
    backgroundColor: ({ themeMode }) => palette.textPrimary[themeMode],
    height: '46px',
    width: '0.5px',
  },
  todayBackground: {
    backgroundColor: alpha(palette.primary.light, 0.2),
    height: 'calc(2rem + 30px)',
    left: '0px',
    position: 'absolute',
    top: '0px',
    width: '100%',
  },
}))

const Records = ({ caseData }) => {
  const { state } = useContext(Context)
  const {
    timeContainer,
    timeContent,
    timeDot,
    timeDotIcon,
    timeItem,
    timeLine,
    todayBackground,
  } = useStyles(state.modalState)

  const { t } = useTranslation()
  const history = useHistory()
  const { caseId } = useParams()

  const handleTodayClick = () => {
    history.push({
      pathname: `/case/${caseId}`,
    })
  }

  return (
    <Timeline className={timeContainer}>
      <div className={todayBackground}></div>
      <TimelineItem className={timeItem} onClick={handleTodayClick}>
        <TimelineSeparator>
          <TimelineDot className={timeDot}>
            <TimelineHeaderIcon variant={timeDotIcon} />
          </TimelineDot>
          <TimelineConnector className={timeLine} />
        </TimelineSeparator>
        <TimelineContent className={timeContent}>{t('Hoy')}</TimelineContent>
      </TimelineItem>

      {caseData.data.map(({ MinCaseCommentCreated, ConversationId }) => (
        <Record date={MinCaseCommentCreated} convId={ConversationId} />
      ))}
    </Timeline>
  )
}

Records.propTypes = {
  caseData: shape({
    UCUserName: string,
    ClientName: string,
    data: arrayOf(shape({})),
  }),
}

export default withSpinner(Records)
