import { useEffect } from 'react'

const getToken = key => {
  return localStorage.getItem(key)
}

export default function useUnloadBeacon({ url, payload = () => {} }) {
  const eventHandler = () => {
    const auth = `Bearer ${getToken('Authorization')}`
    const prf = getToken('Profile-Token')
    localStorage.clear()
    return fetch('/api/auth/logout', {
      body: JSON.stringify({ onPause: false }),
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
        Profile: prf,
      },
      method: 'POST',
      keepalive: true,
    })
  }

  useEffect(() => {
    window.addEventListener('unload', eventHandler, true)
    return () => {
      window.removeEventListener('unload', eventHandler, true)
    }
  }, [])
}
