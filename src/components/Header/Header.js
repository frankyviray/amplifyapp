import React from 'react';



const Header = props => {

    return (
        <div id="nav-wrapper">
            <nav className="navbar">
                {/* <a className="navbar-brand"> */}
                <a href="https://acetools.com"><img src="assets/img/ace_logo.png" width="400px" height="" alt="" onClick="https://acetools.com" /></a>
                {/* <img src="assets/img/start.jpg" width="400px" height="" alt="" /> */}
                    {/* <form>
                        <a href="https://www.acetools.com/">Home</a>
                    </form>
                    <form>
                        <a href="https://www.acetoolscatalog.com/">Catalog</a>
                    </form>
                    <form>
                        <a href="https://www.aceindustrialtools.com/">Tools By Trade</a>
                    </form> */}
                <a href="https://acetools.com"><img src="assets/img/warehouse.jpg" width="50px" height="" alt="" onClick="https://acetools.com" />Home</a>
                <a href="https://www.aceindustrialtools.com"><img src="assets/img/catalog.jpg" width="50px" height="" alt="" onClick="https://aceindustrialtools.com" />Tools By Trade</a>
                <a href="https://www.acetools.com/contato-1"><img src="assets/img/contactus.jpeg" width="50px" height="" alt="" onClick="https://www.acetools.com/contato-1" />Contact</a>
                <a href="https://drive.google.com/file/d/1dXYiJZ85PrIGJI1dBfVFClP0Lxg0pz_-/view"><img src="assets/img/Catalog-0.jpg" width="50px" height="" alt="" onClick="https://drive.google.com/file/d/1dXYiJZ85PrIGJI1dBfVFClP0Lxg0pz_-/view" />Viper Catalog 2020</a>
                {/* </a> */}
            </nav>
        </div>
    )
}

export default Header;

