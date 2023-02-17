import { useEffect, useRef } from 'react'

const useTask = () => {
  const isInitialized = useRef<boolean>(false)

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true
    }
  }, [])
}

export default useTask
