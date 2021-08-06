interface WordFrequencies {
  [name: string]: number;
}

interface OptionParamaters {
  wordLimit?: number;
  ignoreWords?: string[];
}

export const uniqueWords = (text: string, options?: OptionParamaters): Promise<string[]> => {
  return new Promise((resolve) => {
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

    let sortedWords = Object.keys(words).sort((a, b) => words[b] - words[a]);

    if (options?.ignoreWords) {
      sortedWords = sortedWords.filter((word) => !options.ignoreWords?.includes(word));
    }

    if (options?.wordLimit) {
      sortedWords = sortedWords.slice(0, options.wordLimit);
    }

    resolve(sortedWords);
  });
};
