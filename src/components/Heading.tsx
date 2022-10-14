import React from 'react'
import { Avatar, Navbar, NavTitle } from 'zmp-framework/react'
import ButtonComponent from './ButtonComponent'

const Heading = () => {
    return (
        <div className="navbar">
            <Navbar>
                <div className="navbar-avatar">
                    <Avatar src={'https://picsum.photos/200/300'} />
                </div>

                <div className="navbar-title">
                    <NavTitle>Mini Shop v2</NavTitle>
                </div>
                <div className="navbar-button">
                    <ButtonComponent title="Nhắn tin" />
                </div>
            </Navbar>
        </div>
    )
}

Heading.displayName = 'zmp-heading'

export default Heading
