import styled from "styled-components";
export const Container=styled.div`
width:100vw;
heigth:100vh;
background:rgba(48, 48, 45, 0.31);
position:fixed;
left:0;
right:0;
top:0;
bottom:0;
display:flex;
justify-content:center;
align-items:center;
z-index:20;

`
export const Content=styled.div`
width:60vw;
height:95vh;
background:white;
animation:animate 0.2s ease-in;
border-radius:10px;
padding:1rem 2rem;

@keyframes animate{
    from{
        transform:scale(0.95)
    }
    to{
        transform:scale(1)
    }
}
`
export const Info=styled.div`
display:grid;
grid-template-columns:3fr 2fr;
grid-gap:0 20px;
height:85%;
label{
    font-weight:bold;
}
`
export const LeftContent=styled.div`
// padding:1rem 2rem;
`
export const RightContent=styled.div`
.image{
    .previewSummary{
        width:100%;
        height:250px;
        background-image:url(https://assets-cdn.kahoot.it/builder/v2/assets/placeholder-cover-kahoot.ea3003d9.png);
        background-position:center top;
        background-size:cover;
        background-repeat:no-repeat;
        background-color:rgb(204, 204, 204);
        display:flex;
        justify-content:center;
        align-items:flex-end;
        .upload_img{
            background:#1368ce;
            padding:0.5rem 1rem;
            color:white;
            font-weight:bold;
            border-radius:5px;
            margin-bottom:1rem;
        }
    }
}

`
export const WrapButton=styled.div`
text-align:center;
.cancel,.done{
    border:none;
    padding:0.5rem 2rem;
    border-radius:5px;
    font-weight:bold;
    transition:transform 0.3s ease-in-out;
    box-shadow:2px -1px 5px 2px black inset ;
    &:hover{
        transform:scale(0.95)
    }
}
.done{
    background:#26890c;
    color:white;
    margin-left:1rem;
}

`