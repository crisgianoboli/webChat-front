import { useCallback, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import { selectIcon } from '../../../../utils'
import { Context } from '../../../../context'
import BtnOutline from '../../../BtnOutline'
import SearchInput from './SearchInput'
import UserLogo from '../../../../assets/UserLogo'

const useStyles = makeStyles(({ palette }) => ({
  associetContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fill: ({ themeMode }) => palette.button[themeMode],
    height: '1.875rem',
    width: '1.875rem',
    padding: '0.25rem',
    boxSizing: 'border-box',
    borderRadius: '0.25rem',
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    //TODO hacer el themeMode dark
  },
  clientContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0.625rem 0',
  },
  textName: {
    paddingLeft: '0.938rem',
    fontSize: '0.813rem',
  },
}))

const AssociateClients = ({ AttributeList, onClick }) => {
  const { state } = useContext(Context)
  const { icon, clientContent, textName, associetContent } = useStyles(
    state.modalState
  )
  const [showResults, setShowResults] = useState(true)
  const { t } = useTranslation()

  const handleClick = useCallback(() => {
    setShowResults(prevState => !prevState)
  }, [])

  return (
    <Box className={associetContent}>
      <Box>
        {AttributeList.map(({ UCUserName, SCName, UCName, hash }) => (
          <Box key={hash} className={clientContent}>
            {selectIcon(SCName)({ variant: icon })}
            <Box className={textName}>{UCUserName || UCName}</Box>
          </Box>
        ))}
      </Box>
      <Box>
        {showResults ? (
          <BtnOutline onClick={handleClick} logo={<UserLogo />}>
            {t('AsociarCliente')}
          </BtnOutline>
        ) : (
          <SearchInput handleClick={handleClick} />
        )}
      </Box>
    </Box>
  )
}

export default AssociateClients
