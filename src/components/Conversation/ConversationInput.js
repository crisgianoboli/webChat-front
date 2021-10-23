import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../../src/context'

import { EditorState, convertToRaw } from 'draft-js'
import { useMutation } from 'react-query'
import { shape, arrayOf, string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import {
  Box,
  IconButton,
  makeStyles,
  Select,
  MenuItem,
} from '@material-ui/core'

import TextButton from '../UI/atoms/Buttons/TextButton'
import TextEditor from '../TextEditor'
import SendIcon from '../../assets/SendIcon'
import { sendComments } from '../../hooks/useComments'
import MicrophoneIcon from '../../assets/MicrophoneIcon'
import CaretDownBoldIcon from '../../assets/CaretDownBoldIcon'
import { channels } from '../TextEditor/constants'
import PrivateIcon from '../../assets/PrivateIcon'

// TODO ver como viene maxLength y canales hardcodeados
const maxLength = 200

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    display: 'flex',
    flexDirection: 'column',
    minHeight: '130px',
    justifyContent: 'center',
    padding: '0 30px',
  },
  textarea: {
    border: '1px solid #DBDDE0',
    borderRadius: '6px 0px 0px 6px',
    boxSizing: 'border-box',
    height: '55px',
    display: 'flex',
    width: '100%',
  },
  inputText: {
    border: 'none',
    margin: '0 10px',
    width: '85%',
    '&:focus': {
      outline: 'none',
    },
    '&:placeholder': {
      color: 'red',
    },
  },
  length: {
    color: palette.secondary.corduroy,
    fontFamily: 'Nunito',
    fontSize: '11px',
    lineHeight: '15px',
    marginTop: '15px',
  },
  select: {
    width: '115px',
    height: '39px',
    backgroundColor: ({ themeMode }) => palette.buttonPanel[themeMode],
    border: ({ themeMode }) =>
      `0.8px solid ${palette.borderTextInput[themeMode]}`,
    paddingLeft: '0.625rem',
    '&::before': {
      borderBottom: 'none !important',
    },
    '& svg': {
      fill: ({ themeMode }) => palette.textPrimary[themeMode],
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      width: '1rem',
      marginRight: '1rem',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: ({ themeMode }) => palette.buttonPanel[themeMode],
    },
  },
  selectBottom: {
    borderRadius: '0 0 0 6px',
    borderRight: 'none',
    '& .MuiInputBase-input': {
      color: ({ themeMode }) => palette.textPrimary[themeMode],
      fontSize: '0.875rem',
    },
  },
  selectTop: {
    borderRadius: '6px 0 0 0',
    borderRight: 'none',
    borderBottom: 'none',
    '& span': {
      display: 'none',
    },
  },
  icon: {
    height: '15px',
    fill: palette.primary.main,
    marginRight: '0 !important',
  },
  itemLabel: {
    color: palette.primary.main,
    fontSize: 12,
    font: 'Nunito',
  },
  marginLeft: {
    marginLeft: '20px',
  },
  privateIcon: {
    height: '25px',
    fill: palette.primary.main,
    width: '20px !important',
    marginRight: '0 !important',
  },
  itemBottom: {
    fontSize: '0.875rem',
    color: palette.primary.main,
  },
  bgSend: {
    backgroundColor: ({ themeMode }) => palette.buttonSend[themeMode],
    color: ({ themeMode }) => palette.textButtonSend[themeMode],
  },
}))

const ConversationInput = ({ caseData }) => {
  const { state } = useContext(Context)
  const {
    root,
    select,
    selectTop,
    selectBottom,
    icon,
    itemLabel,
    itemBottom,
    marginLeft,
    privateIcon,
    bgSend,
  } = useStyles(state.modalState)
  const { mutateAsync } = useMutation(sendComments)
  const [initialChannel] = channels
  const [channel, setChannel] = useState(initialChannel.label)
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [modalEditor, setModalEditor] = useState(() =>
    EditorState.createEmpty()
  )

  const { t } = useTranslation()
  const { data } = caseData
  let [comments] = data[0].Comments

  const handleChangeChannel = ({ target }) => {
    setChannel(target.value)
  }

  const handleClick = async () => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks
    const value = blocks
      .map(block => (!block.text.trim() && '\n') || block.text)
      .join('\n')

    setEditorState(EditorState.createEmpty())
    comments
      ? (comments = {
          ...comments,
          ElementTypeOutput: true,
          CommentText: value,
          PublicationTo: '2986925308082390_3636234029818178',
          AccountDetailUnique: '5D090748-52CE-4D17-92C3-52C532DE5B8A',
        })
      : alert('no hay comentarios')
    await mutateAsync(comments)
  }

  return (
    <Box className={root}>
      <Box display="flex" alignItems="flex-end">
        <Box display="flex" flexDirection="column" marginBottom="45px">
          <Select
            className={clsx(select, selectTop)}
            IconComponent={CaretDownBoldIcon}
            value={channel}
            onChange={handleChangeChannel}
          >
            {channels.map(({ label, Icon, isPrivate }, i) => (
              <MenuItem value={label} key={i}>
                <Box display="flex" alignItems="center" width="100%">
                  <Icon variant={icon} />
                  {isPrivate && <PrivateIcon variant={privateIcon} />}
                  <Box
                    component="span"
                    className={clsx(itemLabel, { [marginLeft]: !isPrivate })}
                  >
                    {label}
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </Select>
          <Select
            className={clsx(select, selectBottom)}
            IconComponent={CaretDownBoldIcon}
            value={1}
          >
            <MenuItem value={1} className={itemBottom}>
              Usuario
            </MenuItem>
            <MenuItem value={2} className={itemBottom}>
              Agente
            </MenuItem>
            <MenuItem value={3} className={itemBottom}>
              Admin
            </MenuItem>
          </Select>
        </Box>
        <TextEditor
          maxLength={maxLength}
          editorState={editorState}
          setEditorState={setEditorState}
          modalEditor={modalEditor}
          setModalEditor={setModalEditor}
          selectedChannel={channel}
        />
        <TextButton
          startIcon={<SendIcon />}
          text={t('Enviar')}
          color="main"
          height="80"
          width="145"
          colorText="white"
          borderRadius="0px 6px 6px 0px"
          onClick={handleClick}
          uppercase
          marginBottom="43"
          minHeight="83"
          className={bgSend}
          // disabled={message.length === 0 ? true : false}
        />
        <Box margin="0 0 60px 15px">
          <IconButton>
            <MicrophoneIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

ConversationInput.propTypes = {
  caseData: shape({
    UCUserName: string,
    ClientName: string,
    data: arrayOf(shape({})),
  }),
}

export default ConversationInput
