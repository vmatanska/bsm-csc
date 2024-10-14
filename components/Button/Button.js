import Link from "next/link";
//import styles from './ButtonLink.module.scss';

import classes from './Button.module.scss';

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
  //console.log('BUTTON COMPONNENT props.btnStyle === ', props.btnStyle);
  if (props.type && (props.type !== 'submit')){
    
    if (props.link /*&& (props.type!=='submit')*/) {
      return (
        <Link href={props.link} className={classes[props.btnStyle]}> 
          {props.children}
        </Link>
      );
    }

    return (
      <button className={classes[props.btnStyle]} type={props.type ? 'submit' : 'button'} onClick={props.onClick}>
        {props.children}
      </button>
    );

  } else {

    return (
    
      <button className={classes[props.btnStyle] + ' ' + classes[props.btnStyle]} type={props.type ? 'submit' : 'button'}>
        {props.children}
      </button>
    );
  }
}