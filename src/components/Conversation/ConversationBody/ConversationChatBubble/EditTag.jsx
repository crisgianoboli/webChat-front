import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { shape } from 'prop-types'

import {
  Box,
  TextField,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core'

import { Context } from '../../../../context'
import { useEditTag } from '../../../../hooks/useTags'
import { actionsCreator } from '../../../../context/modals/actions'

const useStyles = makeStyles(({ palette }) => ({
  boxButtom: {
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: '0.18rem',
  },
  textField: {
    color: palette.primary.dark,
    flexGrow: 1,
    maxWidth: '300px',
    maxHeight: '40px',
    marginBottom: '18px',
    '& .MuiOutlinedInput-input': {
      padding: '12px',
    },
  },
  typography: {
    fontSize: '14px',
    justifySelf: 'start',
    color: palette.primary.corduroy,
  },
}))

const ContentEditTag = ({ tag }) => {
  const { t } = useTranslation()

  const { boxButtom, button, textField, typography } = useStyles()
  const { data, mutate, isSuccess } = useEditTag()
  const [inputValue, setInputValue] = useState(tag.TagName)
  const [responseMessage, setResponseMessage] = useState()

  const {
    state: {
      modalState: {
        caseState: { userAssignedId },
        tagModal,
      },
    },
    dispatch,
  } = useContext(Context)

  const handleInputOnChange = e => {
    setInputValue(e.target.value)
  }

  const handleEditTag = () => {
    mutate({
      tagId: tag.TagId,
      tagName: inputValue,
      userId: userAssignedId,
    })
  }

  useEffect(() => {
    if (isSuccess) {
      if (data.ValidationMessage) {
        setResponseMessage(data.ValidationMessage)
      } else {
        setResponseMessage(t('EdicionDeTagExitosa'))
      }
      setTimeout(() => dispatch(actionsCreator.toggleTagModal(tagModal)), 3000)
    }
  }, [isSuccess, data?.ValidationMessage, dispatch, tagModal, t])

  return (
    <>
      <Box display="flex" justifyContent="center">
        <TextField
          id={`tag-edit-${tag.TagId}`}
          type="text"
          variant="outlined"
          onChange={handleInputOnChange}
          value={inputValue}
          className={textField}
        />
      </Box>
      <Box className={boxButtom}>
        <Typography className={typography}>{responseMessage}</Typography>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={button}
          onClick={handleEditTag}
          disabled={!inputValue}
        >
          {t('Aceptar')}
        </Button>
      </Box>
    </>
  )
}

ContentEditTag.propTypes = {
  tag: shape({}).isRequired,
}

export default ContentEditTag
