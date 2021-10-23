import { useContext } from 'react'

import { makeStyles } from '@material-ui/core'

import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  rectangle: {
    alignItems: 'center',
    backgroundColor: ({ themeMode }) => palette.boxPanelTable[themeMode],
    border: ({ themeMode }) => `1px solid ${palette.boxPanelTable[themeMode]}`,
    borderRadius: '8px',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '5px 8px',
    whiteSpace: 'nowrap',
  },
  rectangleColor: {
    backgroundColor: ({ themeMode }) => palette.boxPanelTable[themeMode],
    border: ({ themeMode }) => `1px solid ${palette.boxPanelTable[themeMode]}`,
  },
}))

function Rectangle({ AlertColorsCode, backgroundByAlert, children }) {
  const { state } = useContext(Context)
  const classes = useStyles(state.modalState)

  return (
    <span
      className={`${classes.rectangle} ${
        backgroundByAlert && classes.rectangleColor
      }`}
    >
      {children}
    </span>
  )
}

export default Rectangle
