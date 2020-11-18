import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
       background: #000;
       height: 80px;
       margin-top:-80px;
       display:flex;
       justify-content:center;
       align-items:center;
       font-size: 1rem;
       position: sticky;
       top:0;
       z-index:10;

       @media screem amd (max-width: 960px) {
           transition:0.5s all ease;
       }
`;
   export const NavbarContainer =styled.div`
   display:flex;
   justify-content:space-between;
   height:80px;
   z-index=1;
   width:100%;
   padding: 0 24px;
   max-width:1100px;
   `;
   export const Navlogo = styled(LinkR)`
    color: #fff;
      justify-self: flex-start;
      curser:pointer;
      font-size:1.5rem;
      display:flex;
      align-items:center;
      margin-left:24px;
      font-weight:bold;
      text-decoration: none;
   `;
   export const MobileIcon =styled.div`
   display:block;
   position:absolute;
   top:0;
   right:0;
   tranform:translated(-100%,60%);
   font-size:1.8rem;
   curser:pointer;
   color:#fff;
   `
   export const NavMenu =styled.ul`
   display:flex;
   align-items:center;
   list-style:none;
   text-align:center;
   margin-right:-20px;

   @media screen and (max-width:760px){
       display:none;
   }
   `
   export const NavItem =styled.li`
   height:80px;
   `
   export const NavLinks =styled(LinkS)`
   color:#fff;
   display:flex;
   align-items:center;
   text-decoration:none;
   padding: 0 1rem;
   height:100%;
   curser:pointer;
   &.active{
       border-bottom: 3 px solid #01bf71;
   }
   `;
   export const NavBtns = styled.nav`
   display:flex;
   align-items:center;
   @media screen and (max-width:768px){
       display:none;
   }
   `
   export const NavBtnLinks = styled(LinkR)`
   text-decoration:none;
    text-style:none;
    white-space:nowrap;
    padding:0 1rem;
    color:#fff;
    font-size:16px;
    outline:none;
    border:none;
    curser:pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transition:all 0.2s ease-in-out;
        color:#01afbf
    }
   `