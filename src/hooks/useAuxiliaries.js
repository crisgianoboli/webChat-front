import { useQuery } from 'react-query'
import client from '../client/client'

const getAuxiliaries = async () => {
  const { data } = await client.get(`/auxiliaries`)
  return data.map(auxiliar => ({
    ...auxiliar,
    option_label: auxiliar.EventTypeName,
  }))
}

export default function useAuxiliaries() {
  return useQuery(['auxiliaries'], () => getAuxiliaries(), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}
