import Link from "next/link";
import styles from './Sidebar.module.scss';
import { Button } from '../../Button';

{/*className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"*/}
export const Sidebar = ({
        items, callToActionLabel, callToActionDestination, logoSrc,
        isOpen, toggle,
    })  => {
  return (
    <>
      <div  className={styles.border}
        
        style={{
            position: "absolute",
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}><p>Services</p></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><p>Contacts</p></Link>
          </li>
        </ul>

        <div  className={styles.menuLinks} style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                    {(items || []).map(item => (
                        <div key={item.id} style={{position: "relative"}} className={styles["hover"] + " " + styles["group"]}>
                            <div>
                                <Link href={item.destination}  onClick={toggle} style={{padding: "20px", display: "block", border: "0px solid red"}}>
                                    {item.label}
                                </Link>
                            </div>
                            {console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV = ", item.subMenuItems, "LENGHT = ", item.subMenuItems.length)}
                            {!!item.subMenuItems?.length && (
                                <div className={styles["subMenuItems"] + " " + styles["group-hover:block"]} style={{}}>
                                    {item.subMenuItems.map(subMenuItem => (
                                        <Link key={subMenuItem.id} href={subMenuItem.destination} onClick={toggle} className={styles.hover} style={{display: "block", whiteSpace: "nowrap", padding: "20"}}>
                                            {subMenuItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

            <Button type link={callToActionDestination}  onClick={toggle}  btnStyle="btn-slightly-round" style={{padding:"20px !important", fontSize: "25px !important"}}>{callToActionLabel}</Button>
            {/*<div className={styles.cta}>
                <Link href={callToActionDestination} className={styles.ctaContent}>
                    {callToActionLabel}
                </Link>
            </div>*/}
            <i class="fa-solid fa-bars" className={styles.icon}></i>
        </div>  

      </div>
    </>
  );
};