import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import "./TopBar.css";

const TopBar = () => {

    return (

        <div className='topbar'>
            <div className="topbarWrapper">

                <div className="topLeft">
                    <span className="logo">Admin Dashboard :)</span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src="logo192.png" alt="img" className='topAvatar' />
                </div>
            </div>
        </div>
    );
};

export default TopBar;