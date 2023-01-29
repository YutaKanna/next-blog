const webHookUrl = "webhook URLはる"

export function postMessage(title: string) {
  const data = { "username": "blog-notify", "content": title + "がいいねされました" }
  fetch(webHookUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  }).catch(error => console.error(error))
}
