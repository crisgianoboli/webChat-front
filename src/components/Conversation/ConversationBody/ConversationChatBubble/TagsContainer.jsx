import { useState, useContext, useCallback, useEffect } from 'react'
import { array } from 'prop-types'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import ConversationTag from './ConversationTag'
import ContentSelectTags from './ContentSelectTags'
import useGetUser from '../../../../hooks/getUser'
import { useCreateTag } from '../../../../hooks/useTags'
import useSetTags from '../../../../hooks/useSetTags'
import { useRemoveConversationTag } from '../../../../hooks/useTags'
import useConversation from '../../../../hooks/useConversation'
import { Context } from '../../../../context'
import Popover from '../../../Popover'
import BaseButton from '../../../UI/atoms/Buttons/BaseButton'
import ShowHiddenTags from './ShowHiddenTags'
import Modal from '../../../Modal'
import ConfirmDialog from '../../../ConfirmDialog'
import WarningIcon from '../../../../assets/WarningIcon'
import TagButton from '../../../UI/atoms/Buttons/TagButton'

const useStyles = makeStyles(({ palette }) => ({
  btnTag: {
    color: palette.secondary.orange,
    borderRadius: '1rem',
    fontSize: '0.8rem',
    margin: '0 0.5rem',
  },
  iconSize: {
    width: '0.9rem',
    height: '0.9rem',
  },
}))

const TagsContainer = ({ tags, caseCommentId, conversationId }) => {
  const { btnTag, iconSize } = useStyles()
  const { t } = useTranslation()

  const [anchorElPopoverAddTags, setAnchorElPopoverAddTags] = useState(null)
  const [anchorElPopoverShowHiddenTags, setAnchorElPopoverShowHiddenTags] =
    useState(null)
  const [openConfirm, setOpenConfirm] = useState(false)
  const [deleteTag, setDeleteTag] = useState(false)

  const {
    state: {
      modalState: {
        caseState: { userAssignedId, groupAccountId },
      },
    },
  } = useContext(Context)

  const { mutate, isSuccess: removeSuccess } = useRemoveConversationTag()
  const { mutate: mutation, isSuccess } = useSetTags()
  const { mutate: createMutation, isSuccess: createSuccess } = useCreateTag()
  const { refetch } = useConversation(conversationId)
  const { data } = useGetUser()

  const filterTags = tags.filter(
    tag =>
      (!data?.AllowAutomatedTagView && tag.TagTypeInternalCode !== 3) ||
      (tag.AllowTagView && tag.TagTypeInternalCode !== 3) ||
      (data?.AllowAutomatedTagView && tag.AllowTagView)
  )

  const tagsAux = filterTags.slice(0, 3)

  const createAndAssignTag = useCallback(
    tagName => {
      createMutation({
        tagName,
        userAssignedId,
        caseCommentId,
        groupAccountId,
      })
    },
    [caseCommentId, createMutation, groupAccountId, userAssignedId]
  )

  const selectTags = useCallback(
    selectedTags => {
      mutation({ caseCommentId, userId: userAssignedId, selectedTags })
    },
    [caseCommentId, mutation, userAssignedId]
  )

  const handleOpenPopoverAddTags = useCallback(event => {
    setAnchorElPopoverAddTags(event.currentTarget)
  }, [])

  const handleClosePopoverAddTags = useCallback(() => {
    setAnchorElPopoverAddTags(null)
  }, [])

  const handleOpenPopoverShowHiddenTags = useCallback(event => {
    setAnchorElPopoverShowHiddenTags(event.currentTarget)
  }, [])

  const handleClosePopoverShowHiddenTags = useCallback(() => {
    setAnchorElPopoverShowHiddenTags(null)
  }, [])

  const handleClick = () => {}

  useEffect(() => {
    if (isSuccess || createSuccess || removeSuccess) {
      setAnchorElPopoverAddTags(null)
      refetch()
    }
  }, [isSuccess, createSuccess, removeSuccess, refetch])

  const onDelete = useCallback(
    ({ GroupAccountId, CaseCommentId, TagId }) => {
      mutate({
        groupAccountId: GroupAccountId,
        caseCommentId: CaseCommentId,
        tagId: TagId,
        userId: userAssignedId,
      })
    },
    [mutate, userAssignedId]
  )

  const handleDeleteTag = useCallback(
    tag => {
      setOpenConfirm(true)
      setDeleteTag(tag)
    },
    [setDeleteTag, setOpenConfirm]
  )

  return (
    <>
      <TagButton onClick={handleOpenPopoverAddTags} />
      <Popover
        handleClose={handleClosePopoverAddTags}
        anchorEl={anchorElPopoverAddTags}
        id={`asign-tags-${caseCommentId}`}
      >
        <ContentSelectTags
          tagsSelected={tagsAux}
          handleClose={handleClosePopoverAddTags}
          caseCommentId={caseCommentId}
          create={createAndAssignTag}
          select={selectTags}
        />
      </Popover>
      {tagsAux.map(
        tag =>
          tag.AllowTagView && (
            <ConversationTag
              tag={tag}
              key={tag.CaseCommentTagId}
              onClick={handleClick}
              onDelete={() => handleDeleteTag(tag)}
            />
          )
      )}

      {filterTags.length > 3 && (
        <>
          <BaseButton
            className={btnTag}
            onClick={handleOpenPopoverShowHiddenTags}
          >
            <AddIcon className={iconSize} />
            {`${filterTags.length - 3}`}
          </BaseButton>
          <Popover
            id={`hidden-tags-${caseCommentId}`}
            handleClose={handleClosePopoverShowHiddenTags}
            anchorEl={anchorElPopoverShowHiddenTags}
          >
            <ShowHiddenTags
              tags={filterTags.slice(3)}
              onClick={handleClick}
              onDelete={handleDeleteTag}
            />
          </Popover>
        </>
      )}

      {openConfirm && (
        <Modal
          title={t('Atencion')}
          open={openConfirm}
          customToggle={setOpenConfirm}
          alignTitle="center"
          bgTitle="primary.polar"
          width="400px"
          height="240px"
          padding="10px 25px 25px 25px"
        >
          <ConfirmDialog
            setOpen={setOpenConfirm}
            onConfirm={() => onDelete(deleteTag)}
            title={t('EliminarTag')}
            icon={<WarningIcon />}
          >
            {`${t('EliminarTagConfirm')} "${deleteTag.TagName}"?`}
          </ConfirmDialog>
        </Modal>
      )}
    </>
  )
}
TagsContainer.propTypes = {
  tags: array.isRequired,
}
TagsContainer.defaultProps = {
  tags: [],
}
export default TagsContainer
