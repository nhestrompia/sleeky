import React, { FC, useEffect, useState } from "react"

interface FormProps {}

export const Form: FC<FormProps> = ({}) => {
  const [value, setValue] = useState("")
  const [responseData, setResponseData] = useState()

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      // Make an API request using the fetch API
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: value }],
            // prompt: prompt,
            temperature: 0.5,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 300,
            n: 1,
          }),
        }
      )
      //   const response = await fetch("https://myapi.com/myendpoint", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ input: value }),
      //   })

      const data = await response.json()
      console.log(
        "🚀 ~ file: Form.tsx:45 ~ handleSubmit ~ data:",
        data.choices[0].message.content
      )
      setResponseData(data.choices[0].message.content)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //     const tabId = tabs[0].id
  //     chrome.runtime.sendMessage({
  //       action: "EXECUTE_SCRIPT",
  //       tabId: tabId,
  //       code: 'console.log("Hello, world!");',

  //     })
  //   })
  // }, [])
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id
      chrome.runtime.sendMessage(
        { action: "EXECUTE_SCRIPT", tabId: tabId },
        (response) => {
          console.log("client side", response.html)
        }
      )
    })
  }, [])
  const handleChange = (val: React.ChangeEvent<HTMLInputElement>) => {
    setValue(val.target.value)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        onChange={handleChange}
        value={value}
        required
        className="flex w-4/5 h-10 max-w-full px-3 py-2 text-sm bg-white border rounded-md font-inter border-slate-300 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-800 dark:focus:outline-none dark:focus:ring-0"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md px-4 py-2.5 bg-blue-400 font-inter tracking-tighter text-lg"
      >
        Hit me
      </button>
      {responseData && <h2>{responseData}</h2>}
    </form>
  )
}
