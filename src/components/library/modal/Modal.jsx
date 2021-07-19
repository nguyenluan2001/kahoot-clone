import React from 'react'
import { ModalContainer, ModalContent } from "./style"
function Modal({ children }) {
    return (
        <ModalContainer>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal
