export function handleFormSubmit(blocks, input) {
    const isURL = (input) => {
      const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?\/?$/;
      return urlPattern.test(input);
    };
  
    if (input) {
      let blockContent;
      let blockThumbnail;
  
      if (isURL(input)) {
        try {
          const screenshotUrl = `https://api.screenshotmachine.com?key=c9c337&url=${encodeURIComponent(
            input
          )}&dimension=150x150`;
          blockThumbnail = screenshotUrl;
          blockContent = input;
        } catch (error) {
          console.log("Error fetching screenshot:", error);
        }
      } else {
        blockContent = input;
      }
  
      const newBlock = {
        id: new Date().getTime(),
        content: blockContent,
        thumbnail: blockThumbnail,
      };
      return [...blocks, newBlock];
    }
  
    return blocks;
  }
  