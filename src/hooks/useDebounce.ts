import { emptyFunction } from '@utils/emptyFunction'
import { useEffect, useState } from 'react'

export const useDebounce = (
  callback: () => void = emptyFunction,
  delay: number
) => {
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDisabled(false)
    }, delay)

    // Cleanup code
    return () => {
      clearTimeout(timeOut)
    }
  }, [disabled, delay])

  if (disabled) {
    return emptyFunction
  }

  return () => {
    setDisabled(true)
    callback()
  }
}
