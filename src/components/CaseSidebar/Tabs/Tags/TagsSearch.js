import { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'

import SearchIcon from '../../../../assets/SearchIcon'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '16.4375em',
    borderRadius: '0.75em',
    boxShadow: 'none',
  },
  input: {
    marginLeft: '1px',
    flex: 1,
    '& ::placeholder': {
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      fontFamily: 'Nunito',
      fontStyle: 'italic',
      fontWeight: '300',
      fontSize: '0.75em',
      lineHeight: '1em',
    },
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: '0.674375em',
    height: '0.66625em',
    fontSize: '0.75em',
  },
}))

const handleSubmit = e => {
  //TODO
  e.preventDefault()
}

function SearchInput() {
  const { state } = useContext(Context)
  const { root, input, iconButton, icon } = useStyles(state.modalState)

  return (
    <Paper component="form" className={root} onSubmit={handleSubmit}>
      <IconButton type="submit" className={iconButton} aria-label="search">
        <SearchIcon variant={icon} />
      </IconButton>
      <InputBase
        className={input}
        placeholder="Buscar Tags"
        inputProps={{ 'aria-label': 'search Tags' }}
      />
    </Paper>
  )
}
export default SearchInput
