import { RichUtils } from 'draft-js'

export const highligthPlugin = direction => {
  return {
    customStyleMap: {
      HIGHLIGHT: {
        display: 'flex',
        justifyContent: direction,
      },
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === 'h') {
        return 'highlight'
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === 'highlight') {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'))
        return true
      }
    },
  }
}
