var bugListIframe = document.getElementById("appIframe-my");
if (bugListIframe) {
  bugListIframe.onload = function () {
    var iframeDoc =
      bugListIframe.contentDocument || bugListIframe.contentWindow.document;
    iframeDoc
      .querySelector("#bugList tbody")
      ?.addEventListener("click", function (event) {
        let trEle = event.target.parentElement;
        if (trEle.nodeName === "TD") {
          trEle = trEle.parentElement;
        }
        console.log(trEle.nodeName, ".....");
        const bugId = trEle.querySelector("td.c-id").innerText;
        const bugDesc = trEle.querySelectorAll("td")[1].innerText;
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
      ?.addEventListener("click", function (event) {
        event.stopPropagation();
        const tdEle = event.target.parentElement;
        const bugDesc = tdEle.innerText;
        navigator.clipboard.writeText(`fix: ${bugDesc}`);
      });
  };
}
// window
//   .fetch("https://zentao.imotorlinx.cn/max/my-work-bug-assignedTo.html", {
//     method: "GET", // *GET, POST, PUT, DELETE, etc.
//     mode: "same-origin", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//       "Sec-Fetch-Dest": "iframe",
//       "Upgrade-Insecure-Requests": 1,
//       "Referer": "https://zentao.imotorlinx.cn/max/index.html?open=L21heC9teS13b3JrLWJ1Zy1hc3NpZ25lZFRvLmh0bWw=",
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer-when-downgrade", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   })
//   .then((res) => {
//     res.text().then((dataHtml) => {
//       const myBug = document.createElement("div");
//       myBug.innerHTML = dataHtml;
//       console.log(myBug);
//     });
//   });
