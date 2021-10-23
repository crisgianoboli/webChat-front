//FIXME Duplicado en TypesItem ./TypesItem
import { RichUtils } from 'draft-js'
import ButtonItem from './ButtonItem'

const ToolbarItem = props => {
  const { onChange, editorState } = props
  const handleChange = state => {
    onChange(RichUtils.toggleInlineStyle(editorState, state))
  }

  return <ButtonItem {...props} onChange={handleChange} />
}

export default ToolbarItem
