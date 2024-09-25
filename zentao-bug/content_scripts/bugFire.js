var bugListIframe = document.getElementById("appIframe-my");
if (bugListIframe) {
  bugListIframe.onload = function () {
    var iframeDoc =
      bugListIframe.contentDocument || bugListIframe.contentWindow.document;
    iframeDoc
      .querySelector("#bugList tbody tr")
      .addEventListener("click", function (event) {
        const tdEle = event.target.parentElement;
        const bugId = tdEle.querySelector("td.c-id").innerText;
        const bugDesc = tdEle.querySelectorAll("td")[1].innerText;
        navigator.clipboard.writeText(`fix: ${bugId} ${bugDesc}`);
      });
  };
}

const bugDetailIframe = document.getElementById("appIframe-qa");
if (bugDetailIframe) {
  bugDetailIframe.onload = function () {
    var iframeDoc =
      bugDetailIframe.contentDocument || bugDetailIframe.contentWindow.document;
    iframeDoc
      .querySelector("#mainMenu .page-title")
      .addEventListener("click", function (event) {
        event.stopPropagation();
        const tdEle = event.target.parentElement;
        const bugDesc = tdEle.innerText;
        navigator.clipboard.writeText(`fix: ${bugDesc}`);
      });
  };
}
