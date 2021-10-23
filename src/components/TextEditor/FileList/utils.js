export const fileType = fileName => {
  return (
    fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) ||
    fileName
  )
}

export const fileSize = size => {
  if (size === 0) {
    return '0 Bytes'
  }
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(size) / Math.log(k))
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export const preventDefault = e => {
  e.preventDefault()
}

export const validateFile = file => {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
    'application/pdf',
  ]
  if (validTypes.indexOf(file.type) === -1) {
    return false
  }
  return true
}
