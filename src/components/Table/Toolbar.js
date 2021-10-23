import { useEffect, useContext } from 'react'
import { string, any } from 'prop-types'

import { lighten, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import FolderLogo from '../../assets/folderLogo'
import Dropdown from './Dropdown'
import { Context } from '../../context'
import { actionsCreator } from '../../context/tableCells/actions'

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}))

const EnhancedTableToolbar = ({ title, buttonTitle, buttonLogo }) => {
  const classes = useToolbarStyles()
  const { state, dispatch } = useContext(Context)
  const { cellsState } = state

  useEffect(() => {
    dispatch(actionsCreator.getCells())
  }, [dispatch])

  return (
    <Toolbar>
      <FolderLogo />
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      {buttonTitle && (
        <Dropdown
          title={buttonTitle}
          Logo={buttonLogo}
          items={cellsState.headCells}
          isCheckbox
        />
      )}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  title: string.isRequired,
  buttonTitle: string,
  buttonLogo: any,
}

EnhancedTableToolbar.defaultProps = {
  buttonTitle: '',
  buttonLogo: null,
}

export default EnhancedTableToolbar
