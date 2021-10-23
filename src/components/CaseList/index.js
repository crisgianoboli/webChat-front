import { useParams } from 'react-router-dom'
import { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Content from './Content'
import useNotifications from '../../hooks/useNotifications'
import WithSpinner from '../Spinner'
import { Context } from '../../../src/context'

const ContentWithSpinner = WithSpinner(Content)

const useStyles = makeStyles(({ palette }) => ({
  navbar: {
    boxShadow: 'none',
    height: '100%',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    color: palette.primary.white,
  },
}))

const CaseList = () => {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)
  const { caseId } = useParams()
  const { data, isLoading } = useNotifications(caseId)
  return (
    <div className={classes.navbar}>
      <ContentWithSpinner isLoading={isLoading} notifications={data} />
    </div>
  )
}

export default CaseList
