import { useQuery } from 'react-query'
import client from '../client/client'

const getClient = async caseId => {
  const { data } = await client.get(`/cases/${caseId}/client`)
  return data
}

export default function useClient(caseId) {
  return useQuery(['client', caseId], () => getClient(caseId), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}
