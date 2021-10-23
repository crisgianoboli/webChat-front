import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import SmallChips from '../TagsChips'
import SearchInput from '../TagsSearch'
import TagsList from '../TagsList'
import { useTags } from '../../../../../hooks/useTags'
import { Context } from '../../../../../context'

const chips = ['Favoritos', 'Marca', 'Usuario', 'Grupo']

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: '14px 18px 16px 18px',
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
  },
  tagListLabel: {
    borderBottom: ({ themeMode }) =>
      `1px solid ${palette.background[themeMode]}`,
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
  },
  text: {
    fontFamily: 'Nunito',
    fontSize: '13px',
    lineHeight: '18px',
    margin: '25px 0 11px 14px',
    display: 'inline-block',
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
}))

function TagConversation() {
  const { state } = useContext(Context)
  const { root, text, tagListLabel } = useStyles(state.modalState)
  const { t } = useTranslation()
  const tagsData = useTags()
  return (
    <>
      <div className={root}>
        <SearchInput />
        <SmallChips labels={chips} />
      </div>
      <div className={tagListLabel}>
        <Typography component="span" className={text}>
          {t('TagsDeMarca')}
        </Typography>
      </div>
      <TagsList tagsData={tagsData} />
    </>
  )
}

export default TagConversation
