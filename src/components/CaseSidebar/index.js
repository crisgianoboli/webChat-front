import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Box, makeStyles } from '@material-ui/core'

import useAttachments, { useCaseAttachments } from '../../hooks/useAttachments'
import Drawer from '../Drawer'
import { buttonsDrawer, selectComponent } from './constants'
import { Context } from '../../context'

const useStyles = makeStyles(({ palette }) => ({
  tabTitle: {
    color: ({ themeMode }) => palette.button[themeMode],
    fontFamily: 'Nunito',
    fontSize: '0.8125rem',
    fontWeight: 600,
    lineHeight: '1.125rem',
    marginLeft: '1.125rem',
  },
  titleContainer: {
    backgroundColor: ({ themeMode }) => palette.drawerTitle[themeMode],
  },
  caseSidebar: {
    height: '100px',
  },
  caseSidebarInner: {
    overflowY: 'auto',
  },
}))

const CaseSidebar = ({ caseData }) => {
  const { state } = useContext(Context)
  const { modalState } = state
  const { caseId } = useParams()

  const { tabTitle, titleContainer, caseSidebar, caseSidebarInner } =
    useStyles(modalState)

  const caseAttachData = useCaseAttachments(
    caseId,
    caseData.caseConversationId
  ).data

  const { isLoading, data } = useAttachments(caseData.caseConversationId)

  const child = modalState.drawer.name
  const caso = modalState.drawer.caseId
    ? `- caso ${modalState.drawer.caseId}`
    : ''

  return (
    <Drawer classes={caseSidebar} buttons={buttonsDrawer}>
      <Box
        minWidth="300px"
        minHeight="calc(100vh - 82px)"
        display="flex"
        flexDirection="column"
        className={caseSidebarInner}
      >
        <div className={titleContainer}>
          <h3 className={tabTitle}>{`${child} ${caso}`}</h3>
        </div>
        {child && caseAttachData
          ? selectComponent(child, caseData, caseAttachData, isLoading)
          : selectComponent(child, caseData, data, isLoading)}
      </Box>
    </Drawer>
  )
}

export default CaseSidebar
