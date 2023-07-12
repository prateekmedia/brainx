function handleContextMenuClick(info, tab) {
    const selectedText = info.selectionText;
  
    console.log("Selected text:", selectedText);
    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const message = "Hello from the extension!";
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
  
  }
  
  
  chrome.contextMenus.create({
    id: "sendToMemoryStack",
    title: "Send to Memory Stack",
    contexts: ["selection"],
  });
  

  chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
  