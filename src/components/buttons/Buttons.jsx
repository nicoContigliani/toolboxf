import React from 'react'
import Button from 'react-bootstrap/Button';

const Buttons = ({
    onClick,
    display,
    textLavel,
    className
}) => {
    if (display === 'none') {

    }
    return (
        <div>
            <Button variant="secondary"
                className='button1'

                onClick={onClick()}

            >
                {textLavel ? textLavel : ""}

            </Button>
            {/* {' '} */}
        </div>
    )
}

export default Buttons
