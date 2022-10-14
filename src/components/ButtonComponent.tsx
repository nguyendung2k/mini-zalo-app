import React from 'react'
import { Button } from 'zmp-framework/react'

interface button {
    title?: string
    onClick?: () => void
}

const ButtonComponent = ({ title, onClick }: button) => {
    return (
        <div className="button">
            <Button onClick={onClick} fill>
                {title}
            </Button>
        </div>
    )
}

export default ButtonComponent
