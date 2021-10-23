import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, makeStyles, Typography } from '@material-ui/core'

import Divider from '../UI/atoms/Divider'
import { Context } from '../../../src/context'

const useStyles = makeStyles(({ palette, typography }) => ({
  userCases: {
    padding: '0 30px',
    maxHeight: '8.5rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
  },
  cases: {
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeightRegular,
    fontSize: typography.button.fontSize,
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    '& span': {
      color: palette.primary.main,
      margin: '0 10px',
    },
  },
}))

const UserCases = ({ userSession }) => {
  const { state } = useContext(Context)
  const { userCases, cases } = useStyles(state.modalState)
  const { t } = useTranslation()

  return (
    <>
      <Box className={userCases}>
        <Typography className={cases}>
          {`${t('NewRecordsToAssign')}:`}
          <Box component="span" data-testid="newRecordsToAssign">
            {userSession.NewRecordsToAssign}
          </Box>
        </Typography>
        <Typography className={cases}>
          {`${t('PendingRecordToAssign')}:`}
          <Box component="span" data-testid="pendingRecordToAssign">
            {userSession.PendingRecordToAssign}
          </Box>
        </Typography>
        <Typography className={cases}>
          {`${t('AssigmentCaseTypeName')}:`}
          <Box component="span" data-testid="assigmentCaseTypeName">
            {userSession.AssigmentCaseTypeName}
          </Box>
        </Typography>
      </Box>
      <Divider />
    </>
  )
}

export default UserCases
