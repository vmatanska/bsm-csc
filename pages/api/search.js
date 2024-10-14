import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
    try {
        const filters = JSON.parse(req.body);
        console.log("API SEARCH FILTERS === ", filters);

        let titleFilter = ``;
        let dateFromFilter = ``;
        let dateToFilter = ``;

        if(filters.title){
            titleFilter = `
                {compare: LIKE, key: "title", type: CHAR, value: "${filters.title}"},
            `
        }
        if(filters.date_from){  
            dateFromFilter = `
                {compare: GREATER_THAN_OR_EQUAL_TO, key: "published", type: DATETIME, value: "${filters.date_from}"}
            `
        } 
        if(filters.date_to){  
            dateToFilter = `
                {compare: LESS_THAN_OR_EQUAL_TO, key: "published", type: DATETIME, value: "${filters.date_to}"}
            `
        } 
        const {data} = await client.query({
            query: gql`
                query AllNewsQuery {
                    allNews (where: {
                                offsetPagination: {
                                    size: 3, 
                                    offset: ${((filters.page || 1) - 1) * 3 } 
                                    }, 
                                orderby: {field: DATE, order: DESC},
                                metaQuery: {relation: AND, metaArray:[ 
                                    ${titleFilter}
                                    ${dateFromFilter}
                                    ${dateToFilter}
                                ]}                             
                            }                           
                    ) {
                        pageInfo {
                            offsetPagination {
                                total
                            }
                        }
                        nodes {
                            databaseId
                            title
                            uri
                            link
                            featuredImage {
                                node {
                                    uri
                                    sourceUrl
                                }
                            }
                            newsFeatures {
                                excerpt
                                tags
                                title
                                published
                                author {
                                    name
                                    nickname
                                }
                            }
                        }                      
                    }
                }
            `
        });
        return res.status(200).json({
            total: data.allNews.pageInfo.offsetPagination.total,
            news: data.allNews.nodes,
        })
    } catch (e) {
        console.log("ERROR: ", e);
    }
};

export default handler;