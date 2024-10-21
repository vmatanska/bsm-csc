import { useState } from 'react';
//import Navbar from "./navbar";
import { MainMenu } from "./MainMenu/MainMenu";
import { MainMenuSticky } from "./MainMenuSticky/MainMenuSticky";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from './Navigation.module.scss';

export const Navigation = ({items, callToActionLabel, callToActionDestination, logoSrc }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    console.log("Component Navigation block items: ", items);
    console.log("Component Navigation block callToActionLabel: ", callToActionLabel);
    console.log("Component Navigation block callToActionDestination: ", callToActionDestination);
    console.log("Component Navigation block logoSrc: ", logoSrc);
    return (
      <div id="Navigation" className={styles.navigation}>
        <Sidebar 
            isOpen={isOpen} 
            toggle={toggle} 
            items={items}
            callToActionLabel={callToActionLabel}
            callToActionDestination={callToActionDestination}
            logoSrc={logoSrc}
        />
        <MainMenuSticky
            isOpen={isOpen} 
            toggle={toggle}
            items={items}
            callToActionLabel={callToActionLabel}
            callToActionDestination={callToActionDestination}
            logoSrc={logoSrc}
        />
        <MainMenu
            isOpen={isOpen} 
            toggle={toggle}
            items={items}
            callToActionLabel={callToActionLabel}
            callToActionDestination={callToActionDestination}
            logoSrc={logoSrc}
        />
        {/*<button type="button" className={styles.menuIcon}
            onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
        </button>*/}
      </div>
    );
  };