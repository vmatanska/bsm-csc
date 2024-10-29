//import { faHouseUser } from "@fortawesome/free-solid-svg-icons/faHouseUser";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHouseUser, FaHeart } from 'react-icons/fa';
import styles from './MainMenuSticky.module.scss';
import { Button } from '../../Button';
import Image from 'next/image';

export const MainMenuSticky = ({items, callToActionLabel, callToActionDestination, logoSrc, isOpen, toggle }) => {
    console.log("Main Menu Component: ", items);

    const [state, setState] = useState('hideSticky');
    useEffect(() => {
        const stickyMenu = document.querySelector('#MainMenuSticky');
        //console.log("MainMenuSticky VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV stickyMenu = ", stickyMenu);
        window.addEventListener('scroll', () => {
            let activeClass = 'hideSticky';
            if(window.scrollY >= 160){
                activeClass = 'showSticky';         
            } else  {
                activeClass = 'hideSticky';        
            }
            setState( activeClass );
         });
        /*window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        style={{fontSize:"25px", color: "#ffffff", position: "sticky", top: "0", zIndex: "20", display: "flex", border: "0px solid blue"}}*/
    });

    return (
        <div id="MainMenuSticky" className={styles["wrap"] + " " + styles[`${state}`] +/**/ ` nav-top`} >
            <div class="layout-content" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}> 
                <div className={styles.logo}>
                    <Link href="/" >
                    <Image
                        alt="Logo"
                        src={logoSrc}
                        width="100"
                        height="80"
                        className={styles.img}
                    />
                    <span>Crew Service Centre</span>
                    </Link>
                    {/*<FaHeart size={30} />*/}
                </div>

                <ul style={{display: "inline-flex", alignItems: "center"}}>
                    <div className={styles["desktopMenu"] + " " + styles["menuLinks"]} style={{display:"flex", flex: "1 1 0%", border: "0px solid green"}}>
                        {(items || []).map(item => (
                            <li key={item.id} style={{position: "relative"}} className={styles["hover"] + " " + styles["group"]}>
                                <div>
                                    <Link href={item.destination} style={{padding: "10px", display: "block", border: "0px solid red"}} className={!!item.subMenuItems?.length ? (styles["is-dropdown-submenu-parent"]) : ""}>
                                        {item.label}
                                    </Link>
                                </div>
                                {/*console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV = ", item.subMenuItems, "LENGHT = ", item.subMenuItems.length)*/}
                                {!!item.subMenuItems?.length && (
                                    <ul>
                                        <li className={styles["subMenuItems"] + " " + styles["group-hover:block"]} style={{}}>
                                            {item.subMenuItems.map(subMenuItem => (
                                                <Link key={subMenuItem.id} href={subMenuItem.destination} className={styles.hover} style={{display: "block", whiteSpace: "nowrap", padding: "20"}}>
                                                    {subMenuItem.label}
                                                </Link>
                                            ))}
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}

                        {/*<Button type link={callToActionDestination}  btnStyle="btn-slightly-round" style={{padding:"20px !important", fontSize: "25px !important"}}>{callToActionLabel}</Button>
                        <div className={styles.cta}>
                            <Link href={callToActionDestination} className={styles.ctaContent}>
                                {callToActionLabel}
                            </Link>
                        </div>*/}                   
                    </div>  
                
                    <FaHouseUser size={30} />
                    {<button type="button" className={styles.menuIcon}
                        onClick={toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24">
                            <path fill="#fff"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                        </svg>
                    </button>}   
                </ul>
            </div>         
        </div>
    );
}