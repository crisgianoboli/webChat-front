import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { bool } from 'prop-types'

import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core'

import RefreshIcon from '../../../assets/RefreshIcon'
import { useFilteredCases } from '../../../hooks/useCases'
import TextButton from '../../UI/atoms/Buttons/TextButton'
import { Context } from '../../../../src/context'

const useStyles = makeStyles(({ palette, spacing }) => ({
  refresh: {
    alignItems: 'center',
    display: 'flex',
    minHeight: '64px',
    padding: '0px',
    '& .MuiListItem-gutters': {
      paddingLeft: ({ showLabel }) => (showLabel ? '16px' : '8px'),
    },
  },
  listItem: {
    '&:hover': {
      backgroundColor: ({ themeMode }) => palette.background[themeMode],
    },
  },
  listText: {
    '& span': {
      color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
    },
  },
  listIcon: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    borderRadius: '5px',
    color: ({ themeMode }) => palette.textInvert[themeMode],
    marginRight: spacing(1),
    minWidth: '25px',
    height: '25px',
    padding: '6px',
    fill: ({ themeMode }) => palette.textInvert[themeMode],
  },
  icon: {
    height: '13px',
    width: '13px',
    fill: ({ themeMode }) => palette.textInvert[themeMode],
  },
}))

const SidebarRefresh = ({ showLabel }) => {
  const { t } = useTranslation()
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)
  const { refresh, listText, icon } = useStyles({ showLabel, themeMode })
  const { refetch } = useFilteredCases()

  const handleClickRefresh = () => {
    refetch()
  }

  return (
    <List className={refresh}>
      <ListItem>
        {showLabel && (
          <ListItemText className={listText}>{t('Casos')}</ListItemText>
        )}
        <TextButton
          text={showLabel ? t('Actualizar') : <RefreshIcon variant={icon} />}
          fontSize="14"
          height="29"
          color="primary.white"
          startIcon={showLabel && <RefreshIcon variant={icon} />}
          width={showLabel && '105'}
          onClick={handleClickRefresh}
        />
      </ListItem>
    </List>
  )
}

SidebarRefresh.propTypes = {
  showLabel: bool,
}

SidebarRefresh.defaultProps = {
  showLabel: true,
}

export default SidebarRefresh
