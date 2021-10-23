import React, { useContext } from 'react'

import { Box, makeStyles } from '@material-ui/core'

import { Context } from '../../../src/context/index'
import ImageAvatars from '../UI/atoms/Avatar'

const useStyles = makeStyles(({ palette }) => ({
  conversationContent: {
    paddingLeft: '30px',
    backgroundColor: ({ themeMode }) => palette.backgroundBanner[themeMode],
    borderRadius: '0px 0px 10px 10px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  conversationAvatar: {
    width: '25px',
    height: '25px',
  },
  conversation: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '20px',
    textTransform: 'capitalize',
    display: 'flex',
  },
}))

function ConversationUser() {
  const { state } = useContext(Context)
  const { conversation, conversationContent, conversationAvatar } = useStyles(
    state.modalState
  )
  const { clientName } = state.modalState.caseState

  return (
    <Box className={conversationContent}>
      <ImageAvatars className={conversationAvatar} />
      <Box className={conversation}> {clientName} </Box>
    </Box>
  )
}

export default ConversationUser
