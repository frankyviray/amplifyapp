import React from 'react';



const Header = props => {

    return (
        <div id="nav-wrapper">
            <nav className="navbar">
                {/* <a className="navbar-brand"> */}
                <a href="https://acetools.com"><img src="assets/img/ace_logo.png" width="400px" height="" alt="" onClick="https://acetools.com" /></a>
                    {/* <form>
                        <a href="https://www.acetools.com/">Home</a>
                    </form>
                    <form>
                        <a href="https://www.acetoolscatalog.com/">Catalog</a>
                    </form>
                    <form>
                        <a href="https://www.aceindustrialtools.com/">Tools By Trade</a>
                    </form> */}
                
                {/* </a> */}
            </nav>
        </div>
    )
}

export default Header;

