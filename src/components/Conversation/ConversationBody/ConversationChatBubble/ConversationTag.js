import { useContext, useState, useCallback, memo } from 'react'
import { func, shape, bool } from 'prop-types'

import { Avatar, Chip, makeStyles, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import { selectTagAvatarLetter } from '../../../../utils'
import { Context } from '../../../../context'
import EditModal from './EditModal'

const useStyles = makeStyles(({ palette }) => {
  const getTagColor = ({ tag }) =>
    tag.TagTypeInternalCode === 2
      ? palette.secondary.red
      : tag.TagTypeInternalCode === 1
      ? palette.primary.main
      : palette.secondary.orange
  const getBgColor = ({ tag }) =>
    tag.TagTypeInternalCode === 2
      ? palette.primary['#F00000']
      : tag.TagTypeInternalCode === 1
      ? palette.secondary.main
      : palette.secondary.butterMilk
  return {
    container: {
      backgroundColor: ({ themeMode }) => palette.tags[themeMode],
      justifyContent: 'space-between',
      display: 'flex',
      margin: '0 10px',
      '& .MuiAvatar-root': {
        backgroundColor: getBgColor,
        color: getTagColor,
      },
      '& .MuiChip-label': {
        color: getTagColor,
        fontSize: '0.5625rem',
      },
      '& .MuiChip-deleteIcon': {
        color: getTagColor,
        opacity: '0.6',
        '&:hover': {
          opacity: '1',
        },
      },
      '& .MuiChip-avatar': {
        width: '1.125rem',
        height: '1.125rem',
      },
      '& .MuiChip-clickable': {
        justifyContent: 'left',
      },
    },
    typografy: {
      margin: '0.4rem',
      color: palette.primary.corduroy,
      fontSize: '8px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '11px',
      letterSpacing: '0em',
      textAlign: 'left',
    },
    editIcon: {
      width: '.75rem',
      height: '.75rem',
    },
  }
})

const ConversationTag = memo(
  ({ tag, onClick, onDelete, disabled, showLabel }) => {
    const {
      state: {
        modalState: {
          caseState: { allowUserToCreateTags },
          themeMode,
        },
      },
    } = useContext(Context)

    const { container, typografy, editIcon } = useStyles({
      tag,
      themeMode: themeMode,
    })

    const [hoverTag, setHoverTag] = useState(null)
    const [modalFlag, setModalFlag] = useState(false)

    const handleMouseEnter = () => {
      setHoverTag(true)
    }

    const handleMouseLeave = () => {
      setHoverTag(false)
    }

    const handleDelete = () => {
      onDelete(tag)
    }

    const handleToggleModal = useCallback(
      e => {
        e?.stopPropagation()
        setModalFlag(prevState => !prevState)
      },
      [setModalFlag]
    )

    return (
      <>
        <Chip
          size="small"
          className={container}
          avatar={
            allowUserToCreateTags && hoverTag ? (
              <Avatar onClick={handleToggleModal}>
                <EditIcon className={editIcon} />
              </Avatar>
            ) : (
              <Avatar>{selectTagAvatarLetter(tag.TagTypeInternalCode)}</Avatar>
            )
          }
          label={tag.TagName}
          onClick={() => onClick(tag)}
          onDelete={onDelete && handleDelete}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={disabled}
          clickable
        />

        {showLabel && (
          <Typography color="primary" variant="caption" className={typografy}>
            {tag.GroupTagName}
          </Typography>
        )}

        {modalFlag && (
          <EditModal
            isOpen={modalFlag}
            toggleModal={handleToggleModal}
            tag={tag}
          />
        )}
      </>
    )
  }
)

ConversationTag.propTypes = {
  tag: shape({}).isRequired,
  onClick: func.isRequired,
  onDelete: func,
  onEdit: func,
  showLabel: bool,
}

export default ConversationTag
