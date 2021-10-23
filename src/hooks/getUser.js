import { useQuery } from 'react-query'
import client from '../client/client'

const getUser = async () => {
  const { data } = await client.get(`/auth/userSession/`)
  return data
}

export default function useGetUser() {
  return useQuery(['user'], () => getUser(), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}
