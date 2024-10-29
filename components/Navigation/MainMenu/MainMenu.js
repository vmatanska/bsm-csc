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
        <div id="MainMenu"  className={styles["wrap"] + " " + ` top-nav  `} style={{        
            opacity: `${isOpen ? "0" : "1"}`,
            top: ` ${isOpen ? "-100%" : "0"}`,
        }}>

        
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
            
                <ul className={styles.menuLinks} style={{display:"flex", flex: "1 1 0%", justifyContent: "right"}}>
                    {(items || []).map(item => (
                        <li key={item.id}  className={styles["hover"] + " " + styles["group"] + " " + styles["liMenu"]} /*class="animated-underline-type"*/>                          
                            <Link href={item.destination}  style={{ marginLeft: "20px", display: "block", border: "0px solid red"}} className={!!item.subMenuItems?.length ? (styles["is-dropdown-submenu-parent"]) : ""}>
                                {item.label}
                            </Link>
                            
                            {/*console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV = ", item.subMenuItems, "LENGHT = ", item.subMenuItems.length)*/}
                            {!!item.subMenuItems?.length && (
                                <ul>
                                    <li className={styles["subMenuItems"] + " " + styles["group-hover:block"]} style={{}}>
                                        {item.subMenuItems.map(subMenuItem => (                                         
                                            <Link key={subMenuItem.id} href={subMenuItem.destination} className={styles.hover}>
                                                {subMenuItem.label}
                                            </Link> 
                                        ))}
                                    </li>
                                </ul>
                            )}
                        </li>
                    ))}

                    {/*<Button type link={callToActionDestination}  btnStyle="btn-slightly-round" style={{padding:"20px !important", fontSize: "25px !important"}}>{callToActionLabel}</Button>*/}

                </ul>  

            </div>         
        </div>
  
    );
}