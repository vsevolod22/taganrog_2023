import './_header.scss';

import { Component } from 'react';
import logo from '../../resources/img/header/efreksium.png'
import profile from '../../resources/img/header/profile.png'
import search from '../../resources/img/header/search.png'


class Header extends Component {
    


    render() {

        return (
            <header className="header">
                
                <a href="#" className="header__logo">
                    <img className="header__logo_img" src={logo} alt="logo"/>
                </a>
                <div className="header__hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className="header_nav header__menu">
                    <a href="#">
                        <span>Чем заняться </span>
                    </a>
                    <a href="#">
                        <span>Где поесть</span>
                    </a>
                    <a href="#">
                        <span>Полезная информация</span>

                    </a>
                    <a href="#">
                        Рандом
                    </a>
                </nav>
                <div className="header__icons">
                    <div className="header__search"><img src={search} alt="search" className="search"/></div>
                    <div className="header__profile"><img src={profile} alt="profile" className="profile"/></div>
                    
                </div>
            </header>
        )

    }
}
export default Header