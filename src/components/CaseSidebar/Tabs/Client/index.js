import { useContext } from 'react'

import { Context } from '../../../../context'
import useClientAttributes from '../../../../hooks/useClientAttributes'
import withSpinner from '../../../Spinner'
import ClientContent from './ClientContent'

const ContentWhitSpinner = withSpinner(ClientContent)

function Client() {
  const {
    state: {
      modalState: {
        caseState: { accountId, clientId, userChannelId, accountTypeId },
      },
    },
  } = useContext(Context)

  const { data, isLoading } = useClientAttributes({
    accountId,
    clientId,
    userChannelId,
    accountTypeId,
  })

  return <ContentWhitSpinner data={data} isLoading={isLoading} />
}

export default Client
