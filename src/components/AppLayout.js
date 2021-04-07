import React from 'react';
import { FlexContainer } from '../style/styles';
import styled from 'styled-components';
import Header from './Header';

const AppLayout = ({children}) => {
  return (
    <WrapContainer>
      <Header />
      <FlexContainer>
        {children}
      </FlexContainer> 
    </WrapContainer>
  )
}

export default AppLayout;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
`;
