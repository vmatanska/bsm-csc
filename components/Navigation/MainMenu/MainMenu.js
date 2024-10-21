//import { faHouseUser } from "@fortawesome/free-solid-svg-icons/faHouseUser";
//import { useState, useEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaHouseUser, FaHeart } from 'react-icons/fa';
import styles from './MainMenu.module.scss';
import { Button } from '../../Button';
import Image from 'next/image';

export const MainMenu = ({items, callToActionLabel, callToActionDestination, logoSrc, isOpen, toggle }) => {
    console.log("Main Menu Component: ", items);

    return (
        <div id="MainMenu" style={{paddingTop:"30px"}} className={styles["wrap"] + " " + /*styles[`${state}`] +*/ ` top-nav  `} >
            <div class="layout-content" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>            
                <Link href="/"  className={styles.logo}>
                    <Image
                        alt="Logo"
                        src={logoSrc}
                        width="100"
                        height="80"
                        className={styles.img}
                    />      
                </Link>   
                <div style={{display: "inline-flex", alignItems: "center"}}>        
                    <FaHouseUser size={30} />{/*<FaHeart size={30} />*/}   
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
                </div>
            </div>          
            <div class="layout-content" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <div><span>Crew Service Centre</span></div>
                {/*<div style={{display: "inline-flex"}}>*/}
                    <div className={styles.menuLinks} style={{display:"flex", flex: "1 1 0%", justifyContent: "right"}}>
                        {(items || []).map(item => (
                            <div key={item.id} style={{position: "relative"}} className={styles["hover"] + " " + styles["group"]} class="animated-underline-type">
                                <div style={{textWrap: "nowrap"}}>
                                    <Link href={item.destination} style={{padding: "20px", display: "block", border: "0px solid red"}}
                                             className={!!item.subMenuItems?.length && (styles["is-dropdown-submenu-parent"] + " " + styles["triangle"])}>
                                        {item.label}
                                    </Link>
                                </div>
                                {console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV = ", item.subMenuItems, "LENGHT = ", item.subMenuItems.length)}
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
                    </div>  
                    
                {/*</div> display: "inline-flex" */}
            </div>         
        </div>
  
    );
}