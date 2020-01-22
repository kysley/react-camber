<h1 align="center">
  camber 🏎
  <br>
  <img src="camber.jpg" alt="camber image" title="camber image" width="300">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Automatically loop to the top of the page upon reaching the bottom</p>

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/en/) and
should be installed as one of your project's `dependencies`:

```
npm install --save react-camber
yarn add react-camber
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {Camber} from 'react-camber'

const App = () => (
  <div style={{ height: '150vh' }}>
    <span>Scroll to the bottom of the page</span>
    <Camber />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

```

## LICENSE

MIT
