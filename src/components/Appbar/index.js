import { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Grid, Box } from '@material-ui/core'

import AppbarNavigation from './AppbarNavigation'
import AppbarAlerts from './AppbarAlerts'
import AppbarUserPanel from './AppbarUserPanel'
import EpironLogo from '../../assets/EpironLogo'
import DarkLogo from '../../assets/DarkLogo'
import UserMenu from '../UserMenu'
import SimpleModal from '../Modal'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'
import SidebarListItem from './SidebarInbox/SidebarListItem'
import { configMenuItems, selectComponent } from './constants'

const useStyles = makeStyles(({ palette, spacing }) => ({
  nav: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderBottom: ({ themeMode }) =>
      `1px solid ${palette.background[themeMode]}`,
    boxShadow: 'none',
    color: `${({ themeMode }) => palette.textPrimary[themeMode]}`,
  },
  toolbar: {
    minHeight: spacing(10),
  },
  alertGrid: {
    minHeight: spacing(10),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  logo: {
    width: '122px',
    paddingTop: '5px',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fill: ({ themeMode }) => palette.textPrimary[themeMode],
  },
}))
const Appbar = () => {
  const {
    state: {
      modalState: { configModal, themeMode },
    },
  } = useContext(Context)
  const { nav, toolbar, logo, alertGrid } = useStyles({ themeMode })
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selected, setSelected] = useState('Usuario')
  const [component, setComponent] = useState(selectComponent(selected))
  const { t } = useTranslation()
  const handleClickAvatar = () => {
    setOpenDrawer(prevState => !prevState)
  }
  const handleClickButtonItem = e => {
    setSelected(e)
    setComponent(selectComponent(e))
  }
  return (
    <>
      <AppBar className={nav} position="static">
        <Toolbar className={toolbar}>
          <Grid item xs={2} lg={2}>
            <div className={logo}>
              {themeMode === 'dark' ? <DarkLogo /> : <EpironLogo />}
            </div>
          </Grid>
          <Grid item xs={4} lg={4}>
            <AppbarNavigation />
          </Grid>
          <Grid item xs={6} lg={6} className={alertGrid}>
            <AppbarAlerts />
            <AppbarUserPanel handleClickAvatar={handleClickAvatar} />
          </Grid>
        </Toolbar>
        {openDrawer && (
          <UserMenu
            open={openDrawer}
            anchor="right"
            handleClose={handleClickAvatar}
          />
        )}
      </AppBar>
      <SimpleModal
        open={configModal}
        toggleModal={actionsCreator.toggleConfigModal}
        title={t('Configuracion')}
        alignTitle="left"
        titleColor={`textPrimary.${themeMode}`}
        textTransform="capitalize"
        width="48.75rem"
        padding="0"
        height="33.125rem"
        bgColor={`panel.${themeMode}`}
      >
        <Box display="flex">
          <Grid item xs={3}>
            {configMenuItems.map(({ label, icon }, i) => (
              <SidebarListItem
                key={`menu-${i}`}
                label={label}
                customHandleClick={handleClickButtonItem}
                icon={icon}
                selected={selected === label ? true : false}
              />
            ))}
          </Grid>
          <Grid xs={1} />
          <Grid item xs={8}>
            {component}
          </Grid>
        </Box>
      </SimpleModal>
    </>
  )
}
export default Appbar
