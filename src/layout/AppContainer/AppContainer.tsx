import type { ReactNode } from 'react'
import styles from './AppContainer.module.scss'

type AppContainerProps = {
  children: ReactNode
  className?: string
}

export function AppContainer({ children, className = '' }: AppContainerProps) {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}
