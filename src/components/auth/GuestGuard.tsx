// ** React Imports
import { ReactNode, ReactElement } from 'react'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props

  return <>{children}</>
}

export default GuestGuard
