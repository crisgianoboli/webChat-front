import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import { Typography } from '@material-ui/core'
import { secondsToHhmmss } from '../../utils'

const TIMER = '00:00:00'

const Timer = ({ style, isRunning }) => {
  const [seconds, setSeconds] = useState(0)
  const [strTime, setStrTime] = useState(TIMER)
  const { EventTypeId } = useParams()

  useEffect(() => {
    setSeconds(0)
    setStrTime(TIMER)
  }, [EventTypeId])

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds(prevState => prevState + 1)
        setStrTime(secondsToHhmmss(seconds))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning, seconds])
  return <Typography className={clsx({ [style]: style })}>{strTime}</Typography>
}

export default Timer
