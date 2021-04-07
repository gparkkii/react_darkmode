import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <nav>
      <StyledHeader>
        <RightMenu>
          <Link to='/'>
            <img src={logo} alt="logo"/>
            <p>DARKMODE</p>
          </Link>
        </RightMenu>
        <LeftMenu>
          <Link to='/sub'>Sub</Link>
        </LeftMenu>
      </StyledHeader>
    </nav>
  )
}

export default Header;

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0px 24px;
  border-bottom: 1px solid #eaeaea;
`

const RightMenu = styled.li`
  & a {
    display: flex;
    align-items: center;
    & img {
      width: 30px;
    }
    & p {
    margin-left: 2px;
    font-size: 16px;
    font-weight: 500;
    color: #E6B74A;
  }
  }
`

const LeftMenu = styled.li`
  font-size: 16px;
  font-weight: 500;
`