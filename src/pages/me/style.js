import styled from "styled-components";
export const Navbar=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
padding-left:2rem;
`
export const LeftBar=styled.div`
display:flex;
.selected{
    color:#46178f;
    border-bottom:3px solid #46178f;

}
a{
    margin-right:1rem;
    font-weight:bold;
    color:black;
    text-decoration:none;
    padding:1rem 0rem;
    border-bottom:3px solid white;
    display:flex;
    align-items:center;
    svg{
        margin-right:0.5rem;
    }
    &:hover{
        border-bottom:3px solid #46178f;
        color:#46178f;
    }
    
}
`
export const RightBar=styled.div`
display:flex;
align-items:center;
.create{
    padding:0.6rem 1.5rem;;
    background:#1368ce;
    font-weight:bold;
    color:white;
    background:#1260BE;
    border-radius:5px;
    margin-right:1rem;
    text-decoration:none;
    transition:transform 0.5s ease-in-out;
    &:hover{
        transform:scale(0.95)
    }
}
`
export const UserInfo=styled.div`

.icon{
    background:#0aa3a3;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    color:white;
    cursor:pointer;
}
`