import styled from "styled-components";
export const Navbar = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
padding-left:2rem;
`
export const LeftBar = styled.div`
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
export const RightBar = styled.div`
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
export const UserInfo = styled.div`

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
#control-user{
    border:1px solid rgba(0,0,0,0.2);
    border-radius:5px;
    background:white;
    position:absolute;
    right:10px;
    padding:0.5rem 1rem;
    width:20%;
    z-index:5;
    .user-name
    {
        font-weight:bold;

    }
    .setting,.support{
        margin-bottom:1rem;
        a{
            padding:0.5rem 0.5rem;
            font-weight:bold;
            color:black;
            border-left:3px solid transparent;
            text-decoration:none;
            display:block;
            display:flex;
            justify-content:space-between;
            align-items:center;
            svg{
                margin-right:1rem;
            }
            &:hover{
                border-left:3px solid rgb(70, 23, 143);
                color:rgb(70, 23, 143);
            }
            .icon-up{
                display:none;
            }
            // .icon-down{
            //     display:none;

            // }
            &.show{
                .icon-up{
                    display:inline-block;
                }
                .icon-down{
                    display:none;
                    margin-left:auto;
                }
            }
        }
        ul{
            list-style-type:none;
            padding:0;
            margin:0;
            li{
                padding:0.5rem 0.5rem;
                border-left:3px solid transparent;
                cursor:pointer;
                &:hover{
                    border-left:3px solid rgb(70, 23, 143);
                    color:rgb(70, 23, 143);
                }

            }
            li:first-child{
                border-top:1px solid rgba(0,0,0,0.2);
            }
            li:last-child{
                border-bottom:1px solid rgba(0,0,0,0.2);
            }
        }
    }
    .sign-out{
        color:tomato;
        padding:0rem 0.5rem;
        cursor:pointer;
        svg{
            margin-right:1rem;
        }
    }
}
`