import { useContext, useRef, memo } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import _groupBy from 'lodash/groupBy'
import moment from 'moment'

import { Box, makeStyles } from '@material-ui/core'

import { Context } from '../../../../src/context'
import ConversationCaseGroup from './ConversationCaseGroup'
import ConversationChatBubble from './ConversationChatBubble/index'
import withSpinner from '../../Spinner'
import ConversationUser from '../ConversationUser'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    flexGrow: '1',
    overflow: 'auto',
    width: '100%',
  },
}))
const ConversationBody = memo(
  ({ caseData }) => {
    const { state } = useContext(Context)
    const { root } = useStyles(state.modalState)

    const comments = caseData['Comments']

    const commentsGrouped = _groupBy(comments, d =>
      moment(d.CreationDateLog).format('DD/MM/YYYY')
    )

    const lastComment = useRef(null)

    return (
      <>
        <ConversationUser />
        <Box className={root}>
          {Object.keys(commentsGrouped).map((day, i) => [
            <ConversationCaseGroup day={day} key={`day-${i}`} />,
            commentsGrouped[day].map((comment, i) => (
              <ConversationChatBubble
                comment={comment}
                key={`chatBubble-${i}`}
              />
            )),
          ])}
          <Box ref={lastComment}></Box>
        </Box>
      </>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.caseData === nextProps.caseData) {
      return true
    }
    return false
  }
)

ConversationBody.propTypes = {
  caseData: shape({
    UCUserName: string,
    ClientName: string,
    data: arrayOf(shape({})),
  }),
}

export default withSpinner(ConversationBody)
