import { uniqueWords } from '../index';

const sampleText = `El señor y la señora Dursley, que vivían en el número 4 de Privet Drive, 
estaban orgullosos de decir que eran muy normales, afortunadamente. 
Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso, 
porque no estaban para tales tonterías.`;

test('Parse all unique words from supplied text', () => {
  expect(uniqueWords(sampleText)).toStrictEqual([
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
  expect(uniqueWords(sampleText, 5)).toStrictEqual(['que', 'el', 'de', 'estaban', 'eran']);
});
