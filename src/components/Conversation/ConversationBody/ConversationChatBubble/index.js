import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { shape } from 'prop-types'
import { htmlToText } from 'html-to-text'

import { alpha, Grid, makeStyles, Typography, Box } from '@material-ui/core'

import Avatar from '../../../UI/atoms/Avatar'
import ResponseArrowIcon from '../../../../assets/ResponseArrowIcon'
import ConversationAttachment from './ConversationAttachment'
import ChatBubbleHeader from './ChatBubbleHeader'
import EprionELogoIcon from '../../../../assets/EpironELogoIcon'
import BaseButton from '../../../UI/atoms/Buttons/BaseButton'
import TagsContainer from './TagsContainer'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '5px 0',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    flexDirection: ({ comment }) =>
      comment.ElementTypeOutput ? 'row-reverse' : 'row',
  },
  avatarGrid: {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
    marginBottom: '22px',
  },
  epironAvatar: {
    fill: palette.primary.dark,
    height: '25px',
    paddingRight: '2px',
  },
  bubbleGrid: {
    alignItems: ({ comment }) =>
      comment.ElementTypeOutput ? 'flex-end' : 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
  bubble: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderColor: ({ themeMode }) => palette.boxBubble[themeMode],
    borderRadius: ({ comment }) =>
      comment.ElementTypeOutput ? '27px 27px 0px 27px' : '27px 27px 27px 0px',
    borderStyle: 'solid',
    borderWidth: ({ comment }) => (comment.ElementTypeOutput ? '1px' : '2px'),
    width: 'fit-content',
    maxWidth: '70%',
  },
  commentText: {
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    fontSize: '0.875rem',
    margin: '0 0.9375rem 0.75rem 1.875rem',
    wordWrap: 'break-word',
  },
  bubbleHeader: {
    alignItems: 'center',
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
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
    fill: ({ themeMode }) => palette.textPrimary[themeMode],
    padding: '4px',
    width: '1.1875rem',
  },
  dateFormated: {
    borderRight: `1px solid ${alpha(palette.secondary.corduroy, 0.3)}`,
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
    borderRadius: '0px',
    padding: '0px',
    height: '1.875rem',
    width: '1.875rem',
  },
  moreInfoContainer: {
    height: '20px',
    backgroundColor: ({ themeMode }) => palette.buttonPanel[themeMode],
    marginBottom: '5px',
  },
  tagsContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: ({ comment }) =>
      comment.ElementTypeOutput ? 'row-reverse' : 'row',
    '& .MuiChip-root:first-child': {
      marginLeft: ({ comment }) => (comment.ElementTypeOutput ? '10px' : '0px'),
      marginRight: ({ comment }) =>
        comment.ElementTypeOutput ? '0px' : '10px',
    },
  },
  responseContainer: {
    borderTop: ({ themeMode }) =>
      `1px solid ${alpha(palette.primary[themeMode], 0.4)}`,
  },
  responseIcon: {
    fill: palette.secondary.corduroy,
    width: '0.5rem',
  },
  responseButton: {
    color: palette.secondary.corduroy,
    fontSize: '0.5625rem',
    margin: '0.125rem 1.875rem',
    padding: '0 0.5rem',
    '&:hover': {
      backgroundColor: palette.secondary.whiteLilac,
    },
  },
  attachmentContainer: {
    margin: '0 0.9375rem 0.75rem 1.875rem',
  },
  addTagButton: {
    backgroundColor: ({ themeMode }) => palette.textPrimary[themeMode],
    height: '32px',
    width: '32px',
    marginLeft: ({ comment }) => (comment.Tags.length > 0 ? '0.625rem' : '0'),
  },
  addTagIcon: {
    color: ({ themeMode }) => palette.textSecondary[themeMode],
    height: '14px',
  },
  btnTag: {
    color: palette.secondary.orange,
    borderRadius: '1rem',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: palette.secondary.whiteLilac,
    },
  },
}))

const ConversationChatBubble = ({ comment }) => {
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)

  const {
    attachmentContainer,
    avatarGrid,
    bubbleGrid,
    bubble,
    commentText,
    epironAvatar,
    responseButton,
    responseContainer,
    responseIcon,
    root,
    tagsContainer,
  } = useStyles({ comment, themeMode })

  const { t } = useTranslation()
  const {
    ElementTypeOutput,
    SCName,
    CaseCommentText,
    CaseCommentAttachmentList,
    Tags,
    CaseCommentId,
    ConversationId,
  } = comment

  const handleCommentResponse = () => {
    // TODO: Handle response to client comment
  }

  return (
    <Grid container className={root}>
      <Grid item xs={1} className={avatarGrid}>
        {ElementTypeOutput ? (
          <Avatar size="medium" color="green" hidden={false}>
            <EprionELogoIcon variant={epironAvatar} />
          </Avatar>
        ) : (
          <Avatar size="medium" color="green" hidden={false} />
        )}
      </Grid>
      <Grid item xs={11} className={bubbleGrid}>
        <div className={bubble}>
          <ChatBubbleHeader comment={comment} />
          {SCName === 'Email' ? (
            <Typography className={commentText}>
              {htmlToText(CaseCommentText)}
            </Typography>
          ) : (
            <Typography className={commentText}>{CaseCommentText}</Typography>
          )}
          <div className={attachmentContainer}>
            {CaseCommentAttachmentList.map(attachment => (
              <ConversationAttachment
                attachment={attachment}
                key={`attachment-${attachment.CaseCommentAttanchmentId}`}
              />
            ))}
          </div>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={responseContainer}
          >
            {/* TODO atomic - consumir atomo */}
            <BaseButton
              className={responseButton}
              startIcon={<ResponseArrowIcon variant={responseIcon} />}
              onClick={handleCommentResponse}
            >
              {t('Responder')}
            </BaseButton>
            <div className={tagsContainer}>
              <TagsContainer
                tags={Tags}
                caseCommentId={CaseCommentId}
                conversationId={ConversationId}
              />
            </div>
          </Box>
        </div>
      </Grid>
    </Grid>
  )
}

ConversationChatBubble.propTypes = {
  comment: shape({}).isRequired,
}

export default ConversationChatBubble
