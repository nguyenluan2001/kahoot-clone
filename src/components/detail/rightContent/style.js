import styled from "styled-components";
export const Container = styled.div`
padding:1rem 2rem;
min-height:inherit;
background:#f2f2f2;
.top-content{
    display:flex;
    justify-content:space-between;
    margin-bottom:1rem;
    span{
        font-size:1.2rem;
        font-weight:bold;
    }
    button{
        background:transparent;
        border:none;
        outline:none;
        font-size:1.2rem;
        font-weight:bold;
        text-decoration:underline
    }
}

`
export const QuizItemContainer = styled.div`
background:white;
margin-bottom:1.5rem;
cursor:pointer;
.info{
    display:grid;
    grid-template-columns:5fr 1fr;
    .left-content{
        padding:1rem;
        .question{
            font-weight:bold;
        }
    }
    .right-content{
        position:relative;
        background:rgb(204, 204, 204);
        img{
            width:100%;
            height:100%;
        }
        .time{
            position:absolute;
            background:rgb(80,137,173,0.5);
            right:10px;
            bottom:10px;
            border-radius:5px;
            padding: 0.2rem;
            color:white;
        }
    }
}
`
export const AnswerItemContainer=styled.div`
display:flex;
padding: 1rem;
border-top:1px solid gray;
.answer{
    margin-left:1rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    svg{
        font-size:1.2rem;
    }
}
.icon{
    border-radius:5px;
    background:${({color})=>color};
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    .icon-triangle{
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background:white;
        width:17px;
        height:17px;
    }
    .icon-rhombus{
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        background:white;
        width:17px;
        height:17px;
    }
    .icon-circle{
        clip-path: circle(50% at 50% 50%);
        background:white;
        width:17px;
        height:17px;
    }
    .icon-rectangle{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        background:white;
        width:17px;
        height:17px;
    }
}
`