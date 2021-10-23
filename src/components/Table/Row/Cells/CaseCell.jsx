import { makeStyles } from '@material-ui/core'
import InboxCell from './InboxCell'
import Selectable from './Selectable'

const useStyles = makeStyles(({ palette }) => ({
  iconCaseType: {
    fill: palette.primary.main,
    height: '15px',
    width: '15px',
  },
  mLeft: {
    marginLeft: '5px',
  },
  caseId: {
    fontSize: '1rem',
  },
  alert: {
    color: props => props.AlertColorsCode,
    fontWeight: 'bold',
  },
}))

function CaseCell({ CaseId, CaseTypeName, CaseTypeIcon, AlertColorsCode }) {
  const classes = useStyles({ AlertColorsCode })

  return (
    <InboxCell
      component="th"
      id={CaseId}
      scope="row"
      align="center"
      customClasses={classes.alert}
    >
      {CaseTypeName && <CaseTypeIcon variant={classes.iconCaseType} />}
      <span className={`${classes.mLeft} ${classes.caseId}`}>{CaseId}</span>
    </InboxCell>
  )
}

export default Selectable(CaseCell)
