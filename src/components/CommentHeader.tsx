import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './CommonStyled';
import { useNavigate } from 'react-router-dom';

const CommentHeader = () => {

    const navigate = useNavigate();
    const handleIconClick = () => {
        navigate('/');
    }

    return (
        <Wrapper>
            <Headers>
                <Icons onClick={handleIconClick}/>
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
    background-image: url('/Images/JPlogo.png');
    background-size: cover;
    background-position: center;
`

const Banner = styled.div`
    
    background-image: url('/Images/banner.png');
    background-size: cover;
    background-position: center;
    width: 150px;
`