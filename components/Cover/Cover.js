import styles from './Cover.module.scss';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaArrowDown, FaArrowDownLong, FaAlignJustify, FaArrowRight, FaArrowLeft, FaLongArrowLeft, FaLongArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Image from 'next/image';
import {stripes} from '/public/images/stripes.svg';
import { getFontLavelForHeading, getFontSizeForHeading, getTextAlign, getSpacing } from "../../utils/fonts";
import {  hexToRgba } from "../../utils/hexToRgba";

export const Cover = ({children, background, customGradient, dimRatio, fontSize, 
                        width, height, minHeight, isUserOverlayColor, customOverlayColor, isDark,
                        layoutType, layoutContentSize, layoutWideSize, textColor, 
                        borderRadiusStyle, borderWidthStyle, colorDuotoneStyle, blockGap,
                        marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight,
                        headingColor, linkColor, typographyFontStyle, typographyFontWeight, typographyLetterSpacing, typographyLineHeight, typographyTextDecoration, typographyTextTransform
                    }) => {

    
    console.log('Component Cover: children = ', children, '; background = ', background);

    console.log('Component Cover: customOverlayColor = ', customOverlayColor);
    console.log('Component Cover: dimRatio = ', dimRatio);
    console.log('Component Cover: hexToRgba = ', hexToRgba(customOverlayColor, dimRatio)); 
    //alert(hexToRgb("#03f").g); // "51";

    const customGradientStyle = customGradient ? { backgroundImage: customGradient} : {};
    const dimRatioStyle = dimRatio  ? { opacity: dimRatio } : {};
    const fontSizeStyle = fontSize ? { fontSize: `${getFontSizeForHeading(fontSize)}` } : {};
    const widthStyle = width ? { width: width } : {};
    const heightStyle = height ? { height: height } : {};
    const minHeightStyle = minHeight ? { minHeight: minHeight } : {};
    const customOverlayColorStyle = isUserOverlayColor ? ( customOverlayColor ? { backgroundColor: hexToRgba(customOverlayColor, dimRatio) } : {} ) : {};
    const textColorStyle = textColor ? { color: textColor } : {};
    const layoutTypeStyleClass = layoutType ? (layoutType === "default" ? styles.layoutDefault : styles.layoutConstrained) : {};
    const layoutContentSizeStyle = layoutContentSize ? { maxWidth: layoutContentSize + " !important;", marginLeft: "auto !important;", marginRight: "auto !important;" } : {};
    const layoutWideSizeStyle = layoutWideSize ? { maxWidth: layoutWideSize + " !important;" } : {};
    const layoutStyle = (layoutType === "constrained") ? { ...layoutWideSizeStyle, ...layoutContentSizeStyle } : { maxWidth: layoutWideSize + " !important;", marginLeft: "auto !important;", marginRight: "auto !important;" };

    console.log("LALALALALALALALALALALA widthStyle === ", widthStyle);
    console.log("LALALALALALALALALALALA layoutType === ", layoutType);
    console.log("LALALALALALALALALALALA marginLeft === ", layoutStyle);
    console.log("LALALALALALALALALALALA === ", `${layoutTypeStyleClass}`);
    console.log("LALALALALALALALALALALA === ", {...styles.cover, ...`${layoutTypeStyleClass}`});
    console.log("LALALALALALALALALALALA layoutContentSize === ", layoutContentSize);
    console.log("LALALALALALALALALALALA layoutWideSize === ", layoutWideSize);

    if(layoutType === "default"){
       // const maxWidth = max-width: var(--wp--style--layout--wide-size)
        console.log("max-width === ", `$var(--wp--style--layout--wide-size)`);
    } else if (layoutType === "constrained"){
        console.log("max-width === ",  `$var(--wp--style--layout--content-size)`);  
    }
    //isUserOverlayColor ? 
    /*const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
    const fontSizeStyle = fontSize ? { fontSize: `${getFontSizeForHeading(fontSize)}` } : {};
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight+"rem" } : {};
    const fontStyleStyle = fontStyle ? { fontStyle: fontStyle } : {};
    const fontWeightStyle = fontWeight ? { fontWeight: fontWeight } : {};
    const letterSpacingStyle = letterSpacing ? { letterSpacing: letterSpacing } : {};
    const textTransformStyle = textTransform ? { textTransform: textTransform } : {};
    const writingModeStyle = writingMode ? { writingMode: writingMode } : {};

    //const spacingStyle = spacing ? `${getSpacing(spacing)}` : {};
    const spacingStyle = spacing ? getSpacing(spacing) : {};*/

    console.log("Component COVER customGradient === ", customGradient, "   customGradientStyle === ", customGradientStyle,  
                //"  spacingStyle === ", spacingStyle, " `${getSpacing(spacing)}` === ", `${getSpacing(spacing)}`
            );  
    //console.log("Component COVER theme2 === ", theme2);
    
    return( 
        <div id="Header" className={styles.cover + " " + `${layoutTypeStyleClass}`} 
                        style={{...customGradientStyle, ...dimRatioStyle, ...fontSizeStyle, 
                                ...widthStyle, /*...heightStyle, ...minHeightStyle,*/
                                ...customOverlayColorStyle, ...textColorStyle, ...layoutStyle
                        }}>

            {(!!background) && (     
            <Image
                alt="Cover"
                src={background}
                fill
                style={{objectFit:"cover"}}
                className={styles.img}
            />
            )}
            
            <div class="layout-content">
                <div className={styles.heading}>{children}</div> {/*className="max-w-5xl z-10"*/}
                
                <a href="#mission_vision" style={{padding: "20px", display: "block", margin: "auto", textAlign: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{width: "17px", marginBottom: "12px"}}>
                    <path fill="#ffffff" d="M315.3 363.3l-144 144C168.2 510.4 164.1 512 160 512s-8.188-1.562-11.31-4.688l-144-144c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L144 457.4V16C144 7.156 151.2 0 160 0s16 7.156 16 16v441.4l116.7-116.7c6.25-6.25 16.38-6.25 22.62 0S321.6 357.1 315.3 363.3z"></path>
                    </svg>
                </a>

                {/*<FontAwesomeIcon icon="fa-solid fa-bars" /><FaBars/>
                <i class="fa-solid fa-bars"></i>*/}
            </div>
            <div id="mission_vision" className={styles.stripes} style={{backgroundImage: "url(/images/stripes.svg)"}}></div>
        </div>
    );
}