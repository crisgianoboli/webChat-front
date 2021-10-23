import client from '../client/client'

export const sendComments = conversation => {
  const { CaseId, ConversationId } = conversation
  return client.put(
    `/cases/${CaseId}/conversations/${ConversationId}`,
    conversation
  )
}
