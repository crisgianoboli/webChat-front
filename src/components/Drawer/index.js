import { Fragment, useContext } from 'react'
import { shape, string, arrayOf, bool, node } from 'prop-types'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Tooltip } from '@material-ui/core'
import { Box, Divider } from '@material-ui/core'

import { selectIcon } from '../../utils'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'
import BaseButton from '../UI/atoms/Buttons/BaseButton'

const useStyles = makeStyles(({ palette }) => ({
  dividerStyle: {
    backgroundColor: ({ themeMode }) => palette.dividerTable[themeMode],
    width: '100%',
  },
  root: {
    '& .MuiBackdrop-root': {
      backgroundColor: palette.primary.transparent,
    },
    '& .MuiDrawer-paper': {
      backgroundColor: ({ themeMode }) => palette.panel[themeMode],
      boxShadow: 'none',
      top: '82px',
      right: '65px',
      borderLeft: ({ themeMode }) =>
        `1px solid ${palette.background[themeMode]}`,
      maxHeight: 'calc(100vh - 82px)',
    },
  },
  icon: {
    height: '17px',
    width: '17px',
  },
  button: {
    height: '42px',
    margin: '5px 0',
  },
  drawer: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    borderLeft: ({ themeMode }) => `1px solid ${palette.background[themeMode]}`,
  },
}))

function TemporaryDrawer({ buttons, children }) {
  const { state, dispatch } = useContext(Context)
  const { modalState } = state
  const { dividerStyle, root, icon, button, drawer } = useStyles(modalState)
  const { t } = useTranslation()

  const toggleDrawer = name => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    dispatch(actionsCreator.toggleDrawer(!modalState.drawer.isOpen, name))
  }

  const handleClose = () => {
    dispatch(actionsCreator.toggleDrawer(!modalState.drawer, null))
  }

  // TODO faltan los iconos y nombre de bandera y exportar

  return (
    <Box
      className={drawer}
      display="flex"
      flexDirection="column"
      height="calc(100vh - 82px)"
      alignItems="center"
    >
      {buttons.map(({ name, divider }) => {
        const Icon = selectIcon(name)
        return (
          <Fragment key={name}>
            <Tooltip title={t(name)}>
              {/* TODO Atomic - Consumir atomo */}
              <BaseButton className={button} onClick={toggleDrawer(name)}>
                <Icon variant={icon} />
              </BaseButton>
            </Tooltip>
            {divider && (
              <Divider className={dividerStyle} data-testid={`hr-${name}`} />
            )}
          </Fragment>
        )
      })}
      <Drawer
        className={root}
        anchor="right"
        open={modalState.drawer.isOpen}
        onClose={handleClose}
      >
        {children}
      </Drawer>
    </Box>
  )
}

TemporaryDrawer.propTypes = {
  buttons: arrayOf(
    shape({
      name: string.isRequired,
      divider: bool,
    })
  ).isRequired,
  children: node.isRequired,
}

export default TemporaryDrawer
