import React from 'react';
import {render} from '@testing-library/react';
import Game, {decideWinner, PAPER, RESULT, ROCK, SCISSORS} from './Game';

describe('Game component', () => {
  describe('decideWinner function ', () => {
    const expectedResults = [
      {
        result: RESULT.DRAW,
        symbols: [ROCK, ROCK, SCISSORS, SCISSORS, PAPER, PAPER]
      },
      {
        result: RESULT.PLAYER_WIN,
        symbols: [ROCK, SCISSORS, PAPER, ROCK, SCISSORS, PAPER]
      },
      {
        result: RESULT.PLAYER_LOSE,
        symbols: [ROCK, PAPER ,PAPER, SCISSORS, SCISSORS, ROCK]
      }
    ];
    expectedResults.forEach(({result, symbols}) => {
      symbols.forEach((symbol, index) => {
        if ( index % 2 === 0) {
          const evenSymbol = symbols[index];
          const oddSymbol = symbols[index + 1];
          test(`${evenSymbol} ${oddSymbol} the result will be => ${result}`, () => {
            expect(decideWinner(evenSymbol,oddSymbol)).toEqual(result);
          })
        }
      });
    })
  })
});

