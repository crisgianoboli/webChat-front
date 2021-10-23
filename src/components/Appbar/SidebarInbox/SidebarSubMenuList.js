import { List, makeStyles } from '@material-ui/core'

import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined'

import SidebarListItem from './SidebarListItem'

const useStyles = makeStyles(() => ({
  list: {
    marginRight: '5px',
  },
}))

const SidebarSubMenuList = () => {
  const { list } = useStyles()

  const handleClick = () => {}

  return (
    <List className={list}>
      <SidebarListItem
        label="CasoSaliente"
        icon={<AssignmentReturnedOutlinedIcon />}
        handleClick={handleClick}
      />
    </List>
  )
}

export default SidebarSubMenuList
