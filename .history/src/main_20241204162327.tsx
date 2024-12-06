import { createRoot } from 'react-dom/client'
import App from './App'
import Providers from './Provider/Provider'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>,
)
