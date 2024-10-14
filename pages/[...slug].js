import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { BlockRenderer } from "../components/BlockRenderer";
import { getPageStaticProps } from "../utils/getPageStaticProps";
import { Page } from "../components/Page/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
        query AllPagesQuery {
            pages {
              nodes {
                uri
              }
            }
            allNews {
              nodes {
                uri
                previousPost {
                  title
                  uri
                  slug
                }
                nextPost {
                  title
                  slug
                  uri
                }
              }
            }
          }
        `
    });

console.log("DATA from [...slug].js ============================ ", data.allNews.nodes);
    return {
        paths: [...data.pages.nodes, ...data.allNews.nodes].filter(page => page.uri !== "/").map(page => ({
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split("/"),
            },
        })),
        fallback: "blocking",
    };
};