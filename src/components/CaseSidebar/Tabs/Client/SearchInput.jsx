import { useTranslation } from 'react-i18next'

import { Box, Button, makeStyles, TextField } from '@material-ui/core'

import FilterIcon from '../../../../assets/FilterIcon'

const useStyles = makeStyles(({ palette }) => ({
  searchStyle: {
    backgroundColor: palette.primary.catskillWhite,
    padding: '15px',
  },
  searchInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '220px',
    height: '30px',
    borderRadius: '12px',
    color: palette.primary.dark,
    fontSize: '0.75rem',
    padding: '10px',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  resultContent: {
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: palette.primary.dark,
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

const SearchInput = ({
  search,
  handleChange,
  handleClickAddButton,
  handleClick,
  disabledButton,
}) => {
  const {
    searchStyle,
    input,
    searchInput,
    filledInput,
    resultContent,
    containerButtons,
    button,
    muted,
    disabled,
    focused,
  } = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={searchStyle}>
      <Box className={searchInput}>
        <TextField
          className={input}
          defaultValue="Buscar datos"
          InputProps={{
            classes: {
              root: filledInput,
              disabled,
              focused,
            },
          }}
          value={search}
          onChange={handleChange}
          fullWidth
        />
        <Button>
          <FilterIcon />
        </Button>
      </Box>
      <Box className={resultContent}>Los resultados apareceran aqui</Box>
      <Box className={containerButtons}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={button}
          onClick={handleClickAddButton}
          disabled={disabledButton}
        >
          {t('Asociar')}
        </Button>
        <Button size="small" onClick={handleClick} className={muted}>
          {t('Cancelar')}
        </Button>
      </Box>
    </Box>
  )
}

export default SearchInput
