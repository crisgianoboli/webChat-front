import { useState, useContext } from 'react'
import {
  IconButton,
  Tooltip,
  Menu,
  Box,
  makeStyles,
  Select,
  MenuItem,
} from '@material-ui/core'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { styles, types, alignment, otherButtons, channels } from './constants'
import AlignmentIcon from '../../assets/AlignmentIcon'
import TextButton from '../UI/atoms/Buttons/TextButton'
import ButtonItem from './ButtonItem'
import StylesItem from './StylesItem'
import TypesItem from './TypesItem'
import ToolbarAttachIcon from '../../assets/ToolbarAttachIcon'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'
import CaretDownBoldIcon from '../../assets/CaretDownBoldIcon'
import SendIcon from '../../assets/SendIcon'
import PrivateIcon from '../../assets/PrivateIcon'

const useStyles = makeStyles(({ palette }) => ({
  button: {
    padding: '5px 12px',
  },
  emo: {
    display: 'inline-block',
    '& .draftJsEmojiPlugin__emojiSelectButton__3sPol': {
      borderRadius: '100%',
      border: 'none',
      width: '39px',
      height: '27px',
    },
    '& .draftJsEmojiPlugin__emojiSelectButtonPressed__2Tezu': {
      borderRadius: '100%',
      border: 'none',
      width: '39px',
      height: '27px',
    },
    '& .draftJsEmojiPlugin__emojiSelectPopover__1J1s0': {
      position: 'fixed',
      bottom: '46px',
      marginLeft: '45px',
    },
  },
  select: {
    width: '115px',
    height: '40px',
    backgroundColor: palette.primary.athensGray,
    border: `0.8px solid ${palette.primary.hawkesBlue}`,
    color: palette.primary.main,
    fontWeight: 600,
    fontSize: '0.875rem',
    paddingLeft: '0.625rem',
    '&::before': {
      borderBottom: 'none !important',
    },
    '& svg': {
      fill: palette.primary.main,
      color: palette.primary.main,
      width: '1rem',
      marginRight: '1rem',
    },
  },
  selectLeft: {
    borderRadius: '6px 0 0 6px',
    borderRight: 'none',
    '& span': {
      display: 'none',
    },
  },
  selectRight: {
    borderRadius: '0 6px 6px 0',
  },
  enter: {
    font: 'Nunito',
    fontWeight: 400,
    fontSize: 11,
    color: palette.secondary.corduroy,
  },
  icon: {
    height: '15px',
    fill: palette.primary.main,
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
  },
  buttonsOther: {
    flexGrow: '1',
  },
}))

const ToolbarExpanded = ({
  onChange,
  editorState,
  setDirection,
  emoji,
  selectedChannel,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectLeftVal, setSelectLeftVal] = useState(selectedChannel)
  const [selectRightVal, setSelectRightVal] = useState(0)

  const { state, dispatch } = useContext(Context)
  const { modalState } = state
  const {
    button,
    emo,
    select,
    selectLeft,
    selectRight,
    enter,
    icon,
    itemLabel,
    buttonsOther,
    privateIcon,
    marginLeft,
  } = useStyles()
  const { EmojiSelect, EmojiSuggestions } = emoji
  const { t } = useTranslation()

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = direction => {
    setDirection(direction)
    handleClose()
  }

  const handleOthersChange = button => {
    console.log(button)
  }

  const handleModal = () => {
    dispatch(actionsCreator.toggleModal(modalState.caseModal))
  }

  const handleSelectLeftChange = event => {
    setSelectLeftVal(event.target.value)
  }

  const handleSelectRightChange = event => {
    setSelectRightVal(event.target.value)
  }

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="row" marginRight="10px">
        <Select
          className={clsx(select, selectLeft)}
          IconComponent={CaretDownBoldIcon}
          value={selectLeftVal}
          onChange={handleSelectLeftChange}
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
          className={clsx(select, selectRight)}
          IconComponent={CaretDownBoldIcon}
          value={selectRightVal}
          onChange={handleSelectRightChange}
        >
          <MenuItem value={0} disabled>
            Usuario
          </MenuItem>
          <MenuItem value={1}>uno</MenuItem>
          <MenuItem value={2}>dos</MenuItem>
          <MenuItem value={3}>tres</MenuItem>
        </Select>
      </Box>
      {selectLeftVal === 'Mail' && (
        <>
          {styles.map(e => (
            <StylesItem
              key={e.label}
              {...e}
              onChange={onChange}
              editorState={editorState}
            />
          ))}
          <Tooltip title="Alineacion">
            <IconButton className={button} onClick={handleClick}>
              <AlignmentIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {alignment.map(e => (
              <ButtonItem {...e} onChange={handleChange} />
            ))}
          </Menu>
          {types.map(e => (
            <TypesItem
              key={e.label}
              {...e}
              onChange={onChange}
              editorState={editorState}
            />
          ))}
        </>
      )}

      <Box
        marginLeft="20px"
        display="flex"
        alignItems="center"
        className={buttonsOther}
      >
        {otherButtons.map(e => (
          <ButtonItem {...e} onChange={handleOthersChange} />
        ))}
        <Tooltip title="Adjuntar">
          <IconButton className={button} onClick={handleModal}>
            <ToolbarAttachIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Emoji" className={emo}>
          <div className={emo}>
            <EmojiSuggestions />
            <EmojiSelect />
          </div>
        </Tooltip>
      </Box>
      <Box display="flex" alignItems="center">
        <TextButton
          startIcon={<SendIcon />}
          text={t('Enviar')}
          color="main"
          height="40"
          width="145"
          colorText="white"
          borderRadius="0px 6px 6px 0px"
          onClick={handleClick}
          uppercase
          // disabled={message.length === 0 ? true : false}
        />
        <Box className={enter} component="span" margin="0 10px">
          {t('Ctrl + Enter')}
        </Box>
      </Box>
    </Box>
  )
}

export default ToolbarExpanded
