import { getTextAlign, getSpacing, getFontSizeForParagraph } from "../../utils/fonts";
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

export const PostDate = ({ format, globalStyles, isLink}) => {
  
    /*const spacingStyle = spacing ? getSpacing(spacing) : {};
    const fontSizeStyle = fontSize ? { fontSize: `${getFontSizeForParagraph(fontSize)}` } : {};
    const fontSizeCustomStyle = fontSizeCustom ? { fontSize: fontSizeCustom } : {};
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight+"rem" } : {};

    console.log("Component PARAGRAPH content === ", content);
    console.log("Component PARAGRAPH fontSizeStyle === ", fontSizeStyle);
    console.log("Component PARAGRAPH fontSize === ", fontSize);
    console.log("Component PARAGRAPH getFontSizeForParagraph(fontSize) === ", getFontSizeForParagraph(fontSize));
    console.log("Component PARAGRAPH spacingStyle === ", spacingStyle);
    console.log("Component PARAGRAPH fontSizeCustomStyle === ", fontSizeCustomStyle);
    console.log("Component PARAGRAPH lineHeightStyle === ", lineHeightStyle);*/
    console.log("Component POSTDATE format === ", format);
    console.log("Component POSTDATE globalStyles === ", globalStyles);
    console.log("Component POSTDATE isLink === ", isLink);

    return (
        <span>POST DATE</span>     
    );
};