import { useContext } from 'react'
import { shape } from 'prop-types'

import { makeStyles, Typography } from '@material-ui/core'

import FileGenericIcon from '../../../../assets/FileGenericIcon'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  attachmentContainer: {
    alignItems: 'center',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderRadius: '5px',
    display: 'inline-flex',
    justifyContent: 'space-around',
    marginRight: '11px',
    padding: '3px 9px',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
  fileIcon: {
    fill: ({ themeMode }) => palette.textPrimary[themeMode],
    marginRight: '9px',
    width: '0.75rem',
  },
  fileLabel: {
    fontSize: '0.5625rem',
    color: ({ themeMode }) => palette.textSecondary[themeMode],
    fontWeight: '600',
  },
}))

// To Do: 1. Lógica para mapear el icóno del archivo según el tipo
//        2. Lógica para responder al click del adjunto (descargar imagino)

const ConversationAttachment = ({ attachment }) => {
  const { state } = useContext(Context)
  const { fileIcon, attachmentContainer, fileLabel } = useStyles(
    state.modalState
  )

  const handleClickAttachment = () => {
    // Hadle Click
  }

  return (
    <div className={attachmentContainer} onClick={handleClickAttachment}>
      <FileGenericIcon variant={fileIcon} />
      <Typography
        className={fileLabel}
      >{`${attachment.CaseCommentAttachmentName}.${attachment.MediaTypeName}`}</Typography>
    </div>
  )
}

ConversationAttachment.propTypes = {
  attachment: shape({}).isRequired,
}

export default ConversationAttachment
