import { makeStyles } from '@material-ui/core'
import { arrayOf, shape } from 'prop-types'

import DatosAdjuntosBody from './DatosAdjuntosBody'
import withSpinner from '../../../Spinner'

const useStyles = makeStyles(() => ({
  root: {
    overflowY: 'auto',
    padding: '18px',
  },
}))

const DatosAdjuntos = ({ attData }) => {
  const { root } = useStyles()

  return (
    <div className={root}>
      {attData?.map(({ CaseCommentAttachmentList, CaseId }) =>
        CaseCommentAttachmentList.map(attached => (
          <DatosAdjuntosBody
            key={attached.CaseCommentAttachmentId}
            CaseId={CaseId}
            {...attached}
          />
        ))
      )}
    </div>
  )
}

DatosAdjuntos.propTypes = {
  attData: arrayOf(shape({})),
}

export default withSpinner(DatosAdjuntos)
