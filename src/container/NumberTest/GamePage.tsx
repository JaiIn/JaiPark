import React from 'react';
import styled from 'styled-components';
import useCountdown from '../../hook/useCountdown';

interface GamePageProps{
    handler: () => void;
}

const GamePage: React.FC<GamePageProps> = ({handler}) => {
    const Count = useCountdown(3,1000);
    
    return (
        <>
            <BackBtn onClick={handler}>뒤로</BackBtn>
            <GameContainer>
                {
                    Count > 0 ? <div>{Count}</div> : <div>Start!</div>
                }
            </GameContainer>
            
        </>
    );
};

export default GamePage;

const BackBtn = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    background-color: transparent;
    transition: background-color 0.5s ease, color 0.5s ease;
    &:hover{
        background-color: red;
        color: white;
    }
`

const GameContainer = styled.div`
border: 5px solid black;
height: 90%;
width: 100%;
display: flex;
justify-content: center;
align-items: center
`

