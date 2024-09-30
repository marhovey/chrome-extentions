const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", chrome.runtime.getURL("content_scripts/copyBug.js"));
document.body.appendChild(script);
let iframe = document.createElement("iframe");
iframe.src = "/max/my-work-bug-assignedTo.html";
iframe.onload = function () {
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc;
  const bugTotal = iframeDoc
    .querySelector("#myBugForm .table-footer .pager")
    .getAttribute("data-rec-total");
  window.postMessage({ type: "bugTotal", value: bugTotal });
  document.body.removeChild(iframe);
  iframe = null;
};
iframe.setAttribute("width", "0");
iframe.setAttribute("height", "0");
document.body.appendChild(iframe);

window.addEventListener("message", async function (event) {
  if (["bugTotal", "bugNew"]?.includes(event.data?.type)) {
    await chrome.runtime.sendMessage(event.data);
  }
});
