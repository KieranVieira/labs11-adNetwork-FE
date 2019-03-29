import styled from 'styled-components';
// Left navigation styles

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    width: 65px;
    height: 100vh;
    background-color: #0A88DC;
    @media (max-width: 900px){
        display: none;
    }
`;

export const HomeButton = styled.div`
    width: 65px;
    height: 65px;
    background-color: #0B6FB2;
    transition: .2s;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        height: 65px;
        text-decoration: none;
        color: white;
        font-size: 1.7rem;
    }
    &:hover{
        cursor: pointer;
        background-color: #0B67A4;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 35px;
`;

export const NavButtonContainer = styled.div`
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 65px;
        height: 50px;
        margin: 10px 0;
        color: rgba(255, 255, 255, 0.70);
        transition: .3s;
        i{
            font-size: 1.8rem;  
        }
        &:hover{
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.1)
        }
    }
    .active{
        width: 62px;
        color: white;
        border-left: 3px solid white;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

// Top Nav Styles

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 65px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    select{
        color:  rgba(103, 103, 103, 0.5);
        width: 250px;
        height: 100%;
        border: 1px solid rgba(103, 103, 103, 0.5);
        border-radius: 8px;
        font-size: 0.9rem;
        @media (max-width: 900px){
            margin-right: unset;
        }
        @media (max-width: 560px){
            width: 100%;
        }
    }
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #0A88DC;
        height: 100%;
        padding: 0 25px;
        margin: 0 15px;
        border-radius: 8px; 
        font-size: 0.9rem;
        text-decoration: none;
        transition: .2s;
        &:hover{
            background-color: #097AC6;
        }
        @media (max-width: 900px){
            display: none;
        }
    }
    @media (max-width: 900px){
        width: 80%;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    i{
        color: #6F6F6F;
        font-size: 1.4rem;
        margin-left: 15px;
        &:hover{
            cursor: pointer;
        }
    }
    div{
        display: flex;
        align-items: center;
        margin: 0 20px;
        img{
            background-color: #7A7A7A;
            height: 40px;
            width: 40px;
            margin-right: 8px;
            border: 1px solid rgba(103, 103, 103, 0.25);
            border-radius: 25px;
        }
        h2{
            color: #6F6F6F;
            margin: unset;
            font-size: 1.1rem;
            font-weight: 100;
            @media (max-width: 900px){
                display: none;
            }
        }
        @media (max-width: 900px){
            margin: 0 0 0 10px;
        }
    }
`;

export const Header = styled.h1`
    color: #7A7A7A;
    margin: 0 20px;
    font-size: 1.3rem;
    font-weight: 500;
    i{
        margin-right: 5px;
    }
    @media (max-width: 900px){
        display: none;
    }
`;

// Mobile navigation

export const MobileHamburger = styled.div`
    display: none;
    width: 65px;
    height: 65px;
    transition: .2s;
    margin-right: 15px;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0B6FB2;
        width: 65px;
        height: 65px;
        margin: unset;
        padding: unset;
        border-radius: unset;
        text-decoration: none;
        color: white;
        font-size: 1.7rem;
    }
    &:hover{
        cursor: pointer;
        background-color: #0B67A4;
    }
    @media (max-width: 900px){
        display: flex;
    }
`;

export const MobileCreate = styled.div`
    display: none;
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 60px;
    height: 60px;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        padding: unset;
        margin: unset;
        border-radius: 30px;
        background-color: #0A88DC;
        color: white;
        font-size: 1.6rem;
        transition: .2s;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        &:hover{
            cursor: pointer;
            background-color: #0B67A4;
        }
    }
    @media (max-width: 900px){
        display: flex;
    }
`;

export const MobileNav = styled.div`

`;