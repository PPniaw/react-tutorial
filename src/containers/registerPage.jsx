// main.jsx
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import Register from '../components/register'

// setupMSW().then(() => 初始化APP)
setupMSW().then(() =>
  ReactDOM.render(<Register />, document.getElementById('root'))
)