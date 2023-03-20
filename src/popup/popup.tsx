// import "cal-sans"
import React from "react"
import { createRoot } from "react-dom/client"
import "../assets/tailwind.css"
import { Main } from "../components/Main"

export const App: React.FC = ({}) => {
  return (
    <div>
      <Main />
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
