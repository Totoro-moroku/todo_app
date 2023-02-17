import { useEffect, useRef } from 'react'

export const useTask = () => {
  const isInitialized = useRef<boolean>(false)

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true
    }
  }, [])
}
