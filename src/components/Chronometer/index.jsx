/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { string } from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined'

import TextButton from '../UI/atoms/Buttons/TextButton'
import useAuxiliaries from '../../hooks/useAuxiliaries'
import Timer from '../Timer'
import EventsDropdown from '../EventsDropdown'
import { Context } from '../../context'

const useStyles = makeStyles(({ palette }) => ({
  container: {
    width: '20rem',
    height: '6rem',
    background: palette.primary.athensGray,
    borderRadius: 5,
  },
  icon: {
    fontSize: 50,
    color: palette.primary.main,
  },
  chronometer: {
    fontSize: '2.2rem',
    color: palette.primary.main,
  },
  containerButtons: {
    width: '20rem',
    marginTop: '1rem',
  },
  buttonPause: {
    backgroundColor: `${palette.primary.main} !important`,
    color: palette.primary.white,
    padding: '10px 0',
  },
}))

const Chronometer = ({ EventTypeId }) => {
  const styles = useStyles()
  const { t } = useTranslation()
  const { data } = useAuxiliaries()
  const { push } = useHistory()
  const { state } = useContext(Context)
  const { modalState } = state
  const { pause } = modalState

  const [isRunning, setIsRunning] = useState(true)
  const [breakTime, setBreakTime] = useState('')

  const stopTimer = () => {
    setIsRunning(false)
    push({ pathname: '/cases' })
  }

  useEffect(() => {
    const typeEvent = data.find(
      event => event.EventTypeId === parseInt(EventTypeId)
    )
    setBreakTime(typeEvent.EventTypeName)
  }, [EventTypeId])

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        className={styles.container}
      >
        <WatchLaterOutlinedIcon className={styles.icon} />
        <Timer style={styles.chronometer} isRunning={isRunning} />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        className={styles.containerButtons}
      >
        <Box width="50%">
          <EventsDropdown
            show={false}
            items={data}
            pause={pause}
            inPause={true}
          >
            {breakTime}
          </EventsDropdown>
        </Box>
        <TextButton
          text={t('Finalizar')}
          color="dark"
          colorText="white"
          width="130"
          onClick={stopTimer}
          height="100%"
          className={styles.buttonPause}
        />
      </Box>
    </Box>
  )
}

Chronometer.propsType = {
  EventTypeId: string.isRequired,
}

export default Chronometer
