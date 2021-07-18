import styled from "styled-components";
export const MainContentContainer = styled.div`
width:${({ toggleSetting }) => toggleSetting ? "100%" : "80%"};
height:100vh;
background:#f2f2f2;
padding:1rem 1rem;
transition:all 0.5s ease-in-out;
position:relative;
.question{
    background:white;
    display:grid;
    grid-template-columns:2fr 30fr 2fr;
    margin-bottom:20px;
    border-radius:5px;
    input{
        text-align:center;
        border:none;
        outline:none!important;
        padding:1rem 0rem;
        font-weight:bold;
        font-size:1.5rem;
    }
    .num_char{
        color:gray;
    }

}
.image{
    width:30%;
    height:40%;
    margin:0px auto;
    margin-bottom:4rem;
    .preview
    {
        height:100%;
        // background-image:url("https://firebasestorage.googleapis.com/v0/b/kahoot-d433f.appspot.com/o/download%20(10).jpg?alt=media&token=0e587fcc-9181-4782-bd2b-f79f640f0064");
        background-position:center top;
        background-size:contain;
        background-repeat:no-repeat;
        background-color:rgb(204, 204, 204);
        display:flex;
        justify-content:center;
        align-items:flex-end;
        &:fullscreen{
            background-size:contain;

        }
        
    }
    .wrap-btn{
        text-align:center;
        margin-top:0.5rem;
        .upload_img{
            background:#1368ce;
            padding:0.5rem 1rem;
            color:white;
            font-weight:bold;
            border-radius:5px;
            margin-bottom:1rem;
            cursor:pointer;
            margin-right:1rem;
        }
        .preview_img{
            background:#1368ce;
            padding:0.5rem 1rem;
            color:white;
            font-weight:bold;
            border-radius:5px;
            margin-bottom:1rem;
            cursor:pointer;

        }
    }
}
.toggleSetting{
    background:white;
    position:absolute;
    padding:0.5rem;
    font-size:1.5rem;
    right:0px;
    top:40%;
    border-radius:5px;
    cursor:pointer;
}
`
export const WrapAnswer = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:100px 100px;
grid-gap:10px 10px;
`
export const AnswerContainer = styled.div`
background:white;
display:flex;
align-items:center;
padding:5px;
border-radius:5px;
&.typing{
    background:${({ color }) => color};
}
.wrap-icon{
    width:9%;
    height:100%;
    background:${({ color }) => color};
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
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
}
form
{
    width:80%;

    input{
        border:none;
        outline:none;
        padding-left:1rem;
        background:${({ color, typing }) => typing ? color : "white"};
        color:${({ typing }) => typing ? "white" : "black"};
        width:100%;
     
    }
}
.wrap-check{
    height:100%;
    display:flex;
    align-items:center;
    position:relative;
    .num_char{
        position:absolute;
        top:0px;
        right:0px;
        color:white;
    }
    .check{
        width:40px;
        height:40px;
        border:3px solid white;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        background:${({ check }) => check ? "#66bf39" : "transparent"};
        svg{
            color:white;
            font-size:1.5rem;
            visibility:${({ check }) => check ? "visible" : "hidden"};
        }
      
        &:hover{
            svg{
            visibility:visible;

            }
        }
    }
}
`