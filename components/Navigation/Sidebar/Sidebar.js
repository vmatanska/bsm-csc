import Link from "next/link";
import styles from './Sidebar.module.scss';
import { Button } from '../../Button';
import Image from "next/image";
import { FaHouseUser, FaHeart } from 'react-icons/fa';

{/*className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"*/}
export const Sidebar = ({
        items, callToActionLabel, callToActionDestination, logoSrc,
        isOpen, toggle,
    })  => {
  return (
    <>
      <div  className={styles.wrap}
        
        style={{
            position: "absolute",
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <div className={styles.wrapLeft}>
          
          <div className={styles.logo}>
            <Link href="/" >
            <Image
                alt="Logo"
                src={logoSrc}
                width="100"
                height="80"
                className={styles.img}
            />
            <div>Crew Service Centre</div>
            </Link>
            {/*<FaHeart size={30} />*/}
          </div>
        </div>

        <div className={styles.wrapRight}>
          <div className={styles.topRow}>
            <FaHouseUser size={30} />
            <button className={styles.closeIcon} onClick={toggle}>
              {/* Close icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> 
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  />
                </svg>
              </button>      
          </div>
          <ul className={styles.menuLinks} style={{display:"flex", flexDirection:"column", alignItems: "left", justifyContent: "left"}}>
            {(items || []).map(item => (
                <li key={item.id}  className={styles["hover"] + " " + styles["group"] + " " + styles["liMenu"]} class="animated-underline-type">                          
                    <Link href={item.destination}  onClick={toggle} style={{ marginRight: "15px", display: "block", border: "0px solid red"}} className={!!item.subMenuItems?.length ? (styles["is-dropdown-submenu-parent"]) : ""}>
                        {item.label}
                    </Link>
                    
                    {/*console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV = ", item.subMenuItems, "LENGHT = ", item.subMenuItems.length)*/}
                    {!!item.subMenuItems?.length && (
                        <ul>
                            <li className={styles["subMenuItems"] + " " + styles["group-hover:block"]} style={{}}>
                                {item.subMenuItems.map(subMenuItem => (                                         
                                    <Link key={subMenuItem.id} href={subMenuItem.destination}  onClick={toggle} className={styles.hover}  style={{display: "block", whiteSpace: "nowrap", padding: "20"}}>
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
          <div className={styles.bottomRow}>
            <FaHouseUser className={styles.socMed} size={30} /><FaHouseUser size={30} className={styles.socMed} /><FaHouseUser size={30} className={styles.socMed} />
          </div> 
        </div>
      </div>
    </>
  );
};