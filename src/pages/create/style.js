import styled from "styled-components";
export const Navbar=styled.div`
display:flex;
justify-content:space-between;
align-item:center;
width:100%;
padding-left:2rem;
`
export const Content=styled.div`
display:flex;
`
export const Wrapper=styled.div`
width:85%;
height:100vh;
display:${({toggleSetting})=>toggleSetting?"block":"flex"};
overflow:hidden;
`