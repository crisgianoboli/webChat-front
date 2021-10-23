import { useQuery } from 'react-query'
import client from '../client/client'
import { conversationRefreshInterval } from '../config'

const getConversation = async conversationId => {
  const { data } = await client.get(`/conversations/${conversationId}`)
  return data
}

export default function useConversation(conversationId) {
  return useQuery(
    ['conversation', conversationId],
    () => getConversation(conversationId),
    {
      refetchInterval: conversationRefreshInterval,
      refetchOnReconnect: true,
    }
  )
}
