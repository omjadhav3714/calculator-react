import React from 'react';

export const Footer = () => {
    let linkStyle = {
        color: "#fff",
    }
    return (
        <footer className="footer py-2 bg-dark text-light">
            <div class="container my-2">
                <p className="text-center">Copyright &copy; <a href="https://omjadhav.netlify.app/" style={linkStyle}>Croders</a></p>
            </div>
        </footer>
    )
}
