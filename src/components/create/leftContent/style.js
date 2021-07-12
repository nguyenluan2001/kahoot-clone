import styled from "styled-components";
export const LeftContentContainer = styled.div`
width:15%;
height:100vh;
background:white;
box-shadow:-3px 8px 5px 5px black;
z-index:10;
`
export const QuizItem = styled.div`
display:grid;
grid-template-columns:1fr 5fr;
padding:1rem;
background:#eaf4fc;
.action{
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    svg{
        margin-top:1rem;
        cursor:pointer;
    }
}
.content{
    text-align:center;
    background:white;
    padding:0.4rem;
    border-radius:5px;
    .wrap-time{
        width:30px;
        height:30px;
        margin:0px auto;
        .time{
            border:1px solid black;
            border-radius:50%;
        }
    }
    .answers{
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-rows:10px 10px;
        grid-gap:5px 5px;
        .answer{
            border:1px solid black;
        }
        .correct{
            background:green;
        }
    }
}
`
export const WrapListQuiz=styled.div`
max-height:500px;
overflow-y:scroll;
`