// main.jsx
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import Login from './components/login'

// setupMSW().then(() => 初始化APP)
setupMSW().then(() =>
  ReactDOM.render(<Login />, document.getElementById('root'))
)
