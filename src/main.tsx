import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './i18n/i18n'
import App from './App'

const queryClient = new QueryClient()
const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element with id="root" was not found')
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
