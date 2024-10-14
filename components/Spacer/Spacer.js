import { getSpacing } from "../../utils/fonts";

export const Spacer = ({ height }) => {
  
    console.log("Component SPACER height === ", height);
    const spacingStyle = height ? getSpacing(height) : {};
    console.log("Component SPACER spacingStyle === ", spacingStyle);
    
    return (
        <div style={{ height: height, border: '1px solid red', spacingStyle }} ></div>     
    );
};