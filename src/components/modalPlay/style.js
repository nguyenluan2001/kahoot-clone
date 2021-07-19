import styled from "styled-components";
export const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,0.5);
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:10;
`
export const Content=styled.div`
width:50vw;
height:80vh;
background:white;
padding:1rem 2rem;
border-radius:5px;
.ways{
    display:grid;
    grid-template-columns:250px 250px;
    justify-content:center;
    grid-gap:0px 80px;
    margin-bottom:2rem;
    padding-top:3rem;
    .way{
        background:rgb(242,242,242);
        text-align:center;
        .wrap-btn{
            padding:0rem 1rem 1rem 1rem;
            button{
                width:80%;
            }
        }
        img{
            width:100%;
        }
    }
}
.practice{
    background:rgb(242,242,242);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    border-radius:5px;
}
.close-btn{
    display:block;
    margin:0px auto;
    border:none;
    background:rgb(242,242,242);
    padding:0.5rem 2rem;
    outline:none;
    font-weight:bold;
    margin-top:2rem;
    border-radius:5px;
}
`