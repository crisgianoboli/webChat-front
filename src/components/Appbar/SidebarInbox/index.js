import { bool } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Divider } from '@material-ui/core'

import SidebarMenuList from './SidebarMenuList'
import SidebarSubMenuList from './SidebarSubMenuList'
import SidebarRefresh from './SidebarRefresh'

const useStyles = makeStyles(({ palette }) => ({
  divider: {
    backgroundColor: palette.primary.grey,
  },
}))

const SidebarInbox = ({ showLabel }) => {
  const { divider } = useStyles()

  return (
    <>
      <SidebarRefresh showLabel={showLabel} />

      <SidebarMenuList showTooltip={!showLabel} />

      <Divider className={divider} />

      <SidebarSubMenuList />
    </>
  )
}

SidebarInbox.propTypes = {
  showLabel: bool.isRequired,
}

export default SidebarInbox
