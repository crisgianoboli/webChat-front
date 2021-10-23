import { Box } from '@material-ui/core'

import ConversationTag from './ConversationTag'

const ShowHiddenTags = ({ tags, onClick, onDelete }) => {
  return (
    <Box
      padding="10px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      {tags?.map(tag => (
        <ConversationTag
          tag={tag}
          key={`hidden-tag-${tag.TagId}`}
          showLabel
          onDelete={() => onDelete(tag)}
          onClick={onClick}
        />
      ))}
    </Box>
  )
}

export default ShowHiddenTags
