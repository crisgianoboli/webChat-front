import { useContext } from 'react'
import { func, string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Box, makeStyles, Typography } from '@material-ui/core'

import ImageAvatars from '../UI/atoms/Avatar'
import Divider from '../UI/atoms/Divider'
import { Context } from '../../../src/context'
import BtnOutline from '../BtnOutline'

const useStyles = makeStyles(({ palette, typography }) => ({
  profile: {
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    maxHeight: '6rem',
    color: ({ themeMode }) => palette.textSecondary[themeMode],
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
  },
  user: {
    fontFamily: typography.fontFamily,
    fontWeight: 400,
    fontSize: 14,
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
}))

const Profile = ({ name, onClick }) => {
  const { state } = useContext(Context)
  const { profile, user } = useStyles(state.modalState)
  const { t } = useTranslation()

  return (
    <>
      <Box className={profile}>
        <ImageAvatars size="medium" />
        <Typography className={user} data-testid="profile-name">
          {name}
        </Typography>
        <BtnOutline onClick={onClick}>{t('CerrarSesion')}</BtnOutline>
      </Box>
      <Divider />
    </>
  )
}

Profile.propTypes = {
  name: string.isRequired,
  onClick: func.isRequired,
}

Profile.defaultProps = {
  name: '',
}

export default Profile
