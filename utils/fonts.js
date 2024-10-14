export const getTextAlign = (textAlign = "left") => {
    const textAlignMap = {
        left: "text-left",
        right: "text-right",
        center: "text-center",
    };

    return `${textAlignMap[textAlign] || ""}`;
};

export const getFontLavelForHeading = (level) => {
    const fontLavelMap = {
        1: "font-h1",
        2: "font-h2",
        3: "font-h3",
        4: "font-h4",
        5: "font-h5",
        6: "font-h6",
    }

    return `${fontLavelMap[level] || ""}`;
}

export const getFontSizeForHeading = (fontSize) => {    

    const fontSizeMap = {
        "small": "1.5",
        "medium": "2",
        "large": "3.5",
        "x-large": "5",
        "xx-large": "6",
    }
    //console.log("FONTS FUNCTION --------------------------- fontSize === ", fontSize );
    //console.log('FONTS FUNCTION --------------------------- `${fontSizeMap[fontSize] || ""}rem` === ', `${fontSizeMap[fontSize] || ""}rem !important` )

    return `${fontSizeMap[fontSize] || ""}rem !important`;
}

export const getFontSizeForParagraph = (fontSize) => {    

    const fontSizeMap = {
        "small": "1.5",
        "medium": "2",
        "large": "3.5",
        "x-large": "5",
        "xx-large": "6",
    }
    //console.log("FONTS FUNCTION --------------------------- fontSize === ", fontSize );
    //console.log('FONTS FUNCTION --------------------------- `${fontSizeMap[fontSize] || ""}rem` === ', `${fontSizeMap[fontSize] || ""}rem !important` )

    return `${fontSizeMap[fontSize] || ""}rem !important`;
}

export const getSpacing = (spacing) => {   
    
    console.log("FONTS FUNCTION --------------------------- getSpacing spacing === ", spacing);
    
    const spacingMap = {
        //"var:preset|spacing|20": "var(--wp--preset--spacing--20)",
        "var:preset|spacing|10": "0.63rem",
        "var:preset|spacing|20": "1rem",
        "var:preset|spacing|30": "1.25rem",
        "var:preset|spacing|40": "2.5rem",
        //"var:preset|spacing|50": "var(--wp--preset--spacing--50)",
        "var:preset|spacing|50": "5rem",
        "var:preset|spacing|60": "10rem",
        "var:preset|spacing|70": "20rem",
        "var:preset|spacing|80": "40rem",
    } 

    let spacingStyleRull = ';';

    const {padding, margin, height} = spacing ? spacing : {};

    if(padding) {
        const {top, bottom, left, right} = padding;
        console.log("FONTS FUNCTION --------------------------- bottom === ", bottom);
        if(top) spacingStyleRull += `padding-top: ${spacingMap[top]};`;
        if(bottom) spacingStyleRull += `padding-bottom: ${spacingMap[bottom]};`;
        if(left) spacingStyleRull += `padding-left: ${spacingMap[left]};`;
        if(right) spacingStyleRull += `padding-right: ${spacingMap[right]};`;
        //console.log("FONTS FUNCTION --------------------------- spacingStyleRull === ", spacingStyleRull );
    }
    
    if(margin) {
        const {top, bottom, left, right} = margin;
        console.log("FONTS FUNCTION --------------------------- bottom === ", bottom);
        if(top) spacingStyleRull += `margin-top: ${spacingMap[top]};`;
        if(bottom) spacingStyleRull += `margin-bottom: ${spacingMap[bottom]};`;
        if(left) spacingStyleRull += `margin-left: ${spacingMap[left]};`;
        if(right) spacingStyleRull += `margin-right: ${spacingMap[right]};`;
        //console.log("FONTS FUNCTION --------------------------- spacingStyleRull === ", spacingStyleRull );
    }

    //if(height){
    if(!padding && !margin){
        //const {height} = height;
        console.log("FONTS FUNCTION --------------------------- height === ", height);
        spacingStyleRull += `height: ${spacingMap[spacing]};`;
    }

    console.log("FONTS FUNCTION --------------------------- spacing === ", spacing );
    //console.log("FONTS FUNCTION --------------------------- padding === ", padding );
    //console.log("FONTS FUNCTION --------------------------- spacingMap === ", spacingMap );
    console.log("FONTS FUNCTION --------------------------- spacingStyleRull === ", spacingStyleRull );

    //return `${spacingStyleRull} ${spacingMap[spacing]} !important;`; 
    return `${spacingStyleRull}`; 
}