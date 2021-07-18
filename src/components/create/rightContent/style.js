import styled from "styled-components";
export const RightContentContainer=styled.div`
width:20%;
// height:${({toggleSetting})=>toggleSetting?"0vh":"100vh"};
transform:${({toggleSetting})=>toggleSetting?"translateX(100%)":"translateX(0%)"};
transition:all 0.5s ease-in-out 0.2s;
padding:1rem;
background:white;
position:relative;
.time-limit{
    font-weight:bold;
    margin-bottom:2rem;
    svg{
        margin-right:0.5rem;
    }
    select{
        margin-top:0.5rem;
    }
}
.point{
    font-weight:bold;
    margin-right:0.5rem;
    svg{
        margin-right:0.5rem;
    }
    select{
        margin-top:0.5rem;
    }
}

`
