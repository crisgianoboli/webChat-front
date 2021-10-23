import { useState, useCallback } from 'react'

import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core'

import TagIcon from '../../../../assets/TagIcon'
import BaseButton from './BaseButton'

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

export default function TagButton({ onClick }) {
  const { btnTag, iconSize } = useStyles()
  const [hoverTag, setHoverTag] = useState(true)

  const toggleTagEnter = useCallback(() => {
    setHoverTag(false)
  }, [])

  const toggleTagLeave = useCallback(() => {
    setHoverTag(true)
  }, [])

  return (
    <BaseButton
      className={btnTag}
      onClick={onClick}
      onMouseEnter={toggleTagEnter}
      onMouseLeave={toggleTagLeave}
    >
      {hoverTag ? (
        <TagIcon variant={iconSize} />
      ) : (
        <AddIcon className={iconSize} />
      )}
    </BaseButton>
  )
}
