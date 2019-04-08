import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import hello from './hello.png'
const App = () => {
  return (
    <div>
      <p> React hello! </p>
      <img src = { hello } style = {{maxWidth: '100%'}}/>
      <div className = "image"></div>
    </div>
  )
}

export default App;
ReactDOM.render(<App/>,document.getElementById("app"))
