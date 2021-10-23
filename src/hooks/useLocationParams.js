import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
//TODO parse to int string params
function useLocationParams() {
  const { search } = useLocation()
  return queryString.parse(search)
}

export default useLocationParams
