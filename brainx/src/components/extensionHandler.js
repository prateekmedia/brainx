import { useEffect } from 'react';
import { handleFormSubmit } from './path/to/your/formUtils';

export function useExtensionHandler(blocks, setBlocks) {
  useEffect(() => {
    const handleMessage = (message, sender, sendResponse) => {
      const updatedBlocks = handleFormSubmit(blocks, message);
      setBlocks(updatedBlocks);
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, [blocks, setBlocks]);
}
