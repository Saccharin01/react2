import React from "react"
import ReactDOM from "react-dom/client"
import "./test.css"

const App : React.FC = () => {
 return (
  <div>
    <h1>Hello,World!</h1>
  </div>
 ); 
}

// const container = document.getElementById("root") as HTMLElement
// const root = createRoot(container)

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(<App />)