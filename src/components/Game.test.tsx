import React from 'react';
import {render} from '@testing-library/react';
import Game, {decideWinner, PAPER, RESULT, ROCK, SCISSORS} from './Game';

describe('Game component', () => {
  test('renders learn react link', () => {
    const { getByText } = render(<Game />);
    const buttonElement = getByText(/Run game/i);
    expect(buttonElement).toBeInTheDocument();
  });
  describe('decideWinner', () => {
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
    test('will give the expected result with the right combination of symbol', () => {
      expectedResults.forEach(({result, symbols}) => {
        symbols.forEach((symbol, index) => {
          if ( index % 2 === 0) {
            const evenSymbol = symbols[index];
            const oddSymbol = symbols[index + 1];
            expect(decideWinner(evenSymbol,oddSymbol)).toEqual(result);
          }
        });
      })
    })
  })
});

