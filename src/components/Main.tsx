import React, { FC } from "react"
import { Layout } from "./Layout"

interface MainProps {}

export const Main: FC<MainProps> = ({}) => {
  return (
    <div className="bg-blue-200  w-80 h-[500px]">
      <Layout />
    </div>
  )
}
