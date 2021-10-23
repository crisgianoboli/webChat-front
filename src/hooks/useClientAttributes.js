import { useQuery } from 'react-query'
import client from '../client/client'

const getClientAttributes = async props => {
  const { data } = await client.post(`/client/`, props)
  return data
}

export default function useClientAttributes(props) {
  return useQuery(['client', props], () => getClientAttributes(props), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}
