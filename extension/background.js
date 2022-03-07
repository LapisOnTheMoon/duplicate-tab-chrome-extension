// Author: Alex Walczak (awal@awal.io)
// Modified by: LapisOnTheMoon

const CONTEXT_MENU_ID = 'duplicate_tab_ctx';
const DUPLICATE_TAB_STR = 'Duplicate Tab';

if (!chrome.contextMenus.onClicked.hasListeners()) {
  chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    type: 'normal',
    title: DUPLICATE_TAB_STR,
    contexts: ['all']
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === CONTEXT_MENU_ID) {
      duplicateTab(tab);
    }
  });
}

// Duplicate tabs.Tab `tab`
function duplicateTab(tab) {
  chrome.tabs.duplicate(tab.id);
}

// Called when the user clicks on the browser action
chrome.browserAction.onClicked.addListener(duplicateTab);
