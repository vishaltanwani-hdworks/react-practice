import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/books.png";
import MenuItems from "../MenuItems";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const Nav = () => {
    return (
        <nav>
            <img className="logo" width="60%" src={Logo} alt="bookslelogo" />
            <div className="nav-more">
                <div className="nav-links">
                    {MenuItems.map((x, i) => (
                        <Link key={i} className="nav-style" to={x.link}>
                            <div className="nav-icon">{x.icon}</div>
                            <li>{x.menuName}</li>
                        </Link>
                    ))}
                </div>
                <div className="user-location">
                    <div className="nav-icon"><LocationOnOutlinedIcon /></div>
                    <p style={{textOverflow:"ellipsis",overflow:"hidden"}}>KubernagarAhmedabad</p></div>
            </div>
        </nav>
    );
}

export default Nav;
