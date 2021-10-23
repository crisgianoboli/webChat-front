import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

import { fade, IconButton, makeStyles, Typography } from '@material-ui/core'

import { selectIcon } from '../../../../utils'
import TreeIcon from '../../../../assets/TreeIcon'
import CaretDownIcon from '../../../../assets/CaretDownIcon'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  bubbleHeader: {
    alignItems: 'center',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    display: 'flex',
    justifyContent: 'space-between',
    height: '1.875rem',
    margin: '0px 15px 0px 30px',
  },
  bubbleHeaderInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  treeIcon: {
    fill: palette.primary.main,
    height: '0.8125rem',
  },
  channelIcon: {
    backgroundColor: palette.secondary.whiteLilac,
    borderRadius: '4px',
    boxSizing: 'border-box',
    fill: palette.primary.main,
    padding: '4px',
    height: '1.125rem',
  },
  dateFormated: {
    borderRight: `1px solid ${fade(palette.secondary.corduroy, 0.3)}`,
    fontSize: '0.625rem',
    lineHeight: '1',
    padding: '0 10px',
  },
  caseLabel: {
    fontSize: '0.625rem',
    margin: '0px 2px 0px 10px',
    '&::after': {
      content: "':'",
    },
    textTransform: 'uppercase',
  },
  caseNumber: {
    fontSize: '0.625rem',
    fontWeight: 'bold',
  },
  showMoreButton: {
    borderRadius: '10px',
    padding: '0px',
    height: '1.875rem',
    width: '1.875rem',
    '&:hover': {
      backgroundColor: palette.secondary.whiteLilac,
    },
  },
  showMoreIcon: {
    color: palette.primary.main,
    width: '0.625rem',
    margin: '0',
  },
  rotate: {
    transform: 'rotate(180deg)',
  },
  moreInfoContainer: {
    height: '20px',
    backgroundColor: palette.secondary.light,
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  moreInfoLabel: {
    fontSize: '9px',
    color: palette.secondary.corduroy,
    marginLeft: '30px',
  },
  moreInfoId: {
    fontSize: '10px',
    marginLeft: '30px',
    color: palette.primary.dark,
  },
}))

const ChatBubbleHeader = ({ comment }) => {
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)
  const {
    bubbleHeader,
    bubbleHeaderInfo,
    channelIcon,
    treeIcon,
    dateFormated,
    caseLabel,
    caseNumber,
    rotate,
    showMoreButton,
    showMoreIcon,
    moreInfoContainer,
    moreInfoLabel,
    moreInfoId,
  } = useStyles({ comment, themeMode })

  const { t } = useTranslation()

  const [showMoreInfo, setShowMoreInfo] = useState(false)
  const ChannelIcon = selectIcon(comment.SCName)

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo)
  }

  return (
    <>
      <div className={bubbleHeader}>
        <div className={bubbleHeaderInfo}>
          {comment.ElementTypeOutput ? (
            <TreeIcon variant={treeIcon} />
          ) : (
            <ChannelIcon variant={channelIcon} />
          )}

          <Typography className={dateFormated} component="span">
            {moment(comment.CreationDateLog).format('DD/MM/YYYY')}
          </Typography>

          <Typography className={dateFormated} component="span">
            {moment(comment.CreationDateLog).format('hh:mm:ss')}
          </Typography>

          <Typography component="span" className={caseLabel}>
            {t('Caso')}
          </Typography>

          <Typography component="span" className={caseNumber}>
            {comment.CaseId}
          </Typography>
        </div>
        <div>
          {!comment.ElementTypeOutput && (
            <IconButton
              aria-label="more-information"
              className={showMoreButton}
              onClick={toggleMoreInfo}
            >
              {showMoreInfo ? (
                <CaretDownIcon variant={`${showMoreIcon} ${rotate}`} />
              ) : (
                <CaretDownIcon variant={showMoreIcon} />
              )}
            </IconButton>
          )}
        </div>
      </div>
      {showMoreInfo && (
        <div className={moreInfoContainer}>
          <Typography component="span" className={moreInfoLabel}>
            {t('Cuenta')}: {comment.SCName} - {comment.UCName}
          </Typography>
          <Typography component="span" className={moreInfoLabel}>
            {t('Usuario')}: {comment.SCName} - {comment.UCUserName}
          </Typography>
          <Typography component="span" className={moreInfoId}>
            {t('Rep')}: {comment.CaseCommentId}
          </Typography>
        </div>
      )}
    </>
  )
}

export default ChatBubbleHeader
