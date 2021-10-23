import { useQuery } from 'react-query'
import client from '../client/client'
import { observationsRefreshInterval } from '../config'

const getObservations = async caseId => {
  const { data } = await client.get(`/cases/${caseId}/observations`)
  return data
}

export const updateObservation = async observation => {
  return await client.put(
    `/cases/${observation.caseId}/observations`,
    observation
  )
}
//id del usuario logeado, case id, file, y el nombre del usuario logeado
export const addAttachmentsObservation = params => {
  const formData = new FormData()
  formData.append('file', params.file)
  formData.append('caseId', params.caseId)
  formData.append('userId', params.user.userId)
  formData.append('userName', params.user.userName)
  return client.post(`/client/observations/save-attachments`, formData, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
  })
}

export const addObservation = async observation => {
  return await client.post(
    `/cases/${observation.caseId}/observations`,
    observation
  )
}

export default function useObservations(caseId) {
  return useQuery(['observations', caseId], () => getObservations(caseId), {
    refetchInterval: observationsRefreshInterval,
  })
}
