import styled from "styled-components";
export const NavbarContainer=styled.div`
display:flex;
justify-content:space-between;
padding:1rem 2rem;
border-bottom:2px solid #f2f2f2;
.logo{
    width:10%;
    img{
        width:100%;
    }
}
`
export const RightNav=styled.div`
display:flex;
align-items:center;
a{
    margin-left:20px;
    text-decoration:none;
    font-weight:bold;
    color:black;
}
.contact{
    border:1px solid #1368CE;
    padding:0.5rem;
    height:fit-content;
    color:#1368CE;
    border-radius:5px;
    &:hover{
        background:#1368CE;
        color:white;
    }
}
.explore,.play,.login{
  &::after{
      content:"";
      height:2px;
      width:0%;
      display:block;
      background:#1368CE;
      transition:width 0.5s ease-in-out;
  }
  &:hover{
      color:#1368CE;
      &::after{
          width:100%;
      }
  }
}
.sign-up{
    background:#26890c;
    border-radius:5px;
    padding:0.5rem;
    color:white;
    transition:transform 0.5s ease-in-out;
    &:hover{
        transform:scale(0.95)
    }
}
`