import { getSpacing } from "../../utils/fonts";
import { theme } from "theme";

export const Group = ({children, textColor,  backgroundColor, spacing}) => {
    console.log('Component Group: children = ', children);
    console.log("Component GROUP backgroundColor === ", backgroundColor, "   textColor === ", textColor);
    console.log("Component GROUP backgroundColor theme.accent-5=== ", theme.accent-5);
    const textColorStyle = textColor ? { color: textColor } : {};
    const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
    const spacingStyle = spacing ? getSpacing(spacing) : {};
    
    return <div style={{ ...textColorStyle, ...backgroundColorStyle, ...{spacingStyle} }}>
                {children}
            </div>;
}