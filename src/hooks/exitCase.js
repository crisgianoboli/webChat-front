import { useMutation } from 'react-query'
import client from '../client/client'

const getExitCase = async ({ blockedGuid, onPause = null, caseId }) => {
  const { data } = await client.post(`/cases/exitCase/${caseId}`, {
    onPause,
    blockedGuid,
  })
  return data
}

export default function useExitCase() {
  return useMutation(dataExitCase => getExitCase(dataExitCase))
}
