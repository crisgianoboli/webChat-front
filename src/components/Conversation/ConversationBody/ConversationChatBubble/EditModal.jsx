import { memo } from 'react'

import Modal from '../../../Modal'
import EditTag from './EditTag'

const EditModal = ({ isOpen, toggleModal, tag }) => {
  return (
    <Modal
      open={isOpen}
      customToggle={toggleModal}
      title="Edición Tag"
      alignTitle="center"
      bgTitle="primary.polar"
      width="360px"
      height="215px"
      padding="25px"
    >
      <EditTag tag={tag} />
    </Modal>
  )
}

export default memo(EditModal)
