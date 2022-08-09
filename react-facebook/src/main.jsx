import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { FacebookProvider } from 'react-facebook'

ReactDOM.render(
  <React.StrictMode>
    <FacebookProvider appId="867732567482481">
      <App/>
    </FacebookProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
