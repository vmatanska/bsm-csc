import React from "react";
import styles from './Heading.module.scss';
import { getFontLavelForHeading, getFontSizeForHeading, getTextAlign, getSpacing } from "../../utils/fonts";

export const Heading = ({ textAlign, content, level, fontSize, textColor, backgroundColor, spacing, lineHeight, fontStyle, fontWeight, letterSpacing, textTransform, writingMode }) => {
    
    const textColorStyle = textColor ? { color: textColor } : {};
    const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
    const fontSizeStyle = fontSize ? { fontSize: `${getFontSizeForHeading(fontSize)}` } : {};
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight+"rem" } : {};
    const fontStyleStyle = fontStyle ? { fontStyle: fontStyle } : {};
    const fontWeightStyle = fontWeight ? { fontWeight: fontWeight } : {};
    const letterSpacingStyle = letterSpacing ? { letterSpacing: letterSpacing } : {};
    const textTransformStyle = textTransform ? { textTransform: textTransform } : {};
    const writingModeStyle = writingMode ? { writingMode: writingMode } : {};

    //const spacingStyle = spacing ? `${getSpacing(spacing)}` : {};
    const spacingStyle = spacing ? getSpacing(spacing) : {};

    console.log("Component HEADING backgroundColor === ", backgroundColor, "   textColor === ", textColor, "   fontSize === ", fontSize, "  fontSizeStyle === ", fontSizeStyle,
                "  spacing === ", spacing, 
                //"  spacingStyle === ", spacingStyle, " `${getSpacing(spacing)}` === ", `${getSpacing(spacing)}`
            );
          
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `${styles.tag} font-heading ${getFontLavelForHeading(level)} ${getTextAlign(textAlign)}`,
        style: { ...textColorStyle, ...backgroundColorStyle, ...fontSizeStyle, ...{spacingStyle}, ...lineHeightStyle, ...fontStyleStyle, ...fontWeightStyle, ...letterSpacingStyle, ...textTransformStyle, ...writingModeStyle }
    });
    console.log("Component HEADING TAG === ", tag);
    return tag;
};
