import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from '@material-ui/core'

import theme from '../../theme/theme'
import UserCases from './UserCases'

const mockData = {
  UserSession: {
    AccountAssigned: [
      {
        AccountName: 'Epiron test',
      },
    ],
    AllowAutomatedTagView: false,
    AssigmentCaseTypeInternalCode: 1,
    AssigmentCaseTypeName: 'Estados',
    ControlLoguin: true,
    EventTimeReleaseList: [],
    NewRecordsToAssign: 2,
    PendingRecordToAssign: 2,
    PersonAutomaticOpenCases: true,
    PersonFullName: 'Ferraris Ariel',
    UserName: 'aferraris',
  },
}
test('render UserCases con los casos pasados por props', () => {
  render(
    <ThemeProvider theme={theme}>
      <UserCases userSession={mockData.UserSession} />
    </ThemeProvider>
  )
  const newRecordsToAssign = screen.queryByTestId('newRecordsToAssign')
  const pendingRecordToAssign = screen.queryByTestId('pendingRecordToAssign')
  const assigmentCaseTypeName = screen.queryByTestId('assigmentCaseTypeName')
  expect(newRecordsToAssign).toBeTruthy()
  expect(newRecordsToAssign).toHaveTextContent(2)
  expect(pendingRecordToAssign).toBeTruthy()
  expect(pendingRecordToAssign).toHaveTextContent(2)
  expect(assigmentCaseTypeName).toBeTruthy()
  expect(assigmentCaseTypeName).toHaveTextContent('Estados')
})
