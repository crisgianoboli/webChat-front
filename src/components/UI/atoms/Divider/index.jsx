import { useContext } from 'react'
import clsx from 'clsx'
import { string } from 'prop-types'

import { Divider as MaterialDivider, makeStyles } from '@material-ui/core'

import { Context } from '../../../../../src/context'

const useStyles = makeStyles(({ palette }) => ({
  divider: {
    backgroundColor: ({ themeMode }) => palette.background[themeMode],
    width: '100%',
  },
}))

const Divider = ({ className }) => {
  const { state } = useContext(Context)
  const { divider } = useStyles(state.modalState)
  return <MaterialDivider className={clsx(divider, className)} />
}

Divider.propTypes = {
  className: string,
}

export default Divider
