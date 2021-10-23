import Avatar from '../UI/atoms/Avatar'
//TODO ESTO PODRIA INCLUIRSE DIRECTAMENTE EN EL ATOMO.
function AvatarBase64({ size, ImageBase64 }) {
  return (
    <Avatar
      size={size}
      color="green"
      hidden={!ImageBase64}
      image={ImageBase64 && `data:image/jpeg;base64,${ImageBase64}`}
    />
  )
}
export default AvatarBase64
