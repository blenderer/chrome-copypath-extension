chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const pathPlusSearch = window.location.pathname + window.location.search

      navigator.clipboard.writeText(pathPlusSearch);
    }
  });
});