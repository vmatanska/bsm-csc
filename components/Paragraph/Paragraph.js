import { getTextAlign, getSpacing, getFontSizeForParagraph } from "../../utils/fonts";
import { relativeToAbsoluteUrls } from "../../utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor, fontSize, fontSizeCustom, lineHeight, spacing}) => {
  
    const spacingStyle = spacing ? getSpacing(spacing) : {};
    const fontSizeStyle = fontSize ? { fontSize: `${getFontSizeForParagraph(fontSize)}` } : {};
    const fontSizeCustomStyle = fontSizeCustom ? { fontSize: fontSizeCustom } : {};
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight+"rem" } : {};

    console.log("Component PARAGRAPH content === ", content);
    console.log("Component PARAGRAPH fontSizeStyle === ", fontSizeStyle);
    console.log("Component PARAGRAPH fontSize === ", fontSize);
    console.log("Component PARAGRAPH getFontSizeForParagraph(fontSize) === ", getFontSizeForParagraph(fontSize));
    console.log("Component PARAGRAPH spacingStyle === ", spacingStyle);
    console.log("Component PARAGRAPH fontSizeCustomStyle === ", fontSizeCustomStyle);
    console.log("Component PARAGRAPH lineHeightStyle === ", lineHeightStyle);

    return (
        <p
            className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
            style={{color: textColor, fontSize: fontSizeStyle.fontSize, fontSize: fontSizeCustomStyle.fontSize, spacingStyle, lineHeight: lineHeightStyle.lineHeight}}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
        />      
    );
};