# foreign-text-parser (wip)

A Simple text parser to find common words in selected text

## Installation

### npm

```bash
npm i foreign-text-parser
```

## Usage

```js
import { uniqueWords } from 'foreign-text-parser';

const { uniqueWords } = require('foreign-text-parser');

const textToParse = `El señor y la señora Dursley, que vivían en el número 4 de Privet Drive, 
estaban orgullosos de decir que eran muy normales, afortunadamente. 
Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso, 
porque no estaban para tales tonterías.`;

const optionalWordLimit = 5

uniqueWords(textToParse, optionalWordLimit);

returns ['que', 'el', 'de', 'estaban', 'eran']
```
