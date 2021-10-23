import { useState, useContext } from 'react'
import { string, any, arrayOf, bool, shape } from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MuiCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { Context } from '../../context'
import { actionsCreator } from '../../context/tableCells/actions'
import BaseButton from '../UI/atoms/Buttons/BaseButton'

const useStyles = makeStyles(({ palette }) => ({
  button: {
    alignItems: 'center',
    color: palette.primary.main,
    display: 'flex',
    fontSize: '11px',
    justifyContent: 'space-around',
    width: '160px',
  },
  checkbox: {
    padding: '2px',
  },
  menuItem: {
    fontSize: '12px',
    paddingRight: '10px',
  },
  label: {
    fontSize: '12px',
    marginRight: 0,
    width: '100%',
  },
}))

const Checkbox = withStyles(({ palette }) => ({
  root: {
    color: palette.primary.main,
  },
}))(MuiCheckbox)

function SimpleMenu({ title, Logo, items }) {
  const { button, checkbox, menuItem, label } = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const { dispatch } = useContext(Context)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = ({ target }) => {
    dispatch(
      actionsCreator.setCell({ id: target.name, isSelected: target.checked })
    )
  }

  return (
    <>
      {/* TODO atomic - Consumir atomo */}
      <BaseButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={button}
      >
        {Logo && <Logo />}
        {title}
      </BaseButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // className={menu}
      >
        {items.map(item => (
          <MenuItem className={menuItem} key={item.id}>
            {/* TODO se rompe al scrollear y seleccionar un item */}
            <FormControlLabel
              className={label}
              control={
                <Checkbox
                  className={checkbox}
                  size="small"
                  onChange={handleChange}
                  name={item.id}
                  checked={item.isSelected}
                />
              }
              label={item.label}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

SimpleMenu.propTypes = {
  title: string.isRequired,
  Logo: any,
  items: arrayOf(shape({})).isRequired,
  isCheckbox: bool,
}

SimpleMenu.defaultProps = {
  Logo: null,
  isCheckbox: false,
}

export default SimpleMenu
