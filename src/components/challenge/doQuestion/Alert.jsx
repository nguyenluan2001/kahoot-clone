import React from 'react'
import {AlertContainer} from "./style"
function Alert({status,children,isClickAnswer}) {
    return (
        <AlertContainer status={status} isClickAnswer={isClickAnswer}>
           <div className="alert-content">
               {children}
           </div>
               
          
        </AlertContainer>
    )
}

export default Alert
