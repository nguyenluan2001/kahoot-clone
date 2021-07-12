import React from 'react'
import {HeaderContainer} from "./style"
function Header({children}) {
    return (
        <HeaderContainer>
             <div className="logo">
                <img src="https://www.pngitem.com/pimgs/m/23-231544_kahoot-logo-png-transparent-png.png" alt="" />
            </div>
           {children}
        </HeaderContainer>
    )
}

export default Header
