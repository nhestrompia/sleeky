chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("mes", message.action)

  if (message.action === "EXECUTE_SCRIPT") {
    console.log("asdasd")
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("tabs", tabs)

      chrome.scripting.executeScript(
        {
          target: { tabId: message.tabId },
          func: () => {
            // Get the page's HTML
            const html = document.documentElement.innerHTML

            // Send the HTML back to the service worker
            chrome.runtime.sendMessage({ html })
          },
        },
        () => {
          // Listen for messages from the injected script
          chrome.runtime.onMessage.addListener((message) => {
            // Log the received HTML
            // console.log(message.html)
            sendResponse({ html: message.html })
          })
        }
      )
      // return true
    })
    // return true
  }
  return true
})
