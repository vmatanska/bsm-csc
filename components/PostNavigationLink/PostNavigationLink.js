import styles from './PostNavigationLink.module.scss';
import Link from 'next/link';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FaAlignJustify, FaArrowRight, FaArrowLeft, FaLongArrowLeft, FaLongArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PostNavigationLink = ({ arrow, label, linkLabel, showTitle, type, previousPost, nextPost}) => {
  
    //console.log('Component PostNavigationLink {styles["`${className}`"]} === ', `${className}`);
    console.log('Component PostNavigationLink arrow === ', arrow, ' label === ', label, ' linkLabel === ', linkLabel, ' showTitle === ', 
        showTitle, ' type === ', type, 
        ' previousPost_title === ', previousPost?.title, ' previousPost_uri === ', previousPost?.uri, ' nextPost_title === ', nextPost?.title, ' nextPost_uri === ', nextPost?.uri);
    
        let iconLeft = "";
    if (arrow == "arrow") iconLeft = <FaArrowLeft/>;
    else if (arrow == "chevron")  iconLeft = <FaChevronLeft/>;
    
    let iconRight = "";
    if (arrow == "arrow") iconRight = <FaArrowRight/>;
    else if (arrow == "chevron")  iconRight = <FaChevronRight/>;

    return (     
        <div className={styles.postNavigationLink}>
        
        {((previousPost !== null) && (type == "previous")/**/) ?
            <Link className={styles.prev} href={previousPost?.uri ? previousPost?.uri : ""}>
                <span>{iconLeft}{ linkLabel ? label : ""}</span>
                {/*<span>{arrow && <i style={{fontSize: '24px'}} class='fas fa-arrow-left'>&#xf060;</i>}{label}</span>*/}
                <span>{showTitle ? previousPost?.title : ""}</span></Link> 
            : 
            ""}

        {((nextPost !== null) && (type != "previous")/**/) ?
            (<div style={{textAlign: 'right', lineHeight: '19px'}}><span>{ !linkLabel ? label : ""}</span>
            <Link className={styles.next} href={nextPost?.uri ? nextPost?.uri : ""}>
                <span>{ linkLabel ? label : ""}</span>
                <span>{showTitle ? nextPost?.title : ''}</span>
                <span>{iconRight}</span>
            </Link></div>)
            : 
            ""
            }

        </div>
    );
};