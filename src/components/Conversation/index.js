import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { arrayOf, shape, string } from 'prop-types'

import { makeStyles } from '@material-ui/core'

import { Context } from '../../../src/context/index'
import useConversation from '../../hooks/useConversation'
import Clock from '../Clock'
import withSpinner from '../Spinner'
import ConversationBody from './ConversationBody/'
import ConversationHeader from './ConversationHeader'
import ConversationInput from './ConversationInput'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
  },
}))

const Conversation = ({ caseData }) => {
  const { state } = useContext(Context)
  const { root } = useStyles(state.modalState)
  const { caseId, conversationId } = useParams()

  const actualConversationId = conversationId
    ? conversationId
    : caseData?.data[0].ConversationId

  const { data, isLoading } = useConversation(actualConversationId)

  return (
    <div className={root}>
      <Clock caseId={caseId} />
      <ConversationHeader
        caseData={caseData}
        data={data}
        isLoading={isLoading}
      />
      <ConversationBody caseData={data} isLoading={isLoading} />
      <ConversationInput caseData={caseData} />
    </div>
  )
}

Conversation.propTypes = {
  caseData: shape({
    UCUserName: string,
    ClientName: string,
    data: arrayOf(shape({})),
  }),
}

export default withSpinner(Conversation)
