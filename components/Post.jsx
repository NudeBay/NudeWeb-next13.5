import Image from 'next/image';
import Link from 'next/link';
import styles from '../assets/scss/Home.module.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Images
// badges
import owner from '../assets/svgs/solid/shield-check.svg';
import admin from '../assets/svgs/line/shield-check.svg';
import mod from '../assets/svgs/line/support.svg';
import developer from '../assets/svgs/line/code.svg';
import verified from '../assets/svgs/line/badge-check.svg';
import pussyPass from '../assets/svgs/line/check-circle.svg';
import ban from '../assets/svgs/line/ban.svg';
// post menu
import like from '../assets/svgs/line/heart.svg';
import solidLike from '../assets/svgs/solid/heart.svg';
import view from '../assets/svgs/line/eye.svg';
import solidView from '../assets/svgs/solid/eye.svg';
import report from '../assets/svgs/line/exclamation-circle.svg';
import solidReport from '../assets/svgs/solid/exclamation-circle.svg';
import save from '../assets/svgs/line/bookmark.svg';
import solidSave from '../assets/svgs/solid/bookmark.svg';
// post info
import postViews from '../assets/svgs/line/play.svg';
import postDate from '../assets/svgs/line/calendar.svg';

export default function Post({ id, content, contentType, tags, author, date, likes, views }) {
    // Content format: check is content a video or a picture or a text
    let newContent;
    switch(contentType) {
        case 'text':
            newContent=(
                <span>{content}</span>
            );
            break;
        case 'image':
            newContent=(
                <Image src={content} width={250} height={250} alt={""} title={author.nick} loading="lazy" />
            );
            break;
        case 'video':
            newContent=(
                <video src={content} alt={""} title={author.nick} autoPlay controls muted loop />
            );
            break;
        default:
            newContent=(
                <span>{content}</span>
            );
            break;
    }

    // Tags format
    const badgesList={
        'Owner': owner,
        'Admin': admin,
        'Mod': mod,
        'Developer': developer,
        'Verified': verified,
        'PussyPass': pussyPass,
        'Ban': ban,
    };

    // Date format: mm dd, yyyy at hh:mm
    date=new Date(date);
    const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
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

    const [menuLikeIcon, setMenuLikeIcon]=useState(() => like);
    const [liked, setLiked]=useState(() => false);

    const [menuViewIcon, setMenuViewIcon]=useState(() => view);
    const [viewed, setViewed]=useState(() => false);

    const [menuReportIcon, setMenuReportIcon] = useState(() => report);
    const [reported, setReported]=useState(() => false);

    const [menuSaveIcon, setMenuSaveIcon]=useState(() => save);
    const [saved, setSaved]=useState(() => false);

    const handlePostClick = (menuItem) => {
        switch(menuItem) {
            case "like":
                if(liked) {
                    setMenuLikeIcon(like);
                    setLiked(false);
                    // TODO: remove from likes post (by api)
                } else {
                    setMenuLikeIcon(solidLike);
                    setLiked(true);
                    // TODO: add to likes post (by api)
                }
                break;
            case "view":
                if(viewed) {
                    setMenuViewIcon(view);
                    setViewed(false);
                    // TODO: remove from views post (by api)
                } else {
                    setMenuViewIcon(solidView);
                    setViewed(true);
                    // TODO: add to views post (by api)
                }
                break;
            case "report":
                if(reported) {
                    setMenuReportIcon(report);
                    setReported(false);
                    // TODO: remove from reported posts (by api)
                } else {
                    setMenuReportIcon(solidReport);
                    setReported(true);
                    // TODO: add to reported posts (by api)
                }
                break;
            case "save":
                if (saved) {
                    setMenuSaveIcon(save);
                    setSaved(false);
                    // TODO: remove from saved posts (by api)
                } else {
                    setMenuSaveIcon(solidSave);
                    setSaved(true);
                    // TODO: add to saved posts (by api)
                }
                break;
            default:
                break;
        }
    };

    return (
        <article className={styles.player}>
            <section className={styles.topBar}>
                <Image src={author.picture} width={250} height={250} alt="" title={author.nick} className={styles.icon} draggable={false} />
                <span className={styles.text} title="see profile">{author.nick}</span>
                <section className={styles.badges}>
                    {
                        author.badges.map((badge, index) => <Image key={index} src={badgesList[badge]} width={250} height={250} alt={badge} title={badge} className={styles.badge} draggable={false} />)
                    }
                </section>
                <ul className={styles.info}>
                    <li className={styles.infoItem} title={views}>
                        <Image src={postViews} width={50} height={250} alt="" draggable={false} />
                        {newViews}
                    </li>
                    <li className={styles.infoItem} title={date}>
                        <Image src={postDate} width={50} height={250} alt="" draggable={false} />
                        {newDate}
                    </li>
                </ul>
            </section>
            <section className={styles.content}>
                {newContent}
            </section>
            <section className={styles.botBar}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Image src={menuLikeIcon} width={250} height={250} alt="like" title="likes" draggable={false} onClick={() => handlePostClick('like')} />
                    </li>
                    <li className={styles.menuItem}>
                        <Image src={menuViewIcon} width={250} height={250} alt="see more" title="see more" draggable={false} onClick={() => handlePostClick('view')} />
                    </li>
                    <li className={styles.menuItem}>
                        <Image src={menuReportIcon} width={250} height={250} alt="report" title="report" draggable={false} onClick={() => handlePostClick('report')} />
                    </li>
                    <li className={styles.menuItem}>
                        <Image src={menuSaveIcon} width={250} height={250} alt="save" title="save" draggable={false} onClick={() => handlePostClick('save')} />
                    </li>
                </ul>
                <ul className={styles.tagList}>
                    {
                        tags.map((tag, index) => <li key={index} className={styles.tag}>{tag}</li>)
                    }
                </ul>
            </section>
        </article>
    );
} 
