//import { faHouseUser } from "@fortawesome/free-solid-svg-icons/faHouseUser";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHouseUser, FaHeart } from 'react-icons/fa';
import styles from './MainMenuSticky.module.scss';
import { Button } from '../../Button';
import Image from 'next/image';

export const MainMenuSticky = ({items, callToActionLabel, callToActionDestination, logoSrc }) => {
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
            <div class="layout-content"> 
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
                    {/*<FaHouseUser size={30} />
                    <FaHeart size={30} />*/}
                </div>
                <div  className={styles.menuLinks} style={{display:"flex", flex: "1 1 0%", justifyContent: "right"}}>
                    {(items || []).map(item => (
                        <div key={item.id} style={{position: "relative"}} className={styles["hover"] + " " + styles["group"]}>
                            <div>
                                <Link href={item.destination} style={{padding: "20px", display: "block", border: "0px solid red"}}>
                                    {item.label}
                                </Link>
                            </div>
                            {/*console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV = ", item.subMenuItems, "LENGHT = ", item.subMenuItems.length)*/}
                            {!!item.subMenuItems?.length && (
                                <div className={styles["subMenuItems"] + " " + styles["group-hover:block"]} style={{}}>
                                    {item.subMenuItems.map(subMenuItem => (
                                        <Link key={subMenuItem.id} href={subMenuItem.destination} className={styles.hover} style={{display: "block", whiteSpace: "nowrap", padding: "20"}}>
                                            {subMenuItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Button type link={callToActionDestination}  btnStyle="btn-slightly-round" style={{padding:"20px !important", fontSize: "25px !important"}}>{callToActionLabel}</Button>
                    {/*<div className={styles.cta}>
                        <Link href={callToActionDestination} className={styles.ctaContent}>
                            {callToActionLabel}
                        </Link>
                    </div>*/}
                    <i class="fa-solid fa-bars" className={styles.icon}></i>
                </div>  
            </div>         
        </div>
    );
}