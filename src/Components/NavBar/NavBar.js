import React, { Component, PureComponent } from 'react'
import { Link } from 'react-router-dom';

import './navBar.css'
import Logo from '../../Assets/Images/logo.png'
import User from '../../Assets/Images/user.png'

const menu = [
    {
        img: "https://origin-staticv2.sonyliv.com/UI_icons/NEW_22052020/Android_Phone/home_icon_focused.png",
        name: "Home",
        to: "/"
    },
    {
        img: "https://origin-staticv2.sonyliv.com/UI_icons/NEW_22052020/Android_Phone/search_icon_focused.png",
        name: "Search",
        to: "/search"
    },
    {
        img: "https://origin-staticv2.sonyliv.com/UI_icons/NEW_22052020/Android_Phone/premium_icon_focused.png",
        name: "Premium",
        to: "/tvShows"
    },
    {
        img: "https://origin-staticv2.sonyliv.com/UI_icons/NEW_22052020/Android_Phone/mylist_icon_default.png",
        name: "SignIn",
        to: "/signin"
    },
    {
        img: "https://origin-staticv2.sonyliv.com/UI_icons/NEW_22052020/Android_Phone/more_icon_default.png",
        name: "More",
        to: ""
    }
]


class Navbar extends PureComponent {
    state = {
        clicked: false,
        user: ""
    }

    clickHandle = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    componentDidMount() {
        this.userChange = setInterval(() => this.setUser(), 100)
    }

    componentWillUnmount() {
        clearInterval(this.userChange);
    }

    setUser = () => {
        this.setState({
            user: localStorage.getItem('UserName')
        });
}

    render() {
        const { user } = this.state;

        return (
            <div>
                <div className="mobile-nav d-block d-md-none">
                    <div className="d-flex flex-row justify-content-around">
                        {menu.map(eachData =>
                            <Link to={eachData.to}>
                                <div key={eachData.name} className="d-flex flex-column justify-content-start pt-2" style={{ alignItems: "center" }}>
                                    <img src={eachData.img} alt="navbar" className="mobile-imgSize" />
                                    <p className="imgNames">{eachData.name}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="d-none d-md-block">
                    <nav>
                        <Link to="/">
                            <img src={Logo} alt='logo' className='logo'></img>
                        </Link>
                        <div className="menu-icon" onClick={this.clickHandle}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <div className='nav-left'>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                <Link className="link" to="/"><li className='list'>Home</li></Link>
                                <Link className="link" to="/tvShows"><li className='list'>TV Shows</li></Link>
                                <Link className="link" to="/originals"><li className='list'>Originals</li></Link>
                                <Link className="link" to="/sports"><li className='list'>Sports</li></Link>
                                <Link className="link" to="/tvShows"><li className='list'>Movie</li></Link>
                                <Link className="link" to="/premium" ><li className='list'>Premium</li></Link>
                                <Link className="link" to="/tvShows"><li className='list'>Games</li></Link>
                            </ul>
                        </div>
                        <div className='nav-right'>
                            <Link to="/search">
                            <i className="fas fa-search fa-lg"></i>
                            </Link>
                            <div className="dropdown">
                                <img className="dropimg" src={User} alt='use' className='user-pic'></img>
                                <div className="dropdown-content">
                                <hr className="m-0 p-0"></hr>
                                    {user ? <h5 className='dropLink'>{user}</h5> :
                                        <Link to='/signin'>
                                            <h5 className='dropLink'>Sign In</h5>
                                        </Link>}
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src='https://origin-staticv2.sonyliv.com/UI_icons/Subscribe_Now.png' className="imgSize" /> Subscribe Now</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src="https://origin-staticv2.sonyliv.com/UI_icons/New_Final_Icons_30052020/ActivateTV3x.png" className="imgSize" />Activate TV</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src="https://origin-staticv2.sonyliv.com/UI_icons/settings_icon.png" className="imgSize" />Settings & Perferences</a>
                                    <hr className="m-0 p-0"></hr>
                                    <a className='dropLink'> <img src="https://originpreprod-static.sonyliv.com/activate/offer.png" className="imgSize" /> Activate Offer</a>
                                    <hr className="m-0 p-0"></hr>
                                    <Link to="/">
                                        <a className='dropLink' onClick={() => {
                                            window.location.reload(false);
                                            window.localStorage.removeItem('UserName')
                                        }}> <i className="fas fa-signout"></i>Sign Out</a>
                                    </Link>


                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar



