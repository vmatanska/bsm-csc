//var registerBlockType = wp.blocks.registerBlockType;
//import { registerBlockType } from "@wordpress/blocks/build/api";
import { registerBlockType } from "~@wordpress/blocks";
import { useBlockProps } from "~@wordpress/block-editor";


registerBlockType("acf/ctabutton", {
    edit: function ()  {
        const blockProps = useBlockProps();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^TEMPLATE-PARTS Index.js EDIT : blockProps === ", blockProps);
        return <p {...blockProps}>Edit JSX</p>;
    },
    save: function ()  {
        const blockProps = useBlockProps().save();
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^TEMPLATE-PARTS Index.js SAVE : blockProps === ", blockProps);
        return <p {...blockProps}>Save JSX</p>;
    },
});