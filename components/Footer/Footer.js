import styles from './Footer.module.scss';

export const Footer = ({ className, style, layout, backgroundColor}) => {
  
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
<hr className={styles[`${className}`]} backgroundColor={backgroundColor} />*/
    //console.log('Component FOOTER props === ', props);
    console.log('Component FOOTER {styles["`${className}`"]} === ', `${className}`);
    return (     
        <div className={styles.stripes} style={{backgroundImage: "url(/images/stripes.svg)"}}>
            {/*children*/} Footer
        </div>
    );
};