import React from 'react';
import { Wrapper } from './CommonStyled';
import styled from 'styled-components';


const Navigation = () => {
    return (
        <Wrapper>
            <Container>
                <MenuBar>
                    <MenuItem>
                        <div>기능들</div>
                        <SubMenu>계산기</SubMenu>
                    </MenuItem>
                    <MenuItem>
                        <div>도움말</div>
                        <SubMenu>아직 도움말이 없어요</SubMenu>
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
`