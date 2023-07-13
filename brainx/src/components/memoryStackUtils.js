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

    let tags = Array(0);

    if (blockContent.split(" ").length > 5) {
      tags = getTopTerms(blockContent, 5, blocks);
    }

    const newBlock = {
      id: new Date().getTime(),
      content: blockContent,
      thumbnail: blockThumbnail,
      tags: tags,
    };
    return [...blocks, newBlock];
  }

  return blocks;
}
function calculateTermFrequency(document, term) {
  const words = document.toLowerCase().split(' ');
  const termCount = words.filter(word => word === term.toLowerCase()).length;
  const termFrequency = termCount / words.length;
  return termFrequency;
}

function calculateInverseDocumentFrequency(documents, term) {
  const documentCount = documents.length;
  const documentFrequency = documents.filter(document =>
    document.toLowerCase().split(' ').includes(term.toLowerCase())
  ).length;
  const inverseDocumentFrequency = Math.log(documentCount / (1 + documentFrequency));
  return inverseDocumentFrequency;
}

function calculateTFIDF(documents, term) {
  const termFrequencies = documents.map(document => calculateTermFrequency(document, term));
  const inverseDocumentFrequency = calculateInverseDocumentFrequency(documents, term);
  const tfidfScores = termFrequencies.map(tf => tf * inverseDocumentFrequency);
  return tfidfScores;
}

function getTopTerms(text, numTerms, blocks) {
  const documents = [...blocks.map((block) => block.content), text.replace(/[^\w\s\d]|_/g, "").replace(/\s+/g, " ")];
  const words = text.replace(/[^\w\s\d]|_/g, "").replace(/\s+/g, " ").toLowerCase().split(' ').filter(word => word.length > 2);

  const tfidfScores = {};
  words.forEach(word => {
    const scores = calculateTFIDF(documents, word);
    tfidfScores[word] = scores[0];
  });

  const sortedTerms = Object.keys(tfidfScores).sort((a, b) => tfidfScores[b] - tfidfScores[a]);
  const topTerms = sortedTerms.slice(0, numTerms);

  return topTerms;
}