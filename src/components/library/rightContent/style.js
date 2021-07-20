import styled from "styled-components";
import {Link} from "react-router-dom"
export const Container = styled.div`
padding:1rem 1rem;
`
export const QuizItemContainer = styled.div`
display:grid;
grid-template-columns:1fr 5fr;
min-height:130px;
background:white;
padding:5px;
box-sizing:border-box;
margin-bottom:2rem;
cursor:pointer;
text-decoration:none;
position:relative;
&:hover{
    transform:scale(0.99);
    z-index:5;
}
.wrap-img{
    display:flex;
    height:inherit;
    overflow:hidden;
    justify-content:flex-end;
    align-items:center;
    input{
        height:16px;
        width:16px;
        margin-right:10px;rem;
    }
    .img{
        width:90%;
        background:rgb(204, 204, 204);
        img{
            width:100%;
            height:auto;
        }
    }
}
.content{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    .top-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0rem 1.5rem;
        .title{
            font-weight:bold;
            font-size:1.5rem;
        }
        .action{
            display:flex;
            svg{
                font-size:1.5rem;
            }
            .star{
                &:hover{
                    color:rgb(255, 192, 10);
                }
            }
            .control{
                .control-action{
                    display:block;
                    position:absolute;
                    list-style-type:none;
                    padding:0;
                    font-size: 1rem;
                    border:1px solid rgb(0,0,0,0.3);
                    border-radius:5px;
                    width:200px;
                    right:0px;
                    background:white;
                    z-index:20;
                    li{
                        cursor:pointer;
                        padding: 0.5rem;
                        svg{
                            margin-right:1rem;
                        }
                        &:hover{
                            background:rgb(241,241,241);
                        }
                    }
                }
            }
        }
    }
    .bottom-content{
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#f2f2f2;
        padding:0.2rem 1rem;
        .author{
            display:flex;
            align-items:center;
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
                margin-right:0.5rem;
            }
            .author-name{
                font-weight:bold;
                color:#8a8a8a;
            }
            }
        }
    }
}
`