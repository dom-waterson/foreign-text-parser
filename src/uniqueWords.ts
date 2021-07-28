interface WordFrequencies {
  [name: string]: number;
}

export const uniqueWords = (text: string, wordLimit?: number): string[] => {
  const sanitizedText = text.replace(/[.,-/#!$%^&*;:{}=\-_`~()\n]/g, '');

  const splitWords = sanitizedText.split(/\s/);

  const words = splitWords.reduce((wordFrequencies: WordFrequencies, currentValue: string) => {
    const word = currentValue.toLowerCase();

    if (wordFrequencies[word]) {
      wordFrequencies[word] = wordFrequencies[word] + 1;
    } else {
      wordFrequencies[word] = 1;
    }

    return wordFrequencies;
  }, {});

  const sortedWords = Object.keys(words).sort((a, b) => words[b] - words[a]);

  return wordLimit ? sortedWords.slice(0, wordLimit) : sortedWords;
};
