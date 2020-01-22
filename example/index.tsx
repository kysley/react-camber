import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Camber } from '../.'

const App = () => {
  return (
    <div style={{ height: '150vh' }}>
      <span>Scroll to the bottom of the page</span>
      <Camber />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
