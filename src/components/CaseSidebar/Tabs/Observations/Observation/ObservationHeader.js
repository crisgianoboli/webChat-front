import {
  alpha,
  Box,
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { func, shape } from 'prop-types'
import EditIcon from '../../../../../assets/EditIcon'
import ExpandIcon from '../../../../../assets/ExpandIcon'

const useStyles = makeStyles(({ palette, spacing }) => ({
  bubbleHeaderInfo: {
    alignItems: 'center',
    display: 'flex',
  },
  caseLabel: {
    fontSize: '0.6875rem',
    marginRight: '2px',
    textTransform: 'uppercase',
    '&::after': {
      content: "':'",
    },
  },
  caseNumber: {
    borderRight: `1px solid ${alpha(palette.secondary.corduroy, 0.3)}`,
    fontSize: '0.6875rem',
    fontWeight: 'bold',
    paddingRight: '5px',
  },
  dateFormated: {
    fontSize: '0.6875rem',
    lineHeight: '1',
    paddingLeft: '5px',
  },
  expandHeight: {
    height: '12',
  },
  iconButton: {
    padding: 3,
    background: palette.primary.linkWater,
    borderRadius: '5px',
    height: '18px',
    width: '18px',
  },
  iconButtonSpacing: {
    marginLeft: spacing(1),
  },
  editIcon: {
    height: '12px',
    fill: palette.primary.main,
  },
}))

const ObservationHeader = ({ observation, handleOnEdit }) => {
  const {
    bubbleHeaderInfo,
    caseLabel,
    caseNumber,
    dateFormated,
    editIcon,
    ...classes
  } = useStyles()
  const { t } = useTranslation()

  return (
    <div className={bubbleHeaderInfo}>
      <Box display="flex" alignItems="center">
        <Typography component="span" className={caseLabel}>
          {t('Caso')}
        </Typography>
        {/* TODO: comment.CaseId */}
        <Typography component="span" className={caseNumber}>
          {observation.CaseId}
        </Typography>

        {/* TODO: comment.CreationDateLog */}
        <Typography className={dateFormated} component="span">
          {moment(observation.ObservationCreationDate).format('DD/MM/YYYY')}
        </Typography>
        <Typography className={dateFormated} component="span">
          -
        </Typography>

        <Typography className={dateFormated} component="span">
          {moment(observation.ObservationCreationDate).format('hh:mm:ss')}
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexGrow="1"
        justifyContent="flex-end"
      >
        <IconButton className={classes.iconButton} onClick={handleOnEdit}>
          <EditIcon variant={editIcon} />
        </IconButton>
        <IconButton
          className={`${classes.iconButton} ${classes.iconButtonSpacing}`}
        >
          <ExpandIcon fill="#3F96B4" variant={classes.expandHeight} />
        </IconButton>
      </Box>
    </div>
  )
}

ObservationHeader.propTypes = {
  observation: shape({}).isRequired,
  handleOnEdit: func,
}

export default ObservationHeader
