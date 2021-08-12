# foreign-text-parser (wip)

A simple text parser to find common words in selected text

## Installation

### npm

```bash
npm i foreign-text-parser
```

## Usage

uniqueWords finds all occurrences of words and returns them back in descending order.

```js
import { uniqueWords } from 'foreign-text-parser';

const { uniqueWords } = require('foreign-text-parser');

const textToParse = `El señor y la señora Dursley, que vivían en el número 4 de Privet Drive, 
estaban orgullosos de decir que eran muy normales, afortunadamente. 
Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso, 
porque no estaban para tales tonterías.`;

const wordLimit = 5;

await uniqueWords(textToParse, { wordLimit });

returns[('que', 'el', 'de', 'estaban', 'eran')];
```

## Options

The second parameter is optional. It accepts a simple `Object` with these options:

- **`wordLimit`**: the number of the words you would like to return, if left all unique words are returned.
- **`ignoreWords`**: array of strings (words) that if found you don't want them returned.
