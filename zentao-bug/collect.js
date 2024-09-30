const requestScript = document.createElement("script");
requestScript.setAttribute("type", "text/javascript");
requestScript.setAttribute(
  "src",
  chrome.runtime.getURL("content_scripts/request.js")
);
document.documentElement.appendChild(requestScript);
const collectScript = document.createElement("script");
collectScript.setAttribute("type", "text/javascript");
collectScript.setAttribute(
  "src",
  chrome.runtime.getURL("content_scripts/collectBug.js")
);
document.documentElement.appendChild(collectScript);
window.addEventListener("message", async function (event) {
  if (event.data?.type === "bugTotal") {
    await chrome.runtime.sendMessage(event.data);
  }
});
