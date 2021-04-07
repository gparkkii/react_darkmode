import styled from 'styled-components';
import { media } from './media_query';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s;
  width: calc(100%-2rem);
  height: calc(100vh - 60px);

  ${media.tablet`
    width: calc(100%-1rem);
  `}
  ${media.desktop`
    width: 100%;
    height: calc(100vh - 60px);
    padding: 0px 20px;
  `}

  & h2 {
    font-size: 48px;
    font-weight: 500;
    padding-bottom: 60px;
    color: #31302E;
    text-align: center;
  }
`;
