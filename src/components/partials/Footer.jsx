import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <>
            <div class="footer-padding"></div>
            <div class="footer">
                <p>Copyrights &copy; {year} BUILD FORMULA</p>
            </div>
        </>
    )
}

export default Footer;
