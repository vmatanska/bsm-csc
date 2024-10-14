import { MainMenu } from "../MainMenu";
import { Footer } from "../Footer";
import BlockRenderer from "../BlockRenderer/BlockRenderer";

export const Page = (props) => {
  console.log("Component Page props : ", props);
  console.log("Component Page props.previousPost : ", props?.previousPost);
  console.log(
    "Component Page props.previousPost.uri : ",
    props?.previousPost?.uri
  );
  console.log("Component Page props.nextPost : ", props?.nextPost);
  return (
    <div>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
        logoSrc={props.logoUrl}
      />
      <BlockRenderer
        blocks={props.blocks}
        previousPost={props?.previousPost}
        nextPost={props?.nextPost}
      />
      <Footer />
    </div>
  );
};
