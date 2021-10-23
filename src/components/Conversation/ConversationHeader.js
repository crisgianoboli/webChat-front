import { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { arrayOf, shape, string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import _groupBy from 'lodash/groupBy'
import clsx from 'clsx'

import {
  Box,
  alpha,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core'

import AttachedIcon from '../../assets/AttachedIcon'
import SaveOutlinedIcon from '../../assets/SaveOutlinedIcon'
import CaretDownIcon from '../../assets/CaretDownIcon'
import FileGenericIcon from '../../assets/FileGenericIcon'
import withSpinner from '../Spinner'
import { useCaseAttachments } from '../../hooks/useAttachments'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'
import BaseButton from '../UI/atoms/Buttons/BaseButton'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: ({ themeMode }) => palette.panel[themeMode],
    minHeight: '60px',
  },
  filterContainer: {
    alignItems: 'center',
    display: 'flex',
  },

  stateContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '42px',
  },
  button: {
    backgroundColor: ({ themeMode }) => palette.buttonPanel[themeMode],
    fontSize: '0.6875rem',
    lineHeight: '0.9375rem',
    marginLeft: '1.125rem',
    padding: '6px 12px',
    textTransform: 'uppercase',
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
  },
  today: {
    backgroundColor: ({ themeMode }) => palette.buttonPanelActive[themeMode],
    color: ({ themeMode }) => palette.TextButtonPanelActive[themeMode],
    '&:hover': {
      backgroundColor: alpha(palette.panel.dark, 0.8),
      color: ({ themeMode }) => palette.textPrimary[themeMode],
    },
  },
  startIcon: {
    color: ({ themeMode }) => palette.TextButtonPanelActive[themeMode],
    height: '0.75rem',
    margin: '0',
    marginRight: 10,
  },
  menu: {
    maxHeight: '50vh',
    transform: 'translateY(10px)',
    '& .MuiMenu-paper': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  menuItem: {
    fontSize: '0.6875rem',
    borderBottom: `1px solid ${alpha(palette.primary.main, 0.4)}`,
  },
  endIcon: {
    color: ({ themeMode }) => palette.textPrimary[themeMode],
    margin: '0',
    width: '0.625rem',
  },
  rotateIcon: {
    transform: 'rotate(180deg)',
  },
  attachName: {
    fontFamily: 'Nunito',
    fontWeight: 400,
    fontSize: 12,
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
  attachDate: {
    fontFamily: 'Nunito',
    fontWeight: 300,
    fontSize: 10,
    color: palette.secondary.corduroy,
  },
  viewMore: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: 12,
    color: ({ themeMode }) => palette.textPrimary[themeMode],
  },
}))

const ConversationHeader = ({ caseData, data }) => {
  const { state, dispatch } = useContext(Context)
  const { modalState } = state
  const {
    button,
    endIcon,
    filterContainer,
    menu,
    menuItem,
    root,
    startIcon,
    stateContainer,
    today,
    rotateIcon,
    attachName,
    attachDate,
    viewMore,
  } = useStyles(state.modalState)
  const { t } = useTranslation()
  const { caseId } = useParams()
  const history = useHistory()
  const caseAttachData = useCaseAttachments(
    caseId,
    caseData.caseConversationId
  )?.data
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorCasesEl, setanchorCasesEl] = useState(null)
  const [anchorAttachEl, setAnchorAttachEl] = useState(null)
  const [attachNumber, setAttachNumber] = useState(0)

  //FIXME si el backend no devuelve nada  (o 404) el frontend se rompe.
  const conversationCases = _groupBy(
    data['<Comments>k__BackingField'],
    d => d.CaseId
  )

  useEffect(() => {
    if (caseAttachData) {
      setAttachNumber(caseAttachData.length)
    }
  }, [caseAttachData])

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleCasesMenuClick = event => {
    setanchorCasesEl(event.currentTarget)
  }

  const handleTodayClick = () => {
    history.push({
      pathname: `/case/${caseId}`,
    })
  }

  const handleClose = () => {
    setAnchorEl(null)
    setanchorCasesEl(null)
    setAnchorAttachEl(null)
  }

  const handleConversation = conversationId => {
    setAnchorEl(null)

    history.push({
      pathname: `/case/${caseId}/conversations/${conversationId}`,
    })
  }

  const handleCaseNavigation = caseId => {
    setanchorCasesEl(null)
    const conv = data['<Comments>k__BackingField'].find(
      d => (d.CaseId = caseId)
    )

    history.push({
      pathname: `/case/${caseId}/conversations/${conv.ConversationId}`,
    })
  }

  const handleAttachMenuClick = event => {
    setAnchorAttachEl(event.currentTarget)
  }

  const handleClickAttach = () => {
    dispatch(
      actionsCreator.toggleDrawer(
        !modalState.drawer.isOpen,
        'Adjuntos',
        caseId,
        caseData.caseConversationId
      )
    )
    handleClose()
  }

  return (
    <Grid container className={root}>
      <Grid item xs={7} className={filterContainer}>
        {/* TODO atomic - consumir atomo */}
        <BaseButton className={`${button} ${today}`} onClick={handleTodayClick}>
          {t('Hoy')}
        </BaseButton>
        <BaseButton
          className={button}
          aria-controls="conversation-list"
          aria-haspopup="true"
          onClick={handleClick}
          endIcon={
            <CaretDownIcon
              variant={clsx(endIcon, { [rotateIcon]: Boolean(anchorEl) })}
            />
          }
        >
          {t('PorFecha')}
        </BaseButton>
        <Menu
          elevation={1}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          id="conversation-list"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={menu}
        >
          {caseData?.data.map(({ ConversationId, MinCaseCommentCreated }) => (
            <MenuItem
              className={menuItem}
              onClick={() => handleConversation(ConversationId)}
              key={ConversationId}
            >
              {moment(MinCaseCommentCreated).format('DD/MM/YYYY')}
            </MenuItem>
          ))}
        </Menu>

        <BaseButton
          className={button}
          aria-controls="cases-list"
          aria-haspopup="true"
          onClick={handleCasesMenuClick}
          endIcon={
            <CaretDownIcon
              variant={clsx(endIcon, { [rotateIcon]: Boolean(anchorCasesEl) })}
            />
          }
        >
          {t('Casos')} ({Object.keys(conversationCases).length})
        </BaseButton>

        <Menu
          elevation={1}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          id="cases-list"
          anchorEl={anchorCasesEl}
          keepMounted
          open={Boolean(anchorCasesEl)}
          onClose={handleClose}
          className={menu}
        >
          {Object.keys(conversationCases).map(caseId => (
            <MenuItem
              className={menuItem}
              onClick={() => handleCaseNavigation(caseId)}
              key={caseId}
            >
              {caseId}
            </MenuItem>
          ))}
        </Menu>
        <BaseButton
          className={button}
          startIcon={<AttachedIcon variant={startIcon} />}
          endIcon={
            <CaretDownIcon
              variant={clsx(endIcon, { [rotateIcon]: Boolean(anchorAttachEl) })}
            />
          }
          onClick={handleAttachMenuClick}
        >
          {`${t('Adjuntos')} (${attachNumber || 0})`}
        </BaseButton>
        <Menu
          elevation={1}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          id="attach-list"
          anchorEl={anchorAttachEl}
          keepMounted
          open={Boolean(anchorAttachEl)}
          onClose={handleClose}
          className={menu}
        >
          {/* TODO hacer */}
          {caseAttachData &&
            caseAttachData.map(e =>
              e.CaseCommentAttachmentList.map(
                ({
                  CaseCommentAttachmentId,
                  CaseCommentAttachmentName,
                  CaseCommentAttachmentCreated,
                }) => (
                  <MenuItem className={menuItem} key={CaseCommentAttachmentId}>
                    <Box display="flex" alignItems="center">
                      <FileGenericIcon variant={startIcon} />
                      <Box>
                        <Typography variant="body1" className={attachName}>
                          {CaseCommentAttachmentName}
                        </Typography>
                        <Typography variant="body1" className={attachDate}>
                          {moment(CaseCommentAttachmentCreated).format(
                            'DD/MM/YYYY'
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                )
              )
            )}
          <MenuItem onClick={handleClickAttach}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="body1" className={viewMore} align="center">
                {t('MostrarTodos')}
              </Typography>
            </Box>
          </MenuItem>
        </Menu>
      </Grid>

      <Grid item xs={5} className={stateContainer}>
        <BaseButton
          className={button}
          endIcon={<CaretDownIcon variant={endIcon} />}
        >
          {t('Estado')}
        </BaseButton>
        <BaseButton
          className={button}
          startIcon={<SaveOutlinedIcon variant={startIcon} />}
        >
          {t('Guardar')}
        </BaseButton>
      </Grid>
    </Grid>
  )
}

ConversationHeader.propTypes = {
  data: shape({}),
  caseData: shape({
    UCUserName: string,
    ClientName: string,
    data: arrayOf(shape({})),
  }),
}

export default withSpinner(ConversationHeader)
