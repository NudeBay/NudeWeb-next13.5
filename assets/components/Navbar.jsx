import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// Images
import logo from '../images/logo.png';
import home from '../svgs/line/home.svg';
import solidHome from '../svgs/solid/home.svg';
import search from '../svgs/line/search.svg';
import solidSearch from '../svgs/solid/search.svg';
import messages from '../svgs/line/chat.svg';
import solidMessages from '../svgs/solid/chat.svg';
import notifications from '../svgs/line/collection.svg';
import solidNotifications from '../svgs/solid/collection.svg';
import create from '../svgs/line/plus.svg';
import solidCreate from '../svgs/solid/plus.svg';
import profile from '../svgs/line/user.svg';
import solidProfile from '../svgs/solid/user.svg';
import settings from '../svgs/line/adjustments.svg';
import solidSettings from '../svgs/solid/adjustments.svg';

export default function Navbar() {
    const [homeIcon, setHomeIcon]=useState();
    const [homeStyle, setHomeStyle]=useState({fontWeight: "normal"});
    const [searchIcon, setSearchIcon]=useState();
    const [searchStyle, setSearchStyle]=useState({fontWeight: "normal"});
    const [messagesIcon, setMessagesIcon]=useState();
    const [messagesStyle, setMessagesStyle]=useState({fontWeight: "normal"});
    const [notificationsIcon, setNotificationsIcon]=useState();
    const [notificationsStyle, setNotificationsStyle]=useState({fontWeight: "normal"});
    const [createIcon, setCreateIcon]=useState();
    const [createStyle, setCreateStyle]=useState({fontWeight: "normal"});
    const [profileIcon, setProfileIcon]=useState();
    const [profileStyle, setProfileStyle]=useState({fontWeight: "normal"});
    const [settingsIcon, setSettingsIcon]=useState();
    const [settingsStyle, setSettingsStyle]=useState({fontWeight: "normal"});

    const activeMenuStyle = {
        fontWeight: "bold",
        backgroundColor: "#1a1a1c",
    };
    const activeLastChildMenuStyle = {
        fontWeight: "bold",
        backgroundColor: "#a00d33",
    };

    useEffect(() => {
        const path=window.location.pathname.split('/')[1];
        setHomeIcon(path === '' ? solidHome : home);
        setHomeStyle(path === '' ? activeMenuStyle : {fontWeight: "normal"});

        setSearchIcon(path === 'search' ? solidSearch : search);
        setSearchStyle(path === 'search' ? activeMenuStyle : {fontWeight: "normal"});

        setMessagesIcon(path === 'messages' ? solidMessages : messages);
        setMessagesStyle(path === 'messages' ? activeMenuStyle : {fontWeight: "normal"});

        setNotificationsIcon(path === 'notifications' ? solidNotifications : notifications);
        setNotificationsStyle(path === 'notifications' ? activeMenuStyle : {fontWeight: "normal"});

        setCreateIcon(path === 'create' ? solidCreate : create);
        setCreateStyle(path === 'create' ? activeMenuStyle : {fontWeight: "normal"});

        setProfileIcon(path === 'profile' ? solidProfile : profile);
        setProfileStyle(path === 'profile' ? activeMenuStyle : {fontWeight: "normal"});
        
        setSettingsIcon(path === 'settings' ? solidSettings : settings);
        setSettingsStyle(path === 'settings' ? activeLastChildMenuStyle : {fontWeight: "normal"});
    });

    return (
        <aside className={`leftPanel`}>
            <section className={`logo`}>
                <Link href={'/'}> 
                    <Image fill src={logo} draggable={false} alt={"NudeBay"}/>
                </Link>
            </section>
            <nav className={`menu`}>
                <hr/>
                <Link href={'/'} style={homeStyle} className={`menuItem`} id={`homeItem`}>
                    <Image fill src={homeIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Home</span>
                </Link>
                <hr/>
                <Link href={'/search'} style={searchStyle} className={`menuItem`} id={`searchItem`}>
                    <Image fill src={searchIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Search</span>
                </Link>
                <hr/>
                <Link href={'/messages'} style={messagesStyle} className={`menuItem`} id={`messagesItem`}>
                    <Image fill src={messagesIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Messages<sup style={{fontWeight: "normal"}}>0</sup></span>
                </Link>
                <hr/>
                <Link href={'/notifications'} style={notificationsStyle} className={`menuItem`} id={`notificationsItem`}>
                    <Image fill src={notificationsIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Notifications<sup style={{fontWeight: "normal"}}>0</sup></span>
                </Link>
                <hr/>
                <Link href={'/create'} style={createStyle} className={`menuItem`} id={`createItem`}>
                    <Image fill src={createIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Create</span>
                </Link>
                <hr/>
                <Link href={'/profile'} style={profileStyle} className={`menuItem`} id={`profileItem`}>
                    <Image fill src={profileIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Profile</span>
                </Link>
                <Link href={'/settings'} style={settingsStyle} className={`menuItem`} id={`settingsItem`}>
                    <Image fill src={settingsIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Settings</span>
                </Link>
            </nav>
        </aside>
    );
}