

import { handleFormSubmit } from './memoryStackUtils';
import { useEffect } from 'react';

export function useExtensionHandler(blocks, setBlocks) {
  useEffect(() => {
    const handleMessage = (message, sender, sendResponse) => {
      const updatedBlocks = handleFormSubmit(blocks, message);
      setBlocks(updatedBlocks);
    };

    if (chrome && chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener(handleMessage);
    }

    return () => {
      if (chrome && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.removeListener(handleMessage);
      }
    };
  }, [blocks, setBlocks]);
}
