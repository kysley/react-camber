import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Camber } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Camber />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
