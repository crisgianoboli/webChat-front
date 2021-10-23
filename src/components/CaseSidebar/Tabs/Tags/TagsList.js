import { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    overflowY: 'auto',
    height: '450px',
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: '13px',
    lineHeight: '18px',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
  listItem: {
    borderBottom: `1px solid ${palette.textPrimary.main}`,
  },
  icon: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
}))

function TagsList({ tagsData }) {
  const { state } = useContext(Context)
  const { root, title, icon, listItem } = useStyles(state.modalState)
  const handleClick = ({ target }) => {
    //TODO
    console.log(target)
  }
  return (
    <List className={root}>
      {tagsData.map((value, index) => {
        return (
          <ListItem
            className={listItem}
            key={index}
            role={undefined}
            dense
            button
            onClick={handleClick}
          >
            <ListItemText className={title} id={index} primary={value} />
            <ListItemSecondaryAction>
              <StarBorderIcon className={icon} />
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}
export default TagsList
