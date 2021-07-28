import { parseWords } from '../index';

test('Parse words from supplied text', () => {
  expect(parseWords('Hello World')).toBe('TODO Hello World');
});
