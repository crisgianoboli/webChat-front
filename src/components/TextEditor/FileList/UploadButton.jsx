import { Box } from '@material-ui/core'
import BaseButton from '../../UI/atoms/Buttons/BaseButton'

function UploadButton({ unsupportedFiles, validFiles, uploadFiles }) {
  return (
    <>
      {unsupportedFiles.length === 0 && validFiles.length ? (
        <Box margin="10px 0">
          <BaseButton text="upload file" onClick={uploadFiles} />
        </Box>
      ) : null}
    </>
  )
}

export default UploadButton
