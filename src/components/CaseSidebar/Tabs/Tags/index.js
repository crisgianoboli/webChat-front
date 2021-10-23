import { useContext, useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

import CollapseButton from '../../../CollapseButton'
import ConversationTag from '../../../Conversation/ConversationBody/ConversationChatBubble/ConversationTag'
import useGetTags, { useCreateTag } from '../../../../hooks/useTags'
import SearchTags from '../../../SearchTags'
import { actionsCreator } from '../../../../context/modals/actions'
import { Context } from '../../../../context'

const useStyles = makeStyles(({ palette }) => ({
  title: {
    height: '2.813rem',
    backgroundColor: ({ themeMode }) =>
      palette.drawerInputsContainer[themeMode],
    display: 'flex',
    alignItems: 'center',
    // FIXME themeMode
    borderBottom: '1px solid #EDF4FA',
  },
  titleText: {
    textTransform: 'uppercase',
    color: ({ themeMode }) => palette.button[themeMode],
    marginLeft: '1.125rem',
    fontWeight: 700,
    fontSize: '0.875rem',
  },
  tagContainer: {
    height: '3.125rem',
    borderBottom: ({ themeMode }) =>
      `1px solid ${palette.dividerTable[themeMode]}`,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  disabled: {},
  focused: {},
  collapse: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    height: 'calc(100vh - 55vh)',
    overflowY: 'auto',
  },
}))

function Tags() {
  const {
    state: {
      modalState: { caseState, themeMode, drawer },
    },
    dispatch,
  } = useContext(Context)

  const { title, titleText, tagContainer, collapse } = useStyles({ themeMode })
  const { t } = useTranslation()
  const { data: tags, isSuccess } = useGetTags({
    groupAccountId: caseState.groupAccountId,
    AllowUserToCreateTags: caseState.groupAccount.AllowUserToCreateTags,
  })
  const { mutate, isSuccess: createSuccess } = useCreateTag()

  const [selectedTags, setSelectedTags] = useState([])
  const [search, setSearch] = useState('')

  const selectedTag = useCallback(
    tag => {
      setSelectedTags(prevState => [...prevState, tag])
    },
    [setSelectedTags]
  )

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

  const filteredTags = tags?.filter(({ TagName }) => {
    return TagName.toLowerCase().includes(search.toLowerCase())
  })

  const handleClick = () => {
    mutate({
      tagName: search,
      userAssignedId: caseState.userAssignedId,
      groupAccountId: caseState.groupAccountId,
    })
  }

  const handleClickCancel = () => {
    dispatch(actionsCreator.toggleDrawer(!drawer.isOpen))
  }

  useEffect(() => {
    if (createSuccess) {
      dispatch(actionsCreator.toggleDrawer(!drawer.isOpen))
    }
  }, [createSuccess, dispatch, drawer])
  // TODO hacer componente TextField

  return (
    <>
      <Box className={title}>
        <Typography className={titleText}>{t('Caso')}</Typography>
      </Box>
      <SearchTags
        selectedTags={selectedTags}
        handleChange={handleChange}
        deleteTag={deleteTag}
        search={search}
        filterButton
        handleClickAddButton={handleClick}
        disabledButton={search.length < 3}
        handleClickCloseButton={handleClickCancel}
      />
      <Box display="flex" flexDirection="column" height="100%">
        <CollapseButton buttonLabel="todos los tags">
          <Box className={collapse}>
            {isSuccess &&
              filteredTags.map(tag => (
                <Box key={tag.TagId} className={tagContainer}>
                  <ConversationTag
                    tag={tag}
                    onClick={selectedTag}
                    disabled={!!findSelected(tag.TagId)}
                  />
                </Box>
              ))}
          </Box>
        </CollapseButton>
      </Box>
    </>
  )
}
export default Tags
