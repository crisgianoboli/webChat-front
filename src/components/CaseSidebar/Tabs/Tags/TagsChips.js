import { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { Box } from '@material-ui/core'

import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    marginTop: '20px',
  },
  chip: {
    fontFamily: 'Nunito',
    fontSize: '12px',
    lineHeight: '16px',
    color: palette.primary.dark,
    background: palette.primary.polar,
    borderRadius: '9px',
    '&:hover': {
      fontFamily: 'Nunito',
      fontSize: '12px',
      lineHeight: '16px',
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    },
  },
}))

function SmallChips({ labels }) {
  const { state } = useContext(Context)
  const { root, chip } = useStyles(state.modalState)

  const handleClick = () => {
    //TODO
    console.info('You clicked the Chip.')
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      className={root}
    >
      {labels.map((e, index) => (
        <Chip
          className={chip}
          size="small"
          key={index}
          label={e}
          onClick={handleClick}
        />
      ))}
    </Box>
  )
}

export default SmallChips
