import React, { useState } from 'react';
import CommentHeader from '../../components/CommentHeader';
import styled from 'styled-components';
import GamePage from './GamePage';
import { Wrapper } from '../../components/CommonStyled';

const MainGamePage: React.FC = () => {

    const [onGame, setOnGame] = useState<boolean>(false);

    const handleOnGame = () => {
        setOnGame(onGame => !onGame);
    }

    return (
        <Wrapper>
            <CommentHeader/>
            <Back>
            <Container>
                {onGame ? (
                    <GamePage handler={handleOnGame}/>
                ):(
                    <StartBtn
                    onClick={handleOnGame}>Game Start</StartBtn>
                )}
            </Container>
            </Back>
        </Wrapper>
    );
};

export default MainGamePage;

const Container = styled.div`
min-width: 400px;
max-width: 800px;
width: 90%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const StartBtn = styled.div`
    cursor: pointer;
    font-size: 50px;
    border: 5px solid black;
    padding: 5px;
`

const Back = styled.div`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
`