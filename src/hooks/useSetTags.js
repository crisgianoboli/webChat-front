import { useMutation } from 'react-query'
import client from '../client/client'

const setTagsAtComment = async tag => {
  const { data } = await client.post(`/tags/`, tag)
  return data
}

export default function useSetTags() {
  return useMutation(tag => setTagsAtComment(tag))
}
