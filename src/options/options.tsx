import React from "react"
import { createRoot } from "react-dom/client"
import "../assets/tailwind.css"

// interface popupProps {}

// export const popup: FC<popupProps> = ({}) => {
//   return <div>popup</div>
// }

const test = (
  <div>
    <h1 className="bg-slate-200 text-2xl">Options</h1>
  </div>
)

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)
