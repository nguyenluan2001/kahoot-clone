import styled from "styled-components";
export const Container = styled.div`
width:100vw;
height:100vh;
background:cyan;
position:relative;
.order-question{
    clip-path: polygon(0 0, 100% 0, 89% 83%, 0 100%);
    background:rgba(0,0,0,0.3);
    width:200px;
    height:100px;
    font-size:2rem;
    font-weight:bold;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
}
.question{
    background:white;
    font-size:2rem;
    font-weight:bold;
    text-align:center;
    margin-top:10%;
    padding:0.5rem 0rem;
}
.timeline{
    padding:0rem 1rem;
    position:absolute;
    bottom:20px;
    left:0;
    right:0;
    z-index:5;
}
`