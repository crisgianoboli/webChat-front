import { useState, useEffect } from 'react'
import { bool } from 'prop-types'
import { List, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import SidebarListItem from './SidebarListItem'
import getGroupedBy from './items'
import { useGroupedCases } from '../../../hooks/useCases'
import withSpinner from '../../Spinner'
import useLocationParams from '../../../hooks/useLocationParams'

const useStyles = makeStyles(() => ({
  list: {
    marginRight: '5px',
    minHeight: '20vh',
  },
}))

function ListItems({ items, selectedIndex, handleListItemClick, showTooltip }) {
  return items.map((item, index) => (
    <SidebarListItem
      key={item.key}
      selected={selectedIndex === index}
      handleClick={() => handleListItemClick({ index, value: item.key })}
      label={item.key}
      badge={item.value}
      icon={item.icon}
      showTooltip={showTooltip}
    />
  ))
}
const ListWithSpinner = withSpinner(ListItems)

const SidebarMenuList = ({ showTooltip }) => {
  const { list } = useStyles()
  const { filter } = useLocationParams()
  const [selectedIndex, setSelectedIndex] = useState(filter)
  const history = useHistory()
  const [items, setItems] = useState([])
  const { isLoading, refetch } = useGroupedCases(d => setItems(getGroupedBy(d)))

  useEffect(() => {
    setSelectedIndex(filter ? filter : 'opened')
  }, [filter])
  const handleListItemClick = ({ value }) => {
    setSelectedIndex(value)
    refetch()
    history.push({
      pathname: '/cases',
      search: value !== 'opened' && `filter=${value}`,
    })
  }

  return (
    <List className={list}>
      <ListWithSpinner
        isLoading={isLoading}
        items={items}
        handleListItemClick={handleListItemClick}
        showTooltip={showTooltip}
        selectedIndex={selectedIndex}
      />
    </List>
  )
}

SidebarMenuList.propTypes = {
  showTooltip: bool,
}

SidebarMenuList.defaultProps = {
  showTooltip: false,
}

export default SidebarMenuList
