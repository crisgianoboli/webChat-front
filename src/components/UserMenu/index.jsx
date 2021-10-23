import { useContext } from 'react'
import clsx from 'clsx'
import { bool, func, oneOf, string } from 'prop-types'

import { Drawer, makeStyles } from '@material-ui/core'

import withSpinner from '../Spinner'
import ContentDrawer from './Content'
import useGetUser from '../../hooks/getUser'
import { useAuth } from '../../hooks/auth/useAuth'
import { Context } from '../../context'
import { clientExitCase } from '../../utils'

const useStyles = makeStyles(({ palette }) => ({
  userMenu: {
    '& .MuiBackdrop-root': {
      backgroundColor: palette.primary.transparent,
    },
    '& .MuiDrawer-paper': {
      width: '370px',
    },
  },
}))

const ContentWithSpinner = withSpinner(ContentDrawer)

const UserMenu = ({ open, handleClose, anchor, className }) => {
  const {
    state: {
      modalState: {
        onPause,
        caseState: { blockedGuid, caseId },
      },
    },
  } = useContext(Context)
  const { userMenu } = useStyles()
  const { signout } = useAuth()
  const { data: userSession, isLoading } = useGetUser()
  const handleCloseSession = async () => {
    if (blockedGuid) {
      await clientExitCase(caseId, {
        onPause,
        blockedGuid,
      })
    }
    signout()
  }

  return (
    <Drawer
      className={clsx(userMenu, className)}
      open={open}
      anchor={anchor}
      onClose={handleClose}
    >
      <ContentWithSpinner
        isLoading={isLoading}
        userSession={userSession}
        handleCloseSession={handleCloseSession}
        handleClose={handleClose}
      />
    </Drawer>
  )
}

UserMenu.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  anchor: oneOf(['right', 'left']),
  className: string,
}

UserMenu.defaultProps = {
  anchor: 'right',
  className: '',
}

export default UserMenu
