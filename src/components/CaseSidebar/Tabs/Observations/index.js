import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import {
  Box,
  alpha,
  makeStyles,
  TextareaAutosize,
  Typography,
} from '@material-ui/core'

import Observation from './Observation'
import useObservations, {
  addAttachmentsObservation,
  addObservation,
} from '../../../../hooks/useObservations'
import ObservationsButtonPanel from './ObservationsButtonPanel'
import ObservationFile from './Observation/ObservationFile'
import { Context } from '../../../../context'
import { actionsCreator } from '../../../../context/modals/actions'

const useStyles = makeStyles(({ palette }) => ({
  addContainer: {
    backgroundColor: alpha(palette.primary.light, 0.1),
    marginBottom: '12px',
    padding: '19px 19px 11px 19px',
  },
  addButton: {
    cursor: 'pointer',
    fontFamily: 'Nunito',
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: palette.primary.main,
    '&:hover': {
      color: palette.primary.dark,
    },
  },
  textArea: {
    boxSizing: 'border-box',
    borderRadius: '7px',
    border: `0.5px solid ${palette.primary.light}`,
    color: palette.primary.dark,
    fontFamily: 'Nunito',
    fontSize: '0.75rem',
    padding: '10px',
    resize: 'none',
    width: '100%',
    '&:focus': {
      boxShadow: `-2px -2px 4px ${alpha(
        palette.primary.light,
        0.4
      )}, 2px 2px 4px ${alpha(palette.primary.light, 0.4)}`,
      outline: 'none',
    },
  },
}))

const Observations = () => {
  const { t } = useTranslation()
  const { addContainer, addButton, textArea } = useStyles()

  const [inputValue, setInputValue] = useState('')
  const [addingObservation, setAddingObservation] = useState(false)
  const { mutateAsync } = useMutation(addObservation)
  const { state, dispatch } = useContext(Context)
  const { modalState } = state

  const { caseId } = useParams()
  const { data, isLoading } = useObservations(caseId)

  const handleChange = e => {
    setInputValue(e.target.value)
  }
  //TODO chequear estados y context
  const handleAddObservation = () => {
    setAddingObservation(addingObservation => !addingObservation)
  }

  const handleClose = () => {
    setInputValue('')
    setAddingObservation(false)
    dispatch(actionsCreator.toggleObservationFileUpload(modalState.upload))
  }
  const handleSave = () => {
    inputValue
      ? mutateAsync({ caseId, Description: inputValue })
      : addAttachmentsObservation({
          caseId,
          file: modalState.file,
          //TODO hardcodeado
          user: { userId: 237, userName: 'moviedo' },
        })
    handleClose()
  }

  return (
    <div>
      {!addingObservation && (
        <div className={addContainer}>
          <Typography
            variant="h3"
            className={addButton}
            onClick={handleAddObservation}
          >
            {`${t('Agregar')} ${t('Observacion')}`}
          </Typography>
        </div>
      )}
      {addingObservation && (
        <div className={addContainer}>
          {!modalState.upload ? (
            <TextareaAutosize
              rowsMin={10}
              className={textArea}
              onChange={handleChange}
              value={inputValue}
            />
          ) : (
            <Box display="flex" flexDirection="row" alignItems="center">
              <ObservationFile
                ObservationsFileAttachmentName={modalState.fileName}
                disabled={true}
              />
            </Box>
          )}
          <ObservationsButtonPanel
            handleSave={handleSave}
            handleCancel={handleClose}
          />
        </div>
      )}
      {!isLoading &&
        data.map(obs => (
          <Observation key={obs.ObservationId} observation={obs} />
        ))}
    </div>
  )
}

export default Observations
