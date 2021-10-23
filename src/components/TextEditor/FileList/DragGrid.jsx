import { Box, Grid, makeStyles, alpha } from '@material-ui/core'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import UploadIcon from '../../../assets/UploadIcon'
import { preventDefault } from './utils'

const useStyles = makeStyles(theme => ({
  dropContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1.8px dashed ${alpha(theme.palette.primary.main, 0.44)})`,
    boxSizing: 'border-box',
    borderRadius: '22px',
  },
  dropMessage: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '25px',
    textAlign: 'center',
    cursor: 'default',
  },
  iconContainer: {
    margin: '20px 0',
  },
  searchText: {
    textTransform: 'uppercase',
    padding: '0 0 20px',
  },
  fileInput: {
    display: 'none',
  },
}))

function DragGrid(props) {
  const classes = useStyles()
  const { t } = useTranslation()
  const fileInputRef = useRef()

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      props.handleFiles(fileInputRef.current.files)
    }
  }

  const fileInputClicked = () => {
    fileInputRef.current.click()
  }

  const fileDrop = e => {
    preventDefault(e)
    const files = e.dataTransfer.files
    if (files.length) {
      props.handleFiles(files)
    }
  }

  return (
    <Grid
      className={classes.dropContainer}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
      onDragLeave={preventDefault}
      onDrop={fileDrop}
      onClick={fileInputClicked}
    >
      <Grid className={classes.dropMessage}>
        <Grid item xs={12} className={classes.iconContainer}>
          <UploadIcon />
        </Grid>
        <Box className={classes.searchText} width="200px">
          {t('Arrastra')}
          <Box component="span" color="primary.main" ml="3px">
            {t('Computadora')}
          </Box>
        </Box>
      </Grid>
      <input
        ref={props.fileInputRef}
        className={classes.fileInput}
        type="file"
        multiple
        onChange={filesSelected}
      />
    </Grid>
  )
}

export default DragGrid
