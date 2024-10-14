import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async(context) => {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^CONTEXT:  blocks(postTemplate: false),", context);
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}` : "/";
    console.log("URI: ", uri);
    const {data} = await client.query({
      query: gql`
      query PageQuery ($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
          ... on News {
            id
            title
            blocks  
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
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  id
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
      `,
      variables: {
        uri,
      }
    });
    console.log("getPageStaticProps 88888888888888888888888888888888888 ", {data});
    return {
      props: {
        mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
        previousPost: data.nodeByUri?.previousPost ? data.nodeByUri?.previousPost : null,
        nextPost: data.nodeByUri?.nextPost ? data.nodeByUri?.nextPost : null,
        //logoUrl: "/images/bsm-logo-2.png",
        logoUrl: "https://"+process.env.WP_IMAGES_URL+"/devtest/wp-content/uploads/2024/07/bsm-logo-color.webp"
      },
    }
  }