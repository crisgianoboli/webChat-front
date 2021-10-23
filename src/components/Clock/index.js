import { useState, useEffect, useContext } from 'react'
import moment from 'moment'

import { makeStyles, Box } from '@material-ui/core'

import { zeroTimer } from '../../utils'
import TimerOutlinedIcon from '../../assets/TimerOutlinedIcon'
import ArrowIcon from '../../assets/ArrowIcon'
import { Context } from '../../context'

const useStyle = makeStyles(({ palette }) => ({
  root: {
    alignItems: 'center',
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    borderRadius: '0px 0px 10px 9px',
    display: 'flex',
    height: '4.25rem',
    justifyContent: 'space-between',
    left: '44%',
    position: 'absolute',
    top: '0',
    width: '14.375rem',
  },
  left: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '55%',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    width: '45%',
  },
  timerContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  timerIcon: {
    width: '16px',
  },
  timerSmallIcon: {
    width: '11px',
    '& path': {
      stroke: palette.secondary.corduroy,
    },
  },
  timer: {
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    fontFamily: 'Nunito',
    fontSize: '1.188rem',
    fontWeight: '300',
    lineHeight: '26px',
    width: '4.813rem',
  },
  miniTimer: {
    fontFamily: 'Nunito',
    fontSize: '11px',
  },
  badgeTimer: {
    alignItems: 'center',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderRadius: '6px',
    boxSizing: 'border-box',
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    display: 'flex',
    fontSize: '0.75rem',
    justifyContent: 'space-evenly',
    margin: '2px',
    padding: '5px 10px',
    width: '5.547rem',
  },
}))

function Clock({ caseId }) {
  const [time, setTime] = useState(zeroTimer)
  useEffect(() => {
    const caseTimer = setInterval(
      () =>
        setTime(moment(time, 'HH:mm:ss').add(1, 'seconds').format('HH:mm:ss')),
      1000
    )
    return () => clearInterval(caseTimer)
  }, [time])

  useEffect(() => {
    setTime(zeroTimer)
  }, [caseId])

  const { state } = useContext(Context)
  const {
    badgeTimer,
    left,
    miniTimer,
    right,
    root,
    timer,
    timerIcon,
    timerSmallIcon,
  } = useStyle(state.modalState)
  return (
    <Box className={root} boxShadow={1}>
      <Box className={left}>
        <TimerOutlinedIcon variant={timerIcon} />
        <span className={timer}>{time}</span>
      </Box>
      <Box className={right} flexDirection="column">
        <Box className={badgeTimer}>
          <TimerOutlinedIcon variant={timerSmallIcon} />
          <span className={miniTimer}>01:00</span>
          <ArrowIcon />
        </Box>
        <Box className={badgeTimer}>
          <TimerOutlinedIcon variant={timerSmallIcon} />
          <span className={miniTimer}>05:00</span>
          <ArrowIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default Clock
