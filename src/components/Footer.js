import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="container">
                <p>© Patchanop.com 2017-{new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer
