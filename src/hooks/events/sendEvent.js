import client from '../../client/client'
import { useMutation } from 'react-query'

const sendEvent = async event => {
  // TODO ver en el back por q tenemos q negar este evento
  const resp = {
    ...event,
    EventTypeManageCase: !event.EventTypeManageCase,
  }
  const { data } = await client.post(`/events/`, resp)
  return data
}

export default function useSendEvent() {
  return useMutation(event => sendEvent(event))
}
