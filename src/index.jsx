// main.jsx
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import App from './App'

// setupMSW().then(() => 初始化APP)
setupMSW().then(() =>
  ReactDOM.render(<App />, document.getElementById('root'))
)
