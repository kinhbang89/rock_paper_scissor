import React, {useState} from "react";
import PlayerCard from "./Player";
import styled from 'styled-components';

const Container = styled.div`
  width: 50rem;
  margin: 20px auto;
`;

const ResultTitle = styled.p``;
const Button = styled.button``;
export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';
const SYMBOLS = [ROCK , PAPER, SCISSORS];

export const RESULT = {
  PLAYER_WIN: 'Player wins',
  PLAYER_LOSE: "Computer wins!",
  DRAW: "It 's a draw"
}

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
    let counter = 0;
    let myInterval = setInterval(() => {
      counter++;
      const userSymbol = SYMBOLS[Math.floor(Math.random()*3)];
      const computerSymbol = SYMBOLS[Math.floor(Math.random()*3)]
      setUserSymbol(userSymbol);
      setComputerSymbol(computerSymbol);
      if(counter > 20) {
        clearInterval(myInterval);
        setWinner(decideWinner(userSymbol, computerSymbol));
      }
    },100)
  };

  return (
    <Container>
      <PlayerCard
        color="orange"
        symbol={playerSymbol}   />
      <PlayerCard
        color="red"
        symbol={computerSymbol}   />
      <ResultTitle>{winner ? winner : 'Please click run game'}</ResultTitle>
      <Button onClick={runGame}>Run game</Button>
    </Container>
  )
};

export default Game;
