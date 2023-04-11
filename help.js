const helpBtn = document.getElementById("btnHelp");
helpBtn.onclick = function () {
  var newURL = "../html/help.html";
  chrome.tabs.create({
    url: newURL,
  });
};
