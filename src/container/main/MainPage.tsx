import React from 'react';
import CommentHeader from '../../components/CommentHeader';
import Navigation from '../../components/Navigation';
import styled from 'styled-components';

const MainPage = () => {
    return (
        <Container>
            <CommentHeader/>
            <Navigation/>
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
max-width: 1440px;
`