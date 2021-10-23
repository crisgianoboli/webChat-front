import { useState, useContext } from 'react'
import clsx from 'clsx'
import { RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import { useTranslation } from 'react-i18next'
import createEmojiPlugin from 'draft-js-emoji-plugin'
import { Box, makeStyles } from '@material-ui/core'

import { highligthPlugin } from './plugins'
import Toolbar from './Toolbar'
import ToolbarExpanded from './ToolbarExpanded'
import Modal from '../Modal'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'

import '../../../node_modules/draft-js/dist/Draft.css'
import '../../../node_modules/draft-js-emoji-plugin/lib/plugin.css'

const highlight = highligthPlugin('red')
const emojiPlugin = createEmojiPlugin()

const useStyles = makeStyles(({ palette }) => ({
  editorContainer: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    border: ({ themeMode }) => `1px solid'${palette.boxBubble[themeMode]}`,
    borderRight: 'inherit',
    boxSizing: 'border-box',
    flex: '1 1 auto',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    minHeight: '20px',
    minWidth: 0,
    outline: 'none',
    padding: '7px',
    willChange: 'width',
    '& .DraftEditor-root': {
      maxHeight: '100px',
      overflow: 'auto',
      borderBottom: `0.8px solid ${palette.primary.main}`,
      margin: '7px 0 4px 7px',
      paddingBottom: '5px',
    },
  },
  length: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    fontFamily: 'Nunito',
    fontSize: '11px',
    lineHeight: '15px',
    margin: '15px 5px',
  },
  modalEditorStyle: {
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    justifyContent: 'space-between',
    maxHeight: 300,
    '& .DraftEditor-root': {
      borderBottom: 'none',
      height: '100%',
      margin: '7px 0 4px 7px',
      maxHeight: 300,
      overflow: 'auto',
      paddingBottom: '5px',
    },
  },
}))

const TextEditor = ({
  maxLength,
  editorState,
  setEditorState,
  modalEditor,
  setModalEditor,
  selectedChannel,
}) => {
  // TODO agregar proptypes
  const { state } = useContext(Context)
  const { modalState } = state
  const { editorContainer, length, modalEditorStyle } = useStyles(
    state.modalState
  )
  const { t } = useTranslation()
  const [direction, setDirection] = useState('left')
  const plugins = [highlight, emojiPlugin]
  const textLength = editorState.getCurrentContent().getPlainText('').length
  const words =
    editorState.getCurrentContent().getPlainText('').split(' ').length - 1

  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const handleModalKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(modalEditor, command)
    if (newState) {
      setModalEditor(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const handleChange = state => {
    setEditorState(state)
  }

  const handleChangeModal = state => {
    setModalEditor(state)
  }

  // TODO ver q onda con esto
  const handleEditorChange = state => {
    state.getCurrentContent().getPlainText('').length <= maxLength
      ? setEditorState(state)
      : alert('este es tu limite campeon!')
  }

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box className={editorContainer}>
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          handleKeyCommand={handleKeyCommand}
          placeholder="Escribe aquí tu mensaje"
          plugins={plugins}
          textAlignment={direction}
        />
        <Toolbar
          editorState={editorState}
          onChange={handleChange}
          setDirection={setDirection}
          emoji={emojiPlugin}
          selectedChannel={selectedChannel}
        />
      </Box>
      <Box display="flex">
        <Box className={length} component="span">
          {`${words} ${t('Palabras')}`}
        </Box>
        <Box className={length} component="span">
          {`${textLength}/${maxLength} ${t('Caracteres')}`}
        </Box>
      </Box>
      <Modal
        open={modalState.editorModal}
        width="80vw"
        title="Redactar mensaje - Vista expandida"
        bgTitle="#F3F6FB"
        toggleModal={actionsCreator.toggleModalEditor}
      >
        <Box className={clsx(editorContainer, modalEditorStyle)}>
          <Editor
            editorState={modalEditor}
            onChange={handleChangeModal}
            handleKeyCommand={handleModalKeyCommand}
            placeholder="Escribe aquí tu mensaje"
            plugins={plugins}
            textAlignment={direction}
          />
          <ToolbarExpanded
            editorState={modalEditor}
            onChange={handleChangeModal}
            setDirection={setDirection}
            emoji={emojiPlugin}
            selectedChannel={selectedChannel}
          />
        </Box>
      </Modal>
    </Box>
  )
}

export default TextEditor
