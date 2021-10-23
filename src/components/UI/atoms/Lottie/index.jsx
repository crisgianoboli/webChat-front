import Lottie from 'react-lottie'

const LootieAnimation = ({ loop, autoplay, animation }) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <>
      <Lottie options={{ animationData: animation, ...defaultOptions }} />
    </>
  )
}

export default LootieAnimation
