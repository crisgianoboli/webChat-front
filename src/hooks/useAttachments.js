import { useQuery } from 'react-query'
import client from '../client/client'

const getAttachedFiles = async conversationId => {
  const { data } = await client.get(
    `/conversations/${conversationId}/attachments`
  )
  return data
}

const getConversationAttached = async (caseId, conversationId) => {
  const { data } = await client.get(
    `/conversations/${conversationId}/cases/${caseId}/attachments`
  )
  return data
}

export default function useAttachments(conversationId) {
  return useQuery(
    ['attachments', conversationId],
    () => getAttachedFiles(conversationId),
    {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    }
  )
}

export function useCaseAttachments(caseId, conversationId) {
  return useQuery(
    ['caseAttachments', caseId],
    () => getConversationAttached(caseId, conversationId),
    {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    }
  )
}
