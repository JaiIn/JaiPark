import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './CommonStyled';

const CommentHeader = () => {
    return (
        <Wrapper>
            <Headers>
                <Icons/>
                <Banner/>
            </Headers>
        </Wrapper>
    );
};

export default CommentHeader;

const Headers = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`

const Icons = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-image: url('/Images/gamza.png');
    background-size: cover;
    background-position: center;
`

const Banner = styled.div`
    
    background-image: url('/Images/banner.png');
    background-size: cover;
    background-position: center;
    width: 150px;
`