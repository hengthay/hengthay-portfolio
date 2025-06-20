import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white-100 transition-colors duration-300">
    <App />
  </div>
)
