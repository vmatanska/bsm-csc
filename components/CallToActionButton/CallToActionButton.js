import { Button } from "../Button";
//import { useBlockProps } from "@wordpress/block-editor";
//import React, { useEffect } from "react";


export const CallToActionButton = ({align = "left", buttonLabel, destination}) => {
    
    /*useEffect(() => {
        // Client-side-only code
        const blockProps = useBlockProps();
        console.log("COMPONENT CallToActionButton: blockProps === ", blockProps);
        console.log("window.innerHeight", window.innerHeight);
    }, []);*/
    
    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }
    return <div className={alignMap[align]}>
        {/*(typeof window !== 'undefined') &&*/}
        <Button destination={destination} label={buttonLabel} />
        {/*}*/}
    </div>
};