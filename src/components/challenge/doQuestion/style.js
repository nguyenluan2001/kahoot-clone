import styled from "styled-components";
export const Container=styled.div`
width:100vw;
height:100vh;
background:#f2f2f2;
position:relative;
.question{
    background:white;
    text-align:center;
    font-size:2rem;
    font-weight:bold;
    padding:1.5rem 0rem;
    z-index:20;
}
.img{
    width:20%;
    margin:0px auto;
    padding: 2rem 0rem;
    img{
        width:100%;
    }
}
.count-down{
    width:100px;
    height:100px;
    border-radius:50%;
    background:#864cbf;
    color:white;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    position:absolute;
    top: 30%;
    left:10%;
}
.answers{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px 10px;
    padding:0rem 2rem;
}
.next{
    position: absolute;
    right:5%;
    top:30%;
}
`
export const AnswerItemContainer=styled.div`
display:flex;
padding:2rem 1rem;
background:${({color})=>color};
border-radius:5px;
cursor:pointer;
&.true{
    background:#67bf3a
}
&.false{
    background:#ff3456;
}
.answer{
    color:white;
    margin-left:1rem;
}
.icon-triangle{
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background:white;
    width:25px;
    height:25px;
}
.icon-rhombus{
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background:white;
    width:25px;
    height:25px;
}
.icon-circle{
    clip-path: circle(50% at 50% 50%);
    background:white;
    width:25px;
    height:25px;
}
.icon-rectangle{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    background:white;
    width:25px;
    height:25px;
}
`
export const AlertContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
padding:1rem 0rem;
background:${({status})=>status=="true"?"rgb(102,191,57)":"rgb(255,52,86)"};
animation:animation 0.5s ease-in-out;
position:absolute;
z-index:1;
.alert-content{
    background:rgba(0,0,0,0.3);
    color:white;
    text-align:center;
    padding:0rem 2rem;
    border-radius:5px;
}
@keyframes animation{
    from {
        transform:translateY(-100%);

    }
    to{
        transform:translateY(0%);
        z-index:10;
    }
}
`