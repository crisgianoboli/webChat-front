import { useQuery } from 'react-query'
import client from '../client/client'
import { casesRefreshInterval } from '../config'

const getGroupedCases = async key => {
  const { data } = await client.get('/cases/grouped')
  return data
}

export function useGroupedCases(callback) {
  return useQuery('cases', getGroupedCases, {
    refetchInterval: casesRefreshInterval,
    onSuccess: callback,
  })
}

const getFilteredCases = async filter => {
  try {
    const { data } = await client.get(`/cases?filter=${filter}`)
    return data
  } catch (error) {
    // FIXME ver tipo de error antes de desloguear
    if (error.response.status === 502) {
      localStorage.clear()
      window.location.reload()
    }
  }
}

export function useFilteredCases(filter = 'opened', callback) {
  return useQuery(['cases', filter], () => getFilteredCases(filter), {
    refetchInterval: casesRefreshInterval,
    onSuccess: callback,
  })
}
