import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { number, string } from 'prop-types'
import fileDownload from 'js-file-download'
import axios from 'axios'

import { alpha, makeStyles, Typography } from '@material-ui/core'

import FileGenericIcon from '../../../../assets/FileGenericIcon'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  attContainer: {
    alignItems: 'center',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: '8px',
    cursor: 'pointer',
  },
  caseContainer: {
    alignItems: 'center',
    borderLeft: `1px solid ${alpha(palette.secondary.corduroy, 0.3)}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '8px',
    padding: '2px 10px',
  },
  caseLabel: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: '0.6875rem',
    textTransform: 'uppercase',
  },
  caseNumber: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: '0.6875rem',
    fontWeight: 'bold',
  },
  dateFormated: {
    fontSize: '0.6875rem',
    fontWeight: 300,
    lineHeight: '1',
    marginRight: '2px',
    color: ({ themeMode }) => palette.textHeadTable[themeMode],
  },
  fileContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  fileLabel: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontFamily: 'Nunito',
    fontSize: '0.875rem',
    fontWeight: 600,
    maxWidth: '190px',
    overflowX: 'hidden',
  },
  icon: {
    fill: ({ themeMode }) => palette.textPrimary[themeMode],
    height: '1.4375rem',
    marginRight: '10px',
  },
}))

const DatosAdjuntosBody = ({
  CaseCommentAttachmentName,
  CaseCommentAttachmentCreated,
  CaseId,
  CaseCommentAttachmentLink,
}) => {
  const { state } = useContext(Context)
  const {
    attContainer,
    caseContainer,
    caseLabel,
    caseNumber,
    dateFormated,
    fileContainer,
    fileLabel,
    icon,
  } = useStyles(state.modalState)

  const { t } = useTranslation()

  const handleDownload = async () => {
    const { data } = await axios.get(`${CaseCommentAttachmentLink}`, {
      responseType: 'blob',
    })
    fileDownload(data, CaseCommentAttachmentName)
  }

  return (
    <div className={attContainer} onClick={handleDownload}>
      <div className={fileContainer}>
        <FileGenericIcon variant={icon} />
        <div>
          <Typography
            className={fileLabel}
            noWrap={true}
          >{`${CaseCommentAttachmentName}`}</Typography>
          <div>
            <Typography className={dateFormated} component="span">
              {moment(CaseCommentAttachmentCreated).format('DD/MM/YYYY')}
            </Typography>
            <Typography className={dateFormated} component="span">
              -
            </Typography>

            <Typography className={dateFormated} component="span">
              {moment(CaseCommentAttachmentCreated).format('hh:mm:ss')}
            </Typography>
          </div>
        </div>
      </div>
      <div className={caseContainer}>
        <Typography component="span" className={caseLabel}>
          {t('Caso')}
        </Typography>
        <Typography component="span" className={caseNumber}>
          {CaseId}
        </Typography>
      </div>
    </div>
  )
}

DatosAdjuntosBody.propTypes = {
  CaseCommentAttachmentName: string.isRequired,
  CaseCommentAttachmentCreated: string.isRequired,
  CaseId: number.isRequired,
}

export default DatosAdjuntosBody
