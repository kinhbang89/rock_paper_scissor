import React from 'react';
import styled from 'styled-components';

const Player = styled.div<{ color: string, symbol: string }>`
  width: 12.5rem;
  height: 12.5rem;
  margin: 1.25rem;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  border: 2px solid #fff;
  background-repeat: no-repeat;
  background-position: center center;
  background-color:   ${props => (props.color)};
  background-image: url(${props => (props.symbol)});
  background-size: cover;
`;


interface IPlayerCard {
  color: string;
  symbol: string;
}

const PlayerCard: React.FC<IPlayerCard> = ({color, symbol}) => {
  return (
    <Player color={color} symbol={symbol ? require(`./images/${symbol}.png`) : ''}/>
  )
};

export default PlayerCard;
