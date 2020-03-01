import React, {useState} from "react";
import PlayerCard from "./Player";
import styled from 'styled-components';

const Container = styled.div`
  width: 50rem;
  margin: 20px auto;
  text-align: center;
`;

const PlayerCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ResultTitle = styled.p``;
const Button = styled.button``;

export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';
const SYMBOLS = [ROCK , PAPER, SCISSORS];

export const RESULT = {
  PLAYER_WIN: 'Player wins!',
  PLAYER_LOSE: "Computer wins!",
  DRAW: "Draw!"
};

export const decideWinner = (playerSymbol: string, computerSymbol: string) : string => {
  if (playerSymbol === computerSymbol) {
    return RESULT.DRAW;
  }
  if((playerSymbol === ROCK && computerSymbol === SCISSORS) ||
    (playerSymbol=== PAPER && computerSymbol === ROCK) ||
    (playerSymbol=== SCISSORS && computerSymbol ===  PAPER)) {
    return RESULT.PLAYER_WIN;
  }
  return RESULT.PLAYER_LOSE;
};

const Game = () => {
  const [playerSymbol, setUserSymbol] = useState();
  const [computerSymbol, setComputerSymbol] = useState();
  const [winner, setWinner] = useState('');

  const runGame = () => {
    const userSymbol = SYMBOLS[Math.floor(Math.random()*3)];
    const computerSymbol = SYMBOLS[Math.floor(Math.random()*3)]
    setUserSymbol(userSymbol);
    setComputerSymbol(computerSymbol);
    setWinner(decideWinner(userSymbol, computerSymbol));
  };

  return (
    <Container>
      <PlayerCardContainer>
        <PlayerCard
          color="orange"
          symbol={playerSymbol}
          title="Player"
        />
        <PlayerCard
          color="red"
          symbol={computerSymbol}
          title="Computer"
        />
      </PlayerCardContainer>

      <ResultTitle>{winner ? winner : 'Please click run game'}</ResultTitle>
      <Button onClick={runGame}>Run game</Button>
    </Container>
  )
};

export default Game;
