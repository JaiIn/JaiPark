import React from 'react';
import { Wrapper } from './CommonStyled';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {

    const GameNavi = useNavigate();
    const handleToGame = () => {
        GameNavi('/game');
    }

    return (
        <Wrapper>
            <Container>
                <MenuBar>
                    <MenuItem>
                        <div>기능들</div>
                        <SubMenu>
                            <div>계산기</div>
                            <div onClick={handleToGame}>게임</div>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem>
                        <div>도움말</div>
                        <SubMenu>
                            <div>dd</div>
                        </SubMenu>
                    </MenuItem>
                    <MenuItem>
                        <div>뭐넣지</div>
                        <SubMenu>추천 받아요</SubMenu>
                    </MenuItem>
                    <MenuItem>
                        <div>흠</div>
                        <SubMenu>흠...</SubMenu>
                    </MenuItem>
                </MenuBar>
            </Container>
        </Wrapper>
    );
};

export default Navigation;

const Container = styled.div`
display: flex;
justify-content: center;
`

const MenuBar = styled.div`
width: 70%;
display: flex;
flex-direction: row;
justify-content: space-around;
`

const MenuItem = styled.div`
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover > div {
        visibility: visible;
        transform: translateY(0px);
        opacity: 1;
    }
`

const SubMenu = styled.div`
opacity: 0;
cursor: pointer;
visibility: hidden;
background-color: lightgray;
position: absolute;
top: 100%;
transform: translateY(-20px);
transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
div{
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover{
        background-color: red;
        color: white;
    }
}
`