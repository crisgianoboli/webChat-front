import { useState, useContext } from 'react'
import { IconButton, Tooltip, Menu, Box, makeStyles } from '@material-ui/core'

import { styles, types, alignment, otherButtons } from './constants'
import AlignmentIcon from '../../assets/AlignmentIcon'
import ButtonItem from './ButtonItem'
import StylesItem from './StylesItem'
import TypesItem from './TypesItem'
import ToolbarAttachIcon from '../../assets/ToolbarAttachIcon'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'
import ExpandIcon from '../../assets/ExpandIcon'

const useStyles = makeStyles(() => ({
  button: {
    padding: '5px 12px',
  },
  emo: {
    display: 'inline-block',
    '& .draftJsEmojiPlugin__emojiSelectButton__3sPol': {
      borderRadius: '100%',
      border: 'none',
      width: '39px',
      height: '27px',
      backgroundColor: 'transparent',
    },
    '& .draftJsEmojiPlugin__emojiSelectButtonPressed__2Tezu': {
      borderRadius: '100%',
      border: 'none',
      width: '39px',
      height: '27px',
    },
    '& .draftJsEmojiPlugin__emojiSelectPopover__1J1s0': {
      position: 'fixed',
      bottom: '46px',
      marginLeft: '45px',
    },
  },
}))

const Toolbar = ({
  onChange,
  editorState,
  setDirection,
  emoji,
  selectedChannel,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { state, dispatch } = useContext(Context)
  const { modalState } = state
  const { button, emo } = useStyles()
  const { EmojiSelect, EmojiSuggestions } = emoji

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = direction => {
    setDirection(direction)
    handleClose()
  }

  const handleOthersChange = button => {
    // console.log(button)
  }

  const handleModal = () => {
    dispatch(actionsCreator.toggleModal(modalState.caseModal))
  }

  const handleEditorModal = () => {
    dispatch(actionsCreator.toggleModalEditor(modalState.editorState))
  }

  return (
    <Box display="flex">
      {selectedChannel === 'Mail' && (
        <>
          {styles.map(e => (
            <StylesItem
              key={e.label}
              {...e}
              onChange={onChange}
              editorState={editorState}
            />
          ))}

          <Tooltip title="Alineacion">
            <IconButton className={button} onClick={handleClick}>
              <AlignmentIcon />
            </IconButton>
          </Tooltip>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {alignment.map(e => (
              <ButtonItem {...e} onChange={handleChange} />
            ))}
          </Menu>

          {types.map(e => (
            <TypesItem
              key={e.label}
              {...e}
              onChange={onChange}
              editorState={editorState}
            />
          ))}
        </>
      )}
      <Box marginLeft="20px" display="flex" alignItems="center">
        {otherButtons.map(e => (
          <ButtonItem {...e} onChange={handleOthersChange} key={e.label} />
        ))}
        <Tooltip title="Adjuntar">
          <IconButton className={button} onClick={handleModal}>
            <ToolbarAttachIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Emoji" className={emo}>
          <div className={emo}>
            <EmojiSuggestions />
            <EmojiSelect />
          </div>
        </Tooltip>
        <Tooltip title="Expandir">
          <IconButton className={button} onClick={handleEditorModal}>
            <ExpandIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Toolbar
