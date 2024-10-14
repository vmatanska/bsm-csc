import styles from './Cover.module.scss';

import Image from 'next/image';
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
        console.log("max-width === ", `$var(--wp--style--layout--content-size)`);
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
        <div className={styles.cover + " " + `${layoutTypeStyleClass}`} style={{...customGradientStyle, ...dimRatioStyle, ...fontSizeStyle, ...widthStyle, ...heightStyle, ...minHeightStyle,
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
            
            <div className={styles.heading}>{children}</div> {/*className="max-w-5xl z-10"*/}
        </div>
    );
}