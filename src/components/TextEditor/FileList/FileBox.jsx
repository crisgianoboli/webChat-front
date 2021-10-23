import { Box, makeStyles } from '@material-ui/core'
import { fileType, fileSize } from './utils'
import Adjunto from '../../../assets/AttachIcon'
import CloseIcon from '../../../assets/CloseIcon'

const useStyles = makeStyles(theme => ({
  fileName: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.secondary.corduroy,
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  fileError: {
    color: theme.palette.primary['#F00000'],
    fontSize: '12px',
    fontFamily: 'Nunito',
  },
  fileSizeCss: {
    fontFamily: 'Nunito',
    fontSize: '12px',
    lineHeight: '16px',
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    opacity: '0.4',
  },
}))

function FileBox({ index, data, errorMessage, icon, handleCloseClick }) {
  const classes = useStyles()

  return (
    <>
      <Box margin="10px 0 20px" key={index}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          overflow="hidden"
        >
          <Adjunto text={fileType(data.name)} variant={icon} />
          <Box
            component="span"
            className={`${classes.fileName} ${
              data.invalid ? classes.fileError : ''
            }`}
          >
            {data.name}
          </Box>
          <Box component="span" className={classes.fileSizeCss}>
            {fileSize(data.size)}
          </Box>
          {/* TODO atomic - Usar átomo botón. */}
          <button
            className={classes.fileRemove}
            onClick={() => handleCloseClick(data.name)}
          >
            <CloseIcon />
          </button>
        </Box>
        {data.invalid && (
          <Box component="span" className={classes.fileError}>
            {errorMessage}
          </Box>
        )}
      </Box>
    </>
  )
}

export default FileBox
