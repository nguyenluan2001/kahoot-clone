import styled from "styled-components";
export const ModalContainer=styled.div`
width:100vw;
height:100vh;
background:rgba(0,0,0,0.6);
display:flex;
justify-content:center;
align-items:center;
position:fixed;
left:0;
right:0;
top:0;
bottom:0;
z-index:20;
`
export const ModalContent=styled.div`
width:30%;
height:30%;
background:white;
border-radius:10px;
padding:1rem;
`