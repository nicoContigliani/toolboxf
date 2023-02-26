import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <header className='header'>
                <h2>React Test App</h2>
            </header>
            <input />
            {children}

        </div>
    )
}

export default Layout
