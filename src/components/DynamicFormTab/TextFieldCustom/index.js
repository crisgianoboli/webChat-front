import { useState } from 'react'
import { func, string } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { MoreVert, DeleteOutline, AddCircleOutline } from '@material-ui/icons'

import Popover from '../../Popover'

const useStyles = makeStyles(({ palette }) => ({
  error: {
    color: palette.primary.cinnabar,
    fontFamily: 'Roboto',
    fontSize: '0.8rem',
  },
  inputOutlined: {
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: '0px',
    },
    '& :hover .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.primary.main,
    },
    '& .Mui-required': {
      color: palette.primary.red,
    },
  },
  iconButton: {
    padding: '6px',
  },
}))

const TextFieldCustom = ({
  id,
  label,
  name,
  type,
  value,
  handleChange,
  error,
  maxCharacter,
  required,
  disabled,
  multiline,
  rows,
  onDuplicate,
}) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box margin="20px 0" width="100%">
      <TextField
        fullWidth
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
        type={type}
        error={error}
        required={required}
        disabled={disabled}
        variant="outlined"
        className={classes.inputOutlined}
        maxRows={5}
        inputProps={{
          maxLength: maxCharacter,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick} className={classes.iconButton}>
                <MoreVert />
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        multiline={multiline}
        rows={rows}
      />

      {/* {error && (
        <Box component="span" className={classes.error}>
          {error}
        </Box>
      )} */}

      <Popover
        id={`edit-input-${id}`}
        handleClose={handleClose}
        anchorEl={anchorEl}
      >
        <List component="nav">
          {onDuplicate && (
            <ListItem button onClick={onDuplicate}>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="Agregar" />
            </ListItem>
          )}
          <ListItem button>
            <ListItemIcon>
              <DeleteOutline />
            </ListItemIcon>
            <ListItemText primary="Eliminar" />
          </ListItem>
        </List>
      </Popover>
    </Box>
  )
}

TextFieldCustom.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  error: string,
}

export default TextFieldCustom
