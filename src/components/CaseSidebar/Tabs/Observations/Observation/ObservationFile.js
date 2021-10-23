import { bool, string } from 'prop-types'
import {
  Fade,
  alpha,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'

import FileGenericIcon from '../../../../../assets/FileGenericIcon'

const useStyles = makeStyles(({ palette }) => ({
  attContainer: {
    alignItems: 'center',
    backgroundColor: palette.primary.catskillWhite,
    border: `0.2px solid ${alpha(palette.secondary.iron, 0.5)}`,
    borderRadius: '4px',
    display: 'flex',
    height: '27px',
    justifyContent: 'space-between',
    margin: '4px 0',
    width: '100%',
  },
  fileLabel: {
    fontFamily: 'Nunito',
    fontSize: '0.625rem',
    fontWeight: 600,
    marginLeft: '12px',
    maxWidth: '160px',
  },
  icon: {
    fill: palette.primary.main,
    height: '1.1875rem',
    marginLeft: '8px',
  },
  addObs: {
    backgroundColor: 'transparent',
    color: palette.secondary.gray,
    height: '27px',
    width: '27px',
  },
  addObsIcon: {
    height: '14px',
  },
  wrapperFile: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
}))

const ObservationFile = ({ ObservationsFileAttachmentName, disabled }) => {
  const { addObs, addObsIcon, attContainer, fileLabel, icon, wrapperFile } =
    useStyles()

  return (
    <div className={attContainer}>
      <div className={wrapperFile}>
        <FileGenericIcon variant={icon} />
        <Typography
          noWrap={true}
          className={fileLabel}
        >{`${ObservationsFileAttachmentName}`}</Typography>
      </div>
      <Fade in={!disabled} unmountOnExit>
        <Tooltip title="Cancelar">
          <IconButton size="small" className={addObs}>
            <CancelIcon className={addObsIcon} />
          </IconButton>
        </Tooltip>
      </Fade>
    </div>
  )
}

ObservationFile.propTypes = {
  ObservationsFileAttachmentName: string.isRequired,
  disabled: bool.isRequired,
}

export default ObservationFile
