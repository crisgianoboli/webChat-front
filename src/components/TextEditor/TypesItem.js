import { RichUtils } from 'draft-js'
import ButtonItem from './ButtonItem'

const ToolbarItem = props => {
  const { onChange, editorState } = props
  const handleChange = state => {
    onChange(RichUtils.toggleBlockType(editorState, state))
  }

  return <ButtonItem {...props} onChange={handleChange} />
}

export default ToolbarItem
