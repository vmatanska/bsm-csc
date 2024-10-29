import Link from "next/link";
//import styles from './ButtonLink.module.scss';

import styles from './Button.module.scss';

/*export const ButtonLink = (destination, label) => {
    console.log("ButtonLink Component: destination = ", destination, "   label", label)
    return (
        <div className={styles.cta}>
            <Link href={destination.destination} className={styles.ctaContent}>
                {destination.label}
            </Link>
        </div>
    )
}*/



export const Button = (props) => {
  console.log('BUTTON COMPONNENT props === ', props);
  console.log('BUTTON COMPONNENT props TYPE === ', props.type);
  console.log('BUTTON COMPONNENT props DESTINATION === ', props.destination);
  console.log('BUTTON COMPONNENT props.btnStyle === ', props.btnStyle);

  if (props.destination){

    console.log('BUTTON COMPONNENT IF props.destination ');
    return (
      <Link href={props.destination} className={styles[props.btnStyle]}> 
        {props.children}
        {props.label}
      </Link>
    );
  
    return (
      <button className={styles[props.btnStyle]} type={props.type ? 'submit' : 'button'} onClick={props.onClick}>
        {props.children}
        {props.label}
      </button>
    );{/**/}

  } else {
    console.log('BUTTON COMPONNENT ELSE (IF props.destination) ');
    return (  
      <button className={styles[props.btnStyle]} type={props.type ? 'submit' : 'button'}>
        {props.children}
        {props.destination}
        {props.label}
      </button>
    );
  }
}