import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Grid, makeStyles } from '@material-ui/core'

import { validateFile } from './utils'
import { Context } from '../../../context'
import { actionsCreator } from '../../../context/modals/actions'
import FileBox from './FileBox'
import DragGrid from './DragGrid'
import UploadButton from './UploadButton'

const useStyles = makeStyles(({ palette }) => ({
  dragNDrop: {
    margin: '0',
  },
}))

const DragNDrop = ({ toggleModal, open, oneFile }) => {
  const classes = useStyles()

  const [selectedFiles, setSelectedFiles] = useState([])
  const [validFiles, setValidFiles] = useState([])
  const [unsupportedFiles, setUnsupportedFiles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const { t } = useTranslation()
  const { state, dispatch } = useContext(Context)
  const { modalState } = state

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find(item => item.name === current.name)
      if (!x) {
        return acc.concat([current])
      } else {
        return acc
      }
    }, [])
    setValidFiles([...filteredArr])
  }, [selectedFiles])

  const handleModal = () => {
    dispatch(toggleModal(open))
  }

  const handleFiles = files => {
    if (oneFile && files.length > 1) {
      return alert('Solo se puede adjuntar un unico archivo')
    }
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles(prevArray => [...prevArray, files[i]])
      } else {
        files[i]['invalid'] = true
        setSelectedFiles(prevArray => [...prevArray, files[i]])
        setErrorMessage('File type not permitted')
        setUnsupportedFiles(prevArray => [...prevArray, files[i]])
      }
    }
  }

  const uploadFiles = async () => {
    dispatch(actionsCreator.toggleObservationFileUpload(modalState.upload))
    const formData = new FormData()
    for (let i = 0; i < validFiles.length; i++) {
      formData.append('file', validFiles[i])
      // TODO ver que hacemos con los adjuntos y pantalla de confirmacion
      let file = formData.get('file')
      dispatch(
        actionsCreator.toggleObservationFileName(
          (modalState.fileName = file.name)
        )
      )
      //TODO guarda un solo archivo en el context
      dispatch(actionsCreator.toggleObservationFile((modalState.file = file)))
    }
    handleModal()
  }

  const removeFile = name => {
    const index = validFiles.findIndex(e => e.name === name)
    const index2 = selectedFiles.findIndex(e => e.name === name)
    const index3 = unsupportedFiles.findIndex(e => e.name === name)
    validFiles.splice(index, 1)
    selectedFiles.splice(index2, 1)
    setValidFiles([...validFiles])
    setSelectedFiles([...selectedFiles])
    if (index3 !== -1) {
      unsupportedFiles.splice(index3, 1)
      setUnsupportedFiles([...unsupportedFiles])
    }
  }

  return (
    <Grid className={classes.dragNDrop} margin="0" container>
      <Grid item xs={12}>
        {validFiles.map((data, i) => (
          <FileBox
            data={data}
            errorMessage={errorMessage}
            handleCloseClick={removeFile}
            index={i}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <UploadButton
          unsupportedFiles={unsupportedFiles}
          validFiles={validFiles}
          uploadFiles={uploadFiles}
        />
        <DragGrid t={t} handleFiles={handleFiles} />
      </Grid>
    </Grid>
  )
}

export default DragNDrop
