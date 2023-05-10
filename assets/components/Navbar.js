import Image from 'next/image';
import Link from 'next/link';
// import React, { useState } from 'react';
import styles from '../scss/Navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link href='/'> 
                    <Image src={"/../images/logo.png"} width={"500"} height={"500"} draggable={false} alt={"logo"}/>
                </Link>
            </div>
            <ul className={styles.menu}>
                <hr/>
                <li className={styles.menuItem}> {/*dodać tu Linki*/}
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"home"} className="icon"/>
                    <span className={styles.text}>Home</span>
                </li>
                <hr/>
                <li className={styles.menuItem}>
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"search"} className="icon"/>
                    <span className={styles.text}>Search</span>
                </li>
                <hr/>
                <li className={styles.menuItem}>
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"messages"} className="icon"/>
                    <span className={styles.text}>Messages <sup style={{fontWeight: "normal"}}>0</sup></span>
                </li>
                <hr/>
                <li className={styles.menuItem}>
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"notification"} className="icon"/>
                    <span className={styles.text}>Notifications <sup style={{fontWeight: "normal"}}>0</sup></span>
                </li>
                <hr/>
                <li className={styles.menuItem}>
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"create"} className="icon"/>
                    <span className={styles.text}>Create</span>
                </li>
                <hr/>
                <li className={styles.menuItem}>
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"profile"} className="icon"/>
                    <span className={styles.text}>Profile</span>
                </li>
                <li className={styles.menuItem}>
                    <Image src={"/../images/logo.ico"} width={"500"} height={"500"} draggable={false} alt={"settings"} className="icon"/>
                    <span className={styles.text}>Settings</span>
                </li>
            </ul>
        </div>
    );
}