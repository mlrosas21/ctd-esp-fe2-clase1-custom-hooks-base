import { useState } from "react"

export interface Disclosure {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export function useDisclosure(): Disclosure {
  const [isOpen, setIsOpen] = useState(false)
  
  const open = () => setIsOpen(true)

  const close = () => setIsOpen(false)

  const toggle = () => setIsOpen(prevState => !prevState)

  return {isOpen,open, close, toggle}
}