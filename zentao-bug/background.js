chrome.runtime.onMessage.addListener(function (msg) {
  if (msg?.type === "bugTotal") {
    chrome.action.setBadgeBackgroundColor({ color: "#F00" });
    chrome.action.setBadgeText({ text: msg.value });
    chrome.storage.local.set({ myBugTotal: msg.value });
    chrome.notifications.create({
      type: "basic",
      title: "222",
      iconUrl: "images/zentao.png",
      message: "222",
    });
  }
  if (msg?.type === "bugNew") {
    chrome.action.setBadgeBackgroundColor({ color: "#F00" });
    const currentLen = chrome.storage.local.get(["myBugTotal"]) || "0";
    const total = Number(currentLen) + Number(msg.value);
    chrome.action.setBadgeText({
      text: total,
    });
    chrome.storage.local.set({ myBugTotal: total });
  }
  return true;
});
