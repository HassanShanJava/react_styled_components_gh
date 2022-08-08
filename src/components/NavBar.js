import React from 'react';
import styled from 'styled-components';
import Img from "../images/logo.svg";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const NavbarContainer = styled.div`
     width:100%;
     height:80px;
     z-index:20;
     background:#fff;
  `;
    const NavbarWrap = styled.div`
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      z-index: 20;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
  `;
    const Logo = styled.div`
        width:128px;
        height:22px;
        background: url(${Img}) 0 45% no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    `
    const Nav = styled.nav`
    flex:1;
    position:relative;
    padding-left:50px;

    `
    const NavLink = styled(Link)`
    color:#000;
    padding: 0 15px;
    font-size: 16px;
    line-heiht: 50px;
    font-weight: 700;
    text-decoration:none;

    `;
    const Search = styled.div`
    right:235px;
    position: absolute; 
    `
    const SearchWrap = styled.div`
        width:220px;
        height:36px;
        position: rerlative;
        box-sizing:border-box;
        background: rgba(179, 191, 201, 0.15);
        line-height: 33px;
        padding-left:37px;
        border-radius:19px;


    `;
    const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;


    `;
    const Button = styled.div`
    width: 110px;
    color: #fff;
    cursor: pointer;
    height: 36px;
    font-size: 16px;
    box-sizing: border-box;
    background: #007cff;
    text-align: center;
    line-height: 36px;
    border-radius: 21px;


    
    `;
    const Input = styled.input`
        color:#000;
        width:196px;
        border:transparent;
        font-size:12px;
        background:transparent;
        outline:none;


        &::placeholder{
            color:#d1d8de;
        }


    `;



    return (

        <NavbarContainer>
            <NavbarWrap>
                <Logo>
                </Logo>
                <Nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Market</NavLink>
                    <NavLink to='/'>Trade</NavLink>
                    <NavLink to='/'>Pricing</NavLink>
                    <NavLink to='/'>Downloaod</NavLink>
                    <NavLink to='/'>Help</NavLink>
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type="text" placeholder="Symbol Name" />
                    </SearchWrap>
                </Search>
                <ButtonContainer>
                    <Button css={`
                        color: #037cff;
                        background:#fff;
                    `}>Sign Up</Button>
                    <Button>Log In</Button>
                </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default NavBar
