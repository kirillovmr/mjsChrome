function notGoogle(msg) {
  console.warn(`[Not a Chrome Extension]: ${msg}`);
}

export function resetStorage(cb) {
  if (chrome.storage) {
    if (confirm('This will delete all your stored links. Are you sure?')) {
      chrome.storage.sync.set({links: []}, function() {
        cb ? cb() : null;
        console.log('[resetStorage]: Storage was cleared');
      });
    }
  } else {
    notGoogle('I should be runned inside google extension to reset storage');
  }
}

export function saveToStorage(link) {
  getFromStorage()
  .then(storedLinks => {
    let newLinks = [link];

    // If result string
    if(typeof storedLinks === 'string')
      newLinks.push(storedLinks);
    else
      newLinks = [link, ...storedLinks];

    chrome.storage.sync.set({links: newLinks}, function() {
      console.log('[saveToStorage]: Links were saved');
    });
  })
  .catch(err => {
    console.warn('[saveToStorage]: Loading from storage was rejected');
  })
}

export function getFromStorage() {
  return new Promise((resolve, reject) => {
    if (chrome.storage) {
      chrome.storage.sync.get(['links'], function(result) {
        resolve(result['links']);
      });
    } else {
      const msg = 'I should be runned inside google extension to get links from storage';
      notGoogle(msg);
      reject(msg);
    }
  });
}