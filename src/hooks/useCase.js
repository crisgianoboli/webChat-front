import { useQuery } from 'react-query'
import client from '../client/client'

const getCase = async caseId => {
  const { data } = await client.get(`/cases/${caseId}`)
  return data
}

export default function useCase(caseId) {
  return useQuery(['case', caseId], () => getCase(caseId), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}
