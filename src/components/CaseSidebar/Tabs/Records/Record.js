import { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import moment from 'moment'
import { number, string } from 'prop-types'

import { makeStyles } from '@material-ui/core'
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab'

import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  contentDate: {
    color: ({ themeMode }) => palette.textHeadTable[themeMode],
    fontFamily: 'Nunito',
    fontSize: '12px',
    marginRight: '20px',
  },
  contentHour: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontFamily: 'Nunito',
    fontSize: '12px',
  },
  timeContent: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontFamily: 'Nunito',
    fontSize: '12px',
    fontWeight: 400,
    position: 'relative',
    top: '-10px',
  },
  timeDot: {
    backgroundColor: ({ themeMode }) => palette.textPrimary[themeMode],
    boxShadow: 'none',
    margin: '0 11px',
    padding: '2px',
  },
  timeItem: {
    cursor: 'pointer',
    minHeight: '0',
    '&:hover .MuiTimelineContent-root': {
      fontWeight: 'bold',
    },
  },
  timeLine: {
    backgroundColor: ({ themeMode }) => palette.textPrimary[themeMode],
    height: '46px',
    width: '0.5px',
  },
}))

const Record = ({ date, convId }) => {
  const { state } = useContext(Context)
  const { contentDate, contentHour, timeContent, timeDot, timeItem, timeLine } =
    useStyles(state.modalState)

  const history = useHistory()
  const { caseId } = useParams()

  const handleItemClick = convId => {
    history.push({
      pathname: `/case/${caseId}/conversations/${convId}`,
    })
  }

  return (
    <TimelineItem className={timeItem} onClick={() => handleItemClick(convId)}>
      <TimelineSeparator>
        <TimelineDot className={timeDot} />
        <TimelineConnector className={timeLine} />
      </TimelineSeparator>
      <TimelineContent className={timeContent}>
        <span className={contentDate}>{moment(date).format('DD/MM/YYYY')}</span>
        <span className={contentHour}>{moment(date).format('hh:mm')}</span>
      </TimelineContent>
    </TimelineItem>
  )
}

Record.propTypes = {
  date: string,
  convId: number,
}

export default Record
