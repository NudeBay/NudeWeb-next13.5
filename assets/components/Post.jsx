import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../scss/Home.module.scss';

export default function Post({ id, content, contentType, tags, author, date, likes, views }) { // ! include ban to badges
    // Content format: check is content a video or a picture or a text
    let newContent;
    switch (contentType) {
        case "text":
            newContent=<span>{content}</span>;
            break;
        case "image":
            newContent=<Image src={content} width={"500"} height={"500"} alt={""} title={author.nick} loading="lazy" />;
            break;
        case "video":
            newContent=<video src={content} alt={""} title={author.nick} autoPlay controls muted loop/>;
            break;
        default:
            newContent=<span>{content}</span>;
            break;
    }

    // Tags format
    const badgesList={
        "Owner": "../../public/svgs/solid/shield-check.svg",
        "Admin": "../../public/svgs/line/shield-check.svg",
        "Mod": "../../public/svgs/line/support.svg",
        "Developer": "../../public/svgs/line/code.svg",
        "Verified": "../../public/svgs/line/badge-check.svg",
        "PussyPass": "../../public/svgs/line/check-circle.svg",
        "Ban": "../../public/svgs/line/ban.svg",
    };

    // Date format: mm dd, yyyy at hh:mm
    date=new Date(date);
    const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let newDate=month[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();//+' at '+date.getHours()+':'+date.getMinutes();

    // Views format: 1.2k, 1.2m, 1.2b
    let newViews=views;
    if (views>=1000) {
        newViews=views/1000;
        if (views>=1000000) {
            newViews=views/1000000;
            if (views>=1000000000) {
                newViews=views/1000000000;
                newViews=newViews.toFixed(1)+'b';
            } else {
                newViews=newViews.toFixed(1)+'m';
            }
        } else {
            newViews=newViews.toFixed(1)+'k';
        }
    }

    // Likes format: 1.2k, 1.2m, 1.2b
    let newLikes=likes;
    if (likes>=1000) {
        newLikes=likes/1000;
        if (likes>=1000000) {
            newLikes=likes/1000000;
            if (likes>=1000000000) {
                newLikes=likes/1000000000;
                newLikes=newLikes.toFixed(1)+'b';
            } else {
                newLikes=newLikes.toFixed(1)+'m';
            }
        } else {
            newLikes=newLikes.toFixed(1)+'k';
        }
    }

    const [menuLikeIcon, setMenuLikeIcon] = useState(()=>"../../public/svgs/line/heart.svg");
    const [liked, setLiked] = useState(()=>false);

    const [menuViewIcon, setMenuViewIcon] = useState(()=>"../../public/svgs/line/eye.svg");
    const [viewed, setViewed] = useState(()=>false);

    const [menuReportIcon, setMenuReportIcon] = useState(()=>"../../public/svgs/line/exclamation-circle.svg");
    const [reported, setReported] = useState(()=>false);

    const [menuSaveIcon, setMenuSaveIcon] = useState(()=>"../../public/svgs/line/bookmark.svg");
    const [saved, setSaved] = useState(()=>false);

    const handleMenuClick = (menuItem) => {
        switch (menuItem) {
            case "like":
                if (liked) {
                    setMenuLikeIcon(()=>"../../public/svgs/line/heart.svg");
                    setLiked(()=>false);
                    // TODO: remove from likes post (by api)
                } else {
                    setMenuLikeIcon(()=>"../../public/svgs/solid/heart.svg");
                    setLiked(()=>true);
                    // TODO: add to likes post (by api)
                }
                break;
            case "view":
                if (viewed) {
                    setMenuViewIcon(()=>"../../public/svgs/line/eye.svg");
                    setViewed(()=>false);
                    // TODO: remove from views post (by api)
                } else {
                    setMenuViewIcon(()=>"../../public/svgs/solid/eye.svg");
                    setViewed(()=>true);
                    // TODO: add to views post (by api)
                }
                break;
            case "report":
                if (reported) {
                    setMenuReportIcon(()=>"../../public/svgs/line/exclamation-circle.svg");
                    setReported(()=>false);
                    // TODO: remove from reported posts (by api)
                } else {
                    setMenuReportIcon(()=>"../../public/svgs/solid/exclamation-circle.svg");
                    setReported(()=>true);
                    // TODO: add to reported posts (by api)
                }
                break;
            case "save":
                if (saved) {
                    setMenuSaveIcon(()=>"../../public/svgs/line/bookmark.svg");
                    setSaved(()=>false);
                    // TODO: remove from saved posts (by api)
                } else {
                    setMenuSaveIcon(()=>"../../public/svgs/solid/bookmark.svg");
                    setSaved(()=>true);
                    // TODO: add to saved posts (by api)
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="player">
            <div className="top-bar" onClick={(e) => console.log('test')}>
                <Image src={author.picture} width={"500"} height={"500"} alt="" title={author.nick} className="icon" draggable="false" />
                <span className="text" title="see profile">{author.nick}</span>
                <div className="badges">
                    {
                        author.badges.map((badge, index) => <Image key={index} src={badgesList[badge]} width={"500"} height={"500"} alt={badge} title={badge} className="badge" draggable="false" />)
                    }
                </div>
                <ul className="info">
                    <li className="info-item" title={views}>
                        <Image src="../../public/svgs/line/play.svg" width={"500"} height={"500"} alt="" draggable="false" />
                        {newViews}
                    </li>
                    <li className="info-item" title={date}>
                        <Image src="../../public/svgs/line/calendar.svg" width={"500"} height={"500"} alt="" draggable="false" />
                        {newDate}
                    </li>
                </ul>
            </div>
            <div className="content">
                {newContent}
            </div>
            <div className="bot-bar">
                <ul className="menu">
                    <li className="menu-item">
                        <Image src={menuLikeIcon} width={"500"} height={"500"} alt="like" title="likes" draggable="false" onClick={()=>handleMenuClick('like')} />
                    </li>
                    <li className="menu-item">
                        <Image src={menuViewIcon} width={"500"} height={"500"} alt="see more" title="see more" draggable="false" onClick={()=>handleMenuClick('view')} />
                    </li>
                    <li className="menu-item">
                        <Image src={menuReportIcon} width={"500"} height={"500"} alt="report" title="report" draggable="false" onClick={()=>handleMenuClick('report')} />
                    </li>
                    <li className="menu-item">
                        <Image src={menuSaveIcon} width={"500"} height={"500"} alt="save" title="save" draggable="false" onClick={()=>handleMenuClick('save')} />
                    </li>
                </ul>
                <ul className="tag-list">
                    {
                        tags.map((tag, index) => <li key={index} className={styles.tag} onClick={(e) => props.onChange(`/search/#${tag}`)}>{tag}</li>)
                    }
                </ul>
            </div>
        </div>
    );
} 
