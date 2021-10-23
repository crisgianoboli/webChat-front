import { useTranslation } from 'react-i18next'

import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core'

import FilterIcon from '../../assets/FilterIcon'
import ConversationTag from '../Conversation/ConversationBody/ConversationChatBubble/ConversationTag'

const useStyles = makeStyles(({ palette }) => ({
  searchStyle: {
    backgroundColor: palette.primary.catskillWhite,
  },
  tagsContainer: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    flexWrap: 'wrap',
    padding: '5px',
    maxHeight: '80px',
    overflowY: 'auto',
  },
  input: {
    borderRadius: '12px',
    color: palette.primary.dark,
    fontSize: '0.75rem',
    padding: '10px',
    flexGrow: 1,
  },
  filledInput: {
    background: palette.primary.white,
    borderRadius: '12px',
    color: palette.primary.dark,
    padding: '0 6px',
    fontSize: '0.75rem',
    '&$disabled': {
      background: palette.primary.athensGray,
      color: palette.primary.dark,
    },
    '&:hover': {
      backgroundColor: palette.primary.white,
    },
    '&$focused': {
      backgroundColor: palette.primary.white,
    },
    '& .MuiFilledInput-input': {
      padding: '7px 12px',
    },
  },
  containerButtons: {
    padding: '0.3rem',
    display: 'flex',
    height: '35px',
    justifyContent: 'space-around',
    margin: '10px 0',
  },
  button: {
    marginRight: '0.18rem',
  },
  muted: {
    color: palette.primary.corduroy,
  },
  disabled: {},
  focused: {},
}))

const SearchTags = ({
  selectedTags,
  search,
  handleChange,
  deleteTag,
  filterButton,
  handleClickAddButton,
  handleClickCloseButton,
  disabledButton,
}) => {
  const {
    searchStyle,
    tagsContainer,
    input,
    filledInput,
    containerButtons,
    button,
    muted,
    disabled,
    focused,
  } = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={searchStyle}>
      <Box className={tagsContainer}>
        {selectedTags.map(tag => (
          <Grid md={6}>
            <ConversationTag
              key={tag.TagId}
              tag={tag}
              onDelete={deleteTag}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Box>
      {/* TODO hacer componente TextField */}
      <Box display="flex">
        <TextField
          className={input}
          variant="filled"
          InputProps={{
            classes: {
              root: filledInput,
              disabled,
              focused,
            },
            disableUnderline: true,
          }}
          value={search}
          onChange={handleChange}
        />
        {filterButton && (
          <Button>
            <FilterIcon />
          </Button>
        )}
      </Box>
      <Box className={containerButtons}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={button}
          onClick={handleClickAddButton}
          disabled={disabledButton}
        >
          {t('Asignar')}
        </Button>
        <Button size="small" onClick={handleClickCloseButton} className={muted}>
          {t('Cancelar')}
        </Button>
      </Box>
    </Box>
  )
}

export default SearchTags
