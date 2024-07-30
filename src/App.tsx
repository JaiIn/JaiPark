import React from 'react';
import styled from 'styled-components';
import MainPage from './container/main/MainPage';

function App() {
  return (
    <Container>
      <MainPage/>
    </Container>
  );
}

export default App;

const Container = styled.div`
max-width: 1440px;
`