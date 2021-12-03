import React from "react";
import { Home } from "@material-ui/icons";
import { SubscriptionsOutlined } from "@material-ui/icons";
import { StorefrontOutlined } from "@material-ui/icons";
import { SupervisedUserCircle } from "@material-ui/icons";
import { AccountCircle } from "@material-ui/icons";
import { Flag } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <p>FlareBook</p>
                <div className="headerSearch">
                    <Search />
                    <input type="text" placeholder="Search FlareBook..." />
                </div>
            </div>
            <div className="headerCenter">
                <div className="headerBtn headerBtnActive">
                    <Home fontSize="large" />
                </div>
                <div className="headerBtn">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="headerBtn">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="headerBtn">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
            <div className="headerRight">
                <div className="headerBtn">
                    <AccountCircle fontSize="large" />
                </div>
                <div className="headerBtn">
                    <Flag fontSize="large" />
                </div>
            </div>
        </div>

    )
    
}

export default Header;