import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// Images
// navbar menu
import logo from '../assets/images/logo.png';
import home from '../assets/svgs/line/home.svg';
import solidHome from '../assets/svgs/solid/home.svg';
import search from '../assets/svgs/line/search.svg';
import solidSearch from '../assets/svgs/solid/search.svg';
import messages from '../assets/svgs/line/chat.svg';
import solidMessages from '../assets/svgs/solid/chat.svg';
import notifications from '../assets/svgs/line/collection.svg';
import solidNotifications from '../assets/svgs/solid/collection.svg';
import create from '../assets/svgs/line/plus.svg';
import solidCreate from '../assets/svgs/solid/plus.svg';
import profile from '../assets/svgs/line/user.svg';
import solidProfile from '../assets/svgs/solid/user.svg';
import settings from '../assets/svgs/line/adjustments.svg';
import solidSettings from '../assets/svgs/solid/adjustments.svg';

export default function Navbar() {
    // home
    const [homeIcon, setHomeIcon]=useState();
    const [homeStyle, setHomeStyle]=useState();
    // search
    const [searchIcon, setSearchIcon]=useState();
    const [searchStyle, setSearchStyle]=useState();
    // messages
    const [messagesIcon, setMessagesIcon]=useState();
    const [messagesStyle, setMessagesStyle]=useState();
    // notifications
    const [notificationsIcon, setNotificationsIcon]=useState();
    const [notificationsStyle, setNotificationsStyle]=useState();
    // create
    const [createIcon, setCreateIcon]=useState();
    const [createStyle, setCreateStyle]=useState();
    // profile
    const [profileIcon, setProfileIcon]=useState();
    const [profileStyle, setProfileStyle]=useState();
    // settings
    const [settingsIcon, setSettingsIcon]=useState();
    const [settingsStyle, setSettingsStyle]=useState();

    const activeMenuStyle = {
        fontWeight: "bold",
        backgroundColor: "#1a1a1c",
    };
    const activeLastChildMenuStyle = {
        fontWeight: "bold",
        backgroundColor: "#a00d33",
    };

    const handleMenuClick = (sub) => {
        setHomeIcon(home);
        setHomeStyle({fontWeight: "normal"});
        setSearchIcon(search);
        setSearchStyle({fontWeight: "normal"});
        setMessagesIcon(messages);
        setMessagesStyle({fontWeight: "normal"});
        setNotificationsIcon(notifications);
        setNotificationsStyle({fontWeight: "normal"});
        setCreateIcon(create);
        setCreateStyle({fontWeight: "normal"});
        setProfileIcon(profile);
        setProfileStyle({fontWeight: "normal"});
        setSettingsIcon(settings);
        setSettingsStyle({fontWeight: "normal"});

        switch(sub) {
            case "home":
                setHomeIcon(solidHome);
                setHomeStyle(activeMenuStyle);
                break;
            case "search":
                setSearchIcon(solidSearch);
                setSearchStyle(activeMenuStyle);
                break;
            case "messages":
                setMessagesIcon(solidMessages);
                setMessagesStyle(activeMenuStyle);
                break;
            case "notifications":
                setNotificationsIcon(solidNotifications);
                setNotificationsStyle(activeMenuStyle);
                break;
            case "create":
                setCreateIcon(solidCreate);
                setCreateStyle(activeMenuStyle);
                break;
            case "profile":
                setProfileIcon(solidProfile);
                setProfileStyle(activeMenuStyle);
                break;
            case "settings":
                setSettingsIcon(solidSettings);
                setSettingsStyle(activeLastChildMenuStyle);
                break;
            default:
                setHomeIcon(solidHome);
                setHomeStyle(activeMenuStyle);
                break;
        }
    };

    useEffect(() => handleMenuClick(window.location.pathname.split('/')[1]), []);

    return (
        <aside className={`leftPanel`}>
            <section className={`logo`}>
                <Link href={'/'} onClick={() => handleMenuClick('home')}> 
                    <Image fill src={logo} draggable={false} alt={"NudeBay"}/>
                </Link>
            </section>
            <nav className={`menu`}>
                <hr/>
                <Link href={'/'} onClick={() => handleMenuClick('home')} style={homeStyle} className={`menuItem`} id={`homeItem`}>
                    <Image fill src={homeIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Home</span>
                </Link>
                <hr/>
                <Link href={'/search'} onClick={() => handleMenuClick('search')} style={searchStyle} className={`menuItem`} id={`searchItem`}>
                    <Image fill src={searchIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Search</span>
                </Link>
                <hr/>
                <Link href={'/messages'} onClick={() => handleMenuClick('messages')} style={messagesStyle} className={`menuItem`} id={`messagesItem`}>
                    <Image fill src={messagesIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Messages<sup style={{fontWeight: "normal"}}>0</sup></span>
                </Link>
                <hr/>
                <Link href={'/notifications'} onClick={() => handleMenuClick('notifications')} style={notificationsStyle} className={`menuItem`} id={`notificationsItem`}>
                    <Image fill src={notificationsIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Notifications<sup style={{fontWeight: "normal"}}>0</sup></span>
                </Link>
                <hr/>
                <Link href={'/create'} onClick={() => handleMenuClick('create')} style={createStyle} className={`menuItem`} id={`createItem`}>
                    <Image fill src={createIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Create</span>
                </Link>
                <hr/>
                <Link href={'/profile'} onClick={() => handleMenuClick('profile')} style={profileStyle} className={`menuItem`} id={`profileItem`}>
                    <Image fill src={profileIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Profile</span>
                </Link>
                <Link href={'/settings'} onClick={() => handleMenuClick('settings')} style={settingsStyle} className={`menuItem`} id={`settingsItem`}>
                    <Image fill src={settingsIcon} draggable={false} alt={''} className={`icon`}/>
                    <span className={`text`}>Settings</span>
                </Link>
            </nav>
        </aside>
    );
}