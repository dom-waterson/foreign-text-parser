import { uniqueWords } from '../uniqueWords';

const sampleText = `El señor y la señora Dursley, que vivían en el número 4 de Privet Drive, 
estaban orgullosos de decir que eran muy normales, afortunadamente. 
Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso, 
porque no estaban para tales tonterías.`;

test('Parse all unique words from supplied text', () => {
  expect(uniqueWords(sampleText)).resolves.toStrictEqual([
    'que',
    'el',
    'de',
    'estaban',
    'eran',
    '4',
    'señor',
    'y',
    'la',
    'señora',
    'dursley',
    'vivían',
    'en',
    'número',
    'privet',
    'drive',
    'orgullosos',
    'decir',
    'muy',
    'normales',
    'afortunadamente',
    'las',
    'últimas',
    'personas',
    'se',
    'esperaría',
    'encontrar',
    'relacionadas',
    'con',
    'algo',
    'extraño',
    'o',
    'misterioso',
    'porque',
    'no',
    'para',
    'tales',
    'tonterías',
  ]);
});

test('Parse top 5 unique words from supplied text', () => {
  expect(uniqueWords(sampleText, { wordLimit: 5 })).resolves.toStrictEqual([
    'que',
    'el',
    'de',
    'estaban',
    'eran',
  ]);
});

test('Parse top 10 unique words and remove known words from supplied text', () => {
  expect(
    uniqueWords(sampleText, {
      wordLimit: 10,
      ignoreWords: ['señor', 'señora'],
    }),
  ).resolves.toStrictEqual([
    'que',
    'el',
    'de',
    'estaban',
    'eran',
    '4',
    'y',
    'la',
    'dursley',
    'vivían',
  ]);
});
