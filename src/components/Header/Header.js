import React from 'react';


const Header = props => {

    return (
        <div id="nav-wrapper">
            <nav className="navbar">
                <a className="navbar-brand">
                    <img src="assets/img/ace_logo.png" width="400px" height="" alt="" />
                    <form>
                        <p>Ace Industrial Supply, 7535 San Fernando Road, Burbank, CA</p>
                        <button onclick="window.location.href = 'https://acetools.com.com';">Home</button>
                        <button onclick="window.location.href = 'https://acetoolscatalog.com';">Catalog</button>
                        <button onclick="window.location.href = 'https://aceindustrialtools.com';">Tools By Trade</button>
                    </form>

                </a>
            </nav>
        </div>
    )
}

export default Header;

