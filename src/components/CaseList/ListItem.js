import { useEffect, useContext } from 'react'
import { string, shape } from 'prop-types'
import { useHistory, useParams } from 'react-router-dom'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import { Box, ListItem, ListItemIcon, Tooltip } from '@material-ui/core'

import Avatar from '../UI/atoms/Avatar'
import { selectIcon } from '../../utils'
import useExitCase from '../../hooks/exitCase'
import { Context } from '../../context'
import { actionsCreator } from '../../context/modals/actions'

const useStyles = makeStyles(({ palette }) => ({
  listItem: {
    height: '60px',
    padding: 0,
    '&:hover': {
      backgroundColor: palette.primary.catskillWhite,
      borderRadius: '6px',
    },
  },
  client: {
    color: palette.primary.dark,
    fontSize: 12,
    fontFamily: 'Nunito',
  },
  userName: {
    color: palette.primary.main,
    size: 12,
    fontFamily: 'Nunito',
    width: '100%',
    maxWidth: '90px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  iconGeneral: {
    fill: palette.primary.main,
    height: '12px',
    width: '12px',
    margin: '0 10px',
  },
}))

export default function SimpleList({ oneCase }) {
  const { push } = useHistory()
  const {
    Cliente,
    AlertColorsCode,
    ClientFullName,
    CaseId,
    UCUserName,
    SCName,
    ProfileImage,
    CommentQuantity,
  } = oneCase
  const { listItem, client, iconGeneral, userName } = useStyles(oneCase)
  const { mutate, isSuccess } = useExitCase()
  const {
    state: {
      modalState: {
        onPause,
        caseState: { blockedGuid },
      },
    },
    dispatch,
  } = useContext(Context)
  const { caseId } = useParams()
  const ChannelIcon = selectIcon(SCName)

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        actionsCreator.toggleCaseState({ blockedGuid: null, caseId: null })
      )
      push({ pathname: `/case/${CaseId}` })
    }
  }, [CaseId, dispatch, isSuccess, push])

  const handleClick = () => {
    mutate({ blockedGuid, onPause, caseId })
  }

  return (
    <Box>
      <ListItem
        button
        value={Cliente}
        className={listItem}
        onClick={handleClick}
        component="button"
      >
        <ListItemIcon>
          <Avatar
            size="small"
            color={AlertColorsCode}
            image={ProfileImage && `data:image/jpeg;base64,${ProfileImage}`}
          />
        </ListItemIcon>
        <Box display="flex" flexDirection="column" width="100%">
          <Box
            fontSize={14}
            fontWeight="bold"
            color={AlertColorsCode ? AlertColorsCode : 'primary.main'}
          >
            {CaseId}
          </Box>
          <Tooltip title={!ClientFullName ? UCUserName : ClientFullName}>
            <Box
              component="span"
              className={clsx({
                [userName]: !ClientFullName,
                [client]: ClientFullName,
              })}
            >
              {!ClientFullName ? UCUserName : ClientFullName}
            </Box>
          </Tooltip>
        </Box>
        <Box display="flex" alignItems="center">
          <ChannelIcon variant={iconGeneral} />
          <Box
            component="span"
            bgcolor="primary.main"
            borderRadius={50}
            display="flex"
            color="primary.white"
            fontSize={10}
            height={20}
            justifyContent="center"
            width={20}
            alignItems="center"
            marginRight="10px"
          >
            {CommentQuantity}
          </Box>
        </Box>
      </ListItem>
    </Box>
  )
}

SimpleList.propTypes = {
  oneCase: shape({
    Cliente: string,
    ClienteImage: string,
    AlertColorsCode: string,
    ClientFullName: string,
    CaseCreated: string,
  }).isRequired,
}
