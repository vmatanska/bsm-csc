import {v4 as uuid} from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));
    //console.log('cleanAndTransformBlocks blocks = ', blocks);

    const assignIds = (b) => {
        b.forEach(block => {
            block.id = uuid();
            //console.log("cleanAndTransformBlocks block.id === ", block.id);
            if(block.innerBlocks?.length){
                console.log("cleanAndTransformBlocks IF block.name === ", block.name);
                assignIds(block.innerBlocks);
            } 
        })
    }

    assignIds(blocks);

    return blocks;
}