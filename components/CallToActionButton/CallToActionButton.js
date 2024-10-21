"use client"
import { Button } from "../Button";
//import React, { useEffect } from "react";
import { registerBlockType } from '@wordpress/blocks';
//import { registerCoreBlocks } from "@wordpress/block-library";
//import { useBlockProps } from "@wordpress/block-editor";


export const CallToActionButton = ({align = "left", buttonLabel, destination}) => {
    
    /*useEffect(() => {
        // Client-side-only code
        const blockProps = useBlockProps();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^COMPONENT CallToActionButton: blockProps === ", blockProps);
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^window.innerHeight", window.innerHeight);
    }, []);*/

    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }
    return <div className={alignMap[align]}>
       
        <Button destination={destination} label={buttonLabel} />
       
    </div>
};