import { useQuery } from 'react-query'
import client from '../client/client.login'

const getNovelties = async () => {
  const { data } = await client.get(`/novelties`)
  return data
}

export default function useNovelties() {
  return useQuery('novelties', () => getNovelties(), {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
  })
}
