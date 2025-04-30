'use client'

import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed = 100, pause = 1500) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1))
      }, speed / 2)
    } else if (!isDeleting && displayedText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, text, speed, pause])

  return displayedText
}
