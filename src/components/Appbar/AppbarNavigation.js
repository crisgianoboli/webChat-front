import AppbarButtonLink from './../UI/atoms/Buttons/AppbarButtonLink'
import { makeStyles } from '@material-ui/core/styles'

import { navLinks } from './constants'

const useStyles = makeStyles(({ palette, spacing }) => ({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
}))

const AppbarNavigation = () => {
  const { navDisplayFlex } = useStyles()

  return (
    <div className={navDisplayFlex}>
      {navLinks.map(({ title, path }) => (
        <AppbarButtonLink title={title} path={path} />
      ))}
    </div>
  )
}

export default AppbarNavigation
