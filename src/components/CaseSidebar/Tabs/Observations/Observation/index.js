import { useEffect, useRef, useState } from 'react'
import { shape } from 'prop-types'
// import { useMutation } from 'react-query'

import {
  Avatar,
  Box,
  makeStyles,
  TextField,
  Typography,
  alpha,
} from '@material-ui/core'

import Fade from '@material-ui/core/Fade'

import ObservationHeader from './ObservationHeader'
import ObservationFile from './ObservationFile'
import UserLogo from '../../../../../assets/UserLogo'
import ObservationsButtonPanel from '../ObservationsButtonPanel'
// import { updateObservation } from '../../../../../hooks/useObservations'
// TODO eliminar comentarios
const useStyles = makeStyles(({ palette, spacing }) => ({
  agentContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10px',
    marginBottom: '6px',
  },
  agentName: {
    fontSize: '0.625rem',
    fontWeight: 400,
    lineHeight: '0.875rem',
    marginLeft: '8px',
  },
  avatar: {
    backgroundColor: palette.secondary.light,
    height: '23px',
    width: '23px',
  },
  container: {
    borderBottom: `1px solid ${palette.primary.linkWater}`,
    boxSizing: 'border-box',
    marginBottom: '20px',
    maxWidth: '300px',
    padding: '6px 18px',
    paddingBottom: '20px',
  },
  content: {
    backgroundColor: palette.primary.catskillWhite,
    borderRadius: '0px 9px 9px 9px',
    color: palette.primary.dark,
    fontSize: '0.75rem',
    marginBottom: '10px',
    padding: '10px',
    flexGrow: 1,
  },
  userLogo: {
    fill: palette.primary.main,
    height: '15px',
  },
  filledInput: {
    background: palette.primary.white,
    color: palette.primary.dark,
    padding: '0 6px',
    fontSize: '0.75rem',
    '&$disabled': {
      background: palette.primary.athensGray,
      color: palette.primary.dark,
    },
    '&:hover': {
      backgroundColor: palette.primary.white,
    },
    '&$focused': {
      backgroundColor: palette.primary.white,
    },
  },
  disabled: {},
  focused: {},
  button: {
    backgroundColor: palette.primary.athensGray,
    fontSize: '0.6875rem',
    lineHeight: '0.9375rem',
    marginLeft: '1.125rem',
    padding: '6px 12px',
    textTransform: 'uppercase',
  },
  buttonPrimary: {
    backgroundColor: palette.primary.main,
    color: palette.primary.white,
    '&:hover': {
      backgroundColor: alpha(palette.primary.main, 0.8),
      color: palette.primary.white,
    },
  },
  buttonsContainer: {
    marginBottom: spacing(2),
  },
  addObs: {
    color: palette.primary.main,
    backgroundColor: alpha(palette.primary.light, 0.3),
    height: '27px',
    width: '27px',
  },
  addObsIcon: {
    height: '14px',
  },
}))

const Observation = ({ observation }) => {
  const {
    agentName,
    agentContainer,
    avatar,
    container,
    content,
    userLogo,
    addObs,
    addObsIcon,
    ...classes
  } = useStyles()
  const inputRef = useRef(null)
  // const { mutateAsync } = useMutation(updateObservation)

  // const { t } = useTranslation()

  const { PersonFullName } = observation
  const [disabled, setDisabled] = useState(true)
  const [observationContent, setObservationContent] = useState(
    observation?.Description
  )
  const previousContent = observation?.Description
  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus()
    }
  }, [disabled])

  const handleOnEdit = () => {
    setDisabled(!disabled)
  }

  const handleContentChange = e => {
    setObservationContent(e.target.value)
  }

  const handleCancel = () => {
    setObservationContent(previousContent)
    handleOnEdit()
  }

  //TODO complete this function
  const handleSave = async () => {
    console.log({ ...observation, Description: observationContent })
    // try {
    //   mutateAsync({ ...observation, Description: observationContent })
    //   handleOnEdit()
    // } catch (error) {
    //   console.log('error en handleSave', error)
    // }
  }

  return (
    <div className={container}>
      <ObservationHeader
        handleOnEdit={handleOnEdit}
        observation={observation}
      />
      <div className={agentContainer}>
        <Avatar className={avatar}>
          <UserLogo color={userLogo} />
        </Avatar>
        <Typography className={agentName} component="span">
          {PersonFullName}
        </Typography>
      </div>
      {observation?.Description && (
        <Box display="flex">
          <TextField
            className={content}
            value={observationContent}
            onChange={handleContentChange}
            inputRef={inputRef}
            variant="filled"
            multiline
            InputProps={{
              classes: {
                root: classes.filledInput,
                disabled: classes.disabled,
                focused: classes.focused,
              },
              disableUnderline: true,
            }}
            disabled={disabled}
          />
        </Box>
      )}
      <Fade in={!disabled} unmountOnExit>
        <ObservationsButtonPanel
          handleCancel={handleCancel}
          handleSave={handleSave}
        />
      </Fade>

      {observation?.ObservationsFileAttachmentName && (
        <Box display="flex" flexDirection="row" alignItems="center">
          <ObservationFile {...observation} disabled={disabled} />
        </Box>
      )}
    </div>
  )
}

Observation.propTypes = {
  observation: shape({}).isRequired,
}

export default Observation
