import { useQuery } from 'react-query'
import client from '../client/client'

const getEnterCase = async ({ caseId, onPause = null }) => {
  const { data } = await client.get(
    `/cases/enterCase/${caseId}?onPause=${onPause}`
  )
  return data
}

export default function useEnterCase(dataEnterCase) {
  const { caseId } = dataEnterCase
  return useQuery(
    ['dataEnterCase', caseId],
    () => getEnterCase(dataEnterCase),
    {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    }
  )
}
