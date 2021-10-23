import { bool, func } from 'prop-types'

import { makeStyles } from '@material-ui/core'

import DragNDrop from './DragNDrop'

const useStyles = makeStyles(({ palette }) => ({
  content: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const FileList = ({ toggleModal, open, oneFile }) => {
  const { content } = useStyles()
  return (
    <div className={content}>
      <DragNDrop toggleModal={toggleModal} open={open} oneFile={oneFile} />
    </div>
  )
}

FileList.propTypes = {
  open: bool.isRequired,
  toggleModal: func.isRequired,
  oneFile: bool,
}

FileList.defaultProps = {
  oneFile: false,
}

export default FileList
