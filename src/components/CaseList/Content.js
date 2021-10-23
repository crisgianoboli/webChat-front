/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import { arrayOf, object } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Typography } from '@material-ui/core'

import ListItem from './ListItem'
import TextButton from '../UI/atoms/Buttons/TextButton'
import RefreshIcon from '../../assets/RefreshIcon'
import BackIcon from '../../assets/BackIcon'
import { Context } from '../../context'
import useExitCase from '../../hooks/exitCase'
import { actionsCreator } from '../../context/modals/actions'

const useStyles = makeStyles(({ palette }) => ({
  list: {
    paddingBottom: 0,
    paddingTop: 0,
    padding: 10,
    overflow: 'auto',
    maxHeight: 'calc(100vh - 156px)',
  },
  text: {
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    padding: '20px 10px',
  },
  buttonsContainer: {
    alignItems: 'center',
    borderBottom: ({ themeMode }) =>
      `1px solid ${palette.background[themeMode]}`,
    display: 'flex',
    height: '60px',
    justifyContent: 'space-around',
  },
  icon: {
    height: '13px',
    width: '13px',
    fill: ({ themeMode }) => palette.textInvert[themeMode],
  },
}))

const Content = ({ notifications }) => {
  const {
    state: {
      modalState: {
        pause,
        caseState: { blockedGuid },
        themeMode,
      },
    },
    dispatch,
  } = useContext(Context)
  const { text, buttonsContainer, icon, list } = useStyles({ themeMode })
  const { t } = useTranslation()
  const { push } = useHistory()
  const { mutate, isSuccess } = useExitCase()
  const { caseId } = useParams()

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        actionsCreator.toggleCaseState({ blockedGuid: null, caseId: null })
      )
      push({
        pathname: `/cases`,
      })
    }
  }, [isSuccess])

  const handleClickBackButton = () => {
    mutate({ blockedGuid, pause, caseId })
  }

  const handleClickRefresh = () => {
    //TODO Handle refresh
  }

  return (
    <>
      <div className={buttonsContainer}>
        <TextButton
          text={t('Volver')}
          fontSize="14"
          height="29"
          startIcon={<BackIcon variant={icon} />}
          onClick={handleClickBackButton}
        />
        <TextButton
          text={t('Actualizar')}
          fontSize="14"
          height="29"
          startIcon={<RefreshIcon variant={icon} />}
          width="105"
          onClick={handleClickRefresh}
        />
      </div>
      <List className={list} component="nav" aria-label="notification list">
        <Typography className={text}>{t('Notificaciones')}</Typography>
        {notifications?.map((oneCase, key) => (
          <ListItem key={key} oneCase={oneCase} />
        ))}
      </List>
    </>
  )
}

Content.propTypes = {
  notifications: arrayOf(object).isRequired,
}

export default Content
