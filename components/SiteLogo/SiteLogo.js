import Link from "next/link";
import Image from "next/image";
import styles from './SiteLogo.module.scss';

export const SiteLogo = ({ alt, className, url, id }) => {
  
    console.log('Component SITELOGO id === ', id);
    console.log('Component SITELOGO alt === ', alt);
    console.log('Component SITELOGO className === ', className);
    console.log('Component SITELOGO url === ', url);
    /*const spacingStyle = spacing ? getSpacing(spacing) : {};
    const fontSizeStyle = fontSize ? { fontSize: `${getFontSizeForParagraph(fontSize)}` } : {};
    const fontSizeCustomStyle = fontSizeCustom ? { fontSize: fontSizeCustom } : {};
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight+"rem" } : {};

    
    console.log("Component PARAGRAPH fontSizeStyle === ", fontSizeStyle);
    console.log("Component PARAGRAPH fontSize === ", fontSize);
    console.log("Component PARAGRAPH getFontSizeForParagraph(fontSize) === ", getFontSizeForParagraph(fontSize));
    console.log("Component PARAGRAPH spacingStyle === ", spacingStyle);
    console.log("Component PARAGRAPH fontSizeCustomStyle === ", fontSizeCustomStyle);
    console.log("Component PARAGRAPH lineHeightStyle === ", lineHeightStyle);
    style="height:4px;border-width:5px;color:gray;background-color:gray"
    `${styles.className}`
`${styles.tag}
class="wp-block-separator has-text-color has-contrast-3-color has-alpha-channel-opacity has-contrast-3-background-color has-background is-style-wide"
<div className={s['header-inner']}> </div>
<hr className={styles["`${className}`"]} backgroundColor={backgroundColor} />
*/
    //console.log('Component SITELOGO {styles["`${className}`"]} === ', `${className}`);
    return (     
        <Link className={styles.className} href="/">
            <div className={styles.image}>
                <Image src={url} height="38" width="100" coverr="true" alt={alt} />
            </div>     
        </Link>
    );
};