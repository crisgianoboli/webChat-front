/* eslint-disable prettier/prettier */

import { useMutation, useQuery } from 'react-query'
import client from '../client/client'

const getTags = async ({ groupAccountId, allowUserToCreateTags }) => {
  const { data } = await client.get(
    `/tags/groupAccount/${groupAccountId}?allowUserToCreateTags=${allowUserToCreateTags}`
  )
  return data.tags
}

const createTag = async ({ groupAccountId, ...tag }) => {
  const { data } = await client.post(`tags/groupAccount/${groupAccountId}`, tag)
  return data
}

const removeConversationTag = async ({ tagId, ...tag }) => {
  const url = `tags/${tagId}`
  const { data } = await client.patch(url, tag)
  return data
}

const editTag = async ({ tagId, ...tag }) => {
  const { data } = await client.put(`tags/${tagId}`, tag)
  return data
}

export default function useGetTags({ groupAccountId, allowUserToCreateTags }) {
  return useQuery(
    ['tags', groupAccountId],
    () => getTags({ groupAccountId, allowUserToCreateTags }),
    {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    }
  )
}

export const useRemoveConversationTag = () => {
  return useMutation(tag => removeConversationTag(tag))
}

export const useCreateTag = () => {
  return useMutation(tag => createTag(tag))
}

export const useEditTag = () => {
  return useMutation(tag => editTag(tag))
}
