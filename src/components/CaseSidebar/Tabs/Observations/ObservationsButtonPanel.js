import { useContext } from 'react'
import { func } from 'prop-types'
import { useTranslation } from 'react-i18next'

import { alpha, IconButton, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import Modal from '../../../Modal'
import FileList from '../../../TextEditor/FileList'
import { Context } from '../../../../context'
import { actionsCreator } from '../../../../context/modals/actions'
import BaseButton from '../../../UI/atoms/Buttons/BaseButton'

const useStyles = makeStyles(({ palette }) => ({
  addObs: {
    backgroundColor: alpha(palette.primary.light, 0.3),
    color: palette.primary.main,
  },
  addObsIcon: {
    height: '14px',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '6px 0px 10px 0px',
  },
  saveButton: {
    backgroundColor: palette.primary.main,
    color: palette.primary.white,
    '&:hover': {
      backgroundColor: alpha(palette.primary.main, 0.7),
      color: palette.primary.white,
    },
  },
  cancelButton: {
    color: palette.secondary.gray,
    marginLeft: '10px',
  },
}))

export const ObservationsButtonPanel = ({ handleSave, handleCancel }) => {
  const { buttonsContainer, saveButton, cancelButton, addObsIcon, addObs } =
    useStyles()
  const { t } = useTranslation()
  const { state, dispatch } = useContext(Context)
  const { modalState } = state

  const handleModal = () => {
    dispatch(actionsCreator.toggleModalObservation(modalState.observationModal))
  }

  return (
    <div className={buttonsContainer}>
      <div>
        {
          //TODO Atomic - Use Base Button
        }
        <BaseButton className={saveButton} size="small" onClick={handleSave}>
          {t('Guardar')}
        </BaseButton>
        <BaseButton
          className={cancelButton}
          size="small"
          onClick={handleCancel}
        >
          {t('Cancelar')}
        </BaseButton>
      </div>
      <IconButton size="small" className={addObs} onClick={handleModal}>
        <AddIcon className={addObsIcon} />
      </IconButton>
      <Modal
        open={modalState.observationModal}
        toggleModal={actionsCreator.toggleModalObservation}
        title="subir archivo"
      >
        <FileList
          toggleModal={actionsCreator.toggleModalObservation}
          open={modalState.observationModal}
          oneFile
        />
      </Modal>
    </div>
  )
}

ObservationsButtonPanel.propTypes = {
  handleSave: func,
  handleCancel: func,
}

export default ObservationsButtonPanel
