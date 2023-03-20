import React, { FC } from "react"
import { Form } from "./Form"

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col justify-center w-full bg-red-100 h-1/3">
        <h1 className="text-3xl font-semibold tracking-tighter font-inter">
          Sleeky
        </h1>
        <Form />
      </div>
      <div className="w-full bg-red-300 h-1/3"></div>
      <div className="w-full bg-red-500 h-1/3"></div>
    </div>
  )
}
