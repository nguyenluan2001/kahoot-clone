import styled from "styled-components";
export const Container = styled.div`
height:inherit;
background:white;
position:relative;
.img{
    height:300px;
    overflow:hidden;
    img{
        width:100%;
    }
}
.info{
padding:1rem 2rem;

    .title{
        font-size:2rem;
        font-weight:bold;
    }
    .statis{
        list-style-type:none;
        display:flex;
        margin:0;
        padding:0;
        li{
            margin-right:2rem;
        }
    }
    .actions{
        display:flex;
        justify-content:space-between;
        .right-action{
            font-size:1.5rem;
            display:flex;
            align-items:center;
            .star
            {
                cursor:pointer;
                &:hover{
                    color:rgb(255, 192, 10);
                }
            }

            .control{
                cursor:pointer;
                .control-action{
                    display:block;
                    position:absolute;
                    list-style-type:none;
                    padding:0;
                    font-size: 1rem;
                    border:1px solid rgb(0,0,0,0.3);
                    border-radius:5px;
                    width:200px;
                    right:20px;
                    background:white;
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
    .author{
        display:flex;
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
        .author-info{
            line-height:1;
            p{
                margin:0;
                font-size:0.9rem;
            }
        }
    }
}
`