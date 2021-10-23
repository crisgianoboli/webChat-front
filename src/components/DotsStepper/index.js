import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core/'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import useNovelties from '../../hooks/useNovelties'
import DotsContainer from './DotsContainer'
import BaseButton from '../UI/atoms/Buttons/BaseButton'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles(({ palette }) => ({
  root: {
    flexGrow: 1,
    margin: '0 24px',
  },
  labelSlide: {
    fontFamily: 'Roboto',
    fontSize: '12.96px',
    lineHeight: '23px',
    width: '90%',
    height: '7rem',
    marginLeft: '1rem',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      borderRight: `2px solid transparent`,
      width: '7px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: palette.secondary.light,
      borderRadius: '5px',
      boxShadow: 'inset 0 0 6px rgba(63,150,180,0.2)',
    },
    '*:hover::-webkit-scrollbar-thumb': {
      boxShadow: 'inset 0 0 6px rgba(63,150,180,0.7)',
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(197,223,223,0.7)',
      borderRadius: '10px',
    },
  },
  btnNovelties: {
    background: palette.primary.bostonBlue,
    padding: '0 1rem',
    borderRadius: '36px',
    fontSize: '0.7rem',
    lineHeight: '10px',
    color: palette.primary.white,
    height: '25px',
    width: '100px',
    marginRight: '16px',
    '&:hover': {
      color: palette.primary.dark,
    },
  },
}))

function SwipeableTextMobileStepper() {
  const classes = useStyles()
  const { t } = useTranslation()
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const { data, isLoading } = useNovelties()
  const [stopAutoplay, setStopAutoplay] = useState(true)
  const handleStepChange = step => {
    setActiveStep(step)
  }
  const handleMouseOver = () => {
    setStopAutoplay(prevState => !prevState)
  }

  return (
    <div className={classes.root}>
      {!isLoading && data !== undefined && (
        <>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={5000}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
            autoplay={stopAutoplay}
          >
            {data.map(({ label }, index) => {
              return (
                <div key={`novelties-${index}`}>
                  {Math.abs(activeStep - index) <= 2 && (
                    <Typography className={classes.labelSlide}>
                      {label}
                    </Typography>
                  )}
                </div>
              )
            })}
          </AutoPlaySwipeableViews>
          <Box display="flex" justifyContent="space-between" mt="10px">
            <DotsContainer
              steps={data}
              activeStep={activeStep}
              onChangeActive={handleStepChange}
            />
            {/* TODO Atomic - Consumir atomo */}
            <BaseButton className={classes.btnNovelties}>
              {t('ConocerMas')}
            </BaseButton>
          </Box>
        </>
      )}
    </div>
  )
}

export default SwipeableTextMobileStepper
