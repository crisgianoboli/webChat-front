import { useContext, useState, useCallback } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import ConversationTag from './ConversationTag'
import useGetTags from '../../../../hooks/useTags'

import { Context } from '../../../../context'
import SearchTags from '../../../SearchTags'

//FIXME componentizar el input

const useStyles = makeStyles(({ palette }) => ({
  containerInput: {
    padding: '0.3rem',
    display: 'flex',
    justifyContent: 'center',
  },
  containerTags: {
    padding: '0.2rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '8.6rem',
    alignItems: 'flex-start',
  },
  containerButtons: {
    padding: '0.3rem',
    display: 'flex',
    width: '100%',
    height: '25px',
    justifyContent: 'flex-start',
  },
  button: {
    marginRight: '0.18rem',
  },
  filledInput: {
    height: '1.438rem',
    background: palette.primary.light,
    borderRadius: '12px',
    color: palette.primary.dark,
    //padding: '0 6px',
    fontSize: '0.75rem',
    '&$disabled': {
      background: palette.primary.athensGray,
      color: palette.primary.dark,
    },
    '&:hover': {
      backgroundColor: palette.primary.light,
    },
    '&$focused': {
      backgroundColor: palette.primary.light,
    },
    '& .MuiFilledInput-input': {
      padding: '0.188rem 0.625rem',
    },
  },
  input: {
    borderRadius: '12px',
    color: palette.primary.dark,
    fontSize: '0.75rem',
    flexGrow: 1,
    margin: '0px',
    '& :focus': {
      borderRadius: '12px',
      boxShadow: '0px 0px 0px 1px rgb(63 150 180 / 70%)',
    },
  },
  muted: {
    color: palette.primary.corduroy,
  },
  containerSelectedTags: {
    flexWrap: 'wrap',
    overflowY: 'auto',
    display: 'flex',
  },
}))

const ContentSelectTags = ({ handleClose, create, select, tagsSelected }) => {
  const { containerTags } = useStyles()

  const [search, setSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const {
    state: {
      modalState: {
        caseState: { groupAccountId, allowUserToCreateTags },
      },
    },
  } = useContext(Context)

  const { data: tags, isSuccess } = useGetTags({
    groupAccountId,
    allowUserToCreateTags,
  })

  const deleteTag = useCallback(
    tag => {
      setSelectedTags(prevState => prevState.filter(e => e.TagId !== tag.TagId))
    },
    [setSelectedTags]
  )

  const handleChange = ({ target }) => {
    setSearch(target.value)
  }

  const findSelected = tagId => {
    return selectedTags.find(({ TagId }) => tagId === TagId)
  }

  const selectedTag = useCallback(
    tag => {
      if (!tagsSelected.find(item => item.TagId === tag.TagId)) {
        setSelectedTags(prevState => [...prevState, tag])
      }
    },
    [setSelectedTags, tagsSelected]
  )

  const handleClickCreateTag = () => {
    if (filteredTags.length === 0 && selectedTags.length > 0) {
      create(search)
      select(selectedTags)
    } else if (filteredTags.length === 0) {
      create(search)
    } else {
      select(selectedTags)
    }
  }

  const filteredTags = tags?.filter(({ TagName }) => {
    return TagName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <SearchTags
        selectedTags={selectedTags}
        handleChange={handleChange}
        deleteTag={deleteTag}
        search={search}
        handleClickAddButton={handleClickCreateTag}
        handleClickCloseButton={handleClose}
        disabledButton={selectedTags.length === 0 && !search}
      />
      <Box className={containerTags}>
        {isSuccess &&
          filteredTags.map(tag => (
            <ConversationTag
              tag={tag}
              key={`tag-${tag.TagId}`}
              showLabel={true}
              onClick={selectedTag}
              disabled={!!findSelected(tag.TagId)}
            />
          ))}
      </Box>
    </>
  )
}

export default ContentSelectTags
