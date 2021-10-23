import { useQuery } from 'react-query'
import client from '../client/client'
import { notificationsInterval } from '../config'

const getNotifications = async caseId => {
  const { data } = await client.get(`/cases/${caseId}/notifications`)
  return data
}

export default function useNotifications(caseId) {
  return useQuery(
    ['notifications', caseId],
    () => getNotifications(parseInt(caseId)),
    {
      refetchInterval: notificationsInterval,
    }
  )
}
