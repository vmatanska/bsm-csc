import { Navigation } from "../Navigation";
//import { MainMenu } from "../Navigation/MainMenu";
//import { MainMenuSticky } from "../Navigation/MainMenuSticky";
import { Footer } from "../Footer";
import BlockRenderer from "../BlockRenderer/BlockRenderer";

export const Page = (props) => {
  console.log("Component Page props : ", props);

  return (
    <div id="wraper">
      <Navigation
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
        logoSrc={props.logoUrl}
      />
      {/*<MainMenuSticky
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
        logoSrc={props.logoUrl}
      />
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
        logoSrc={props.logoUrl}
      />    */}
      <BlockRenderer
        blocks={props.blocks}
        previousPost={props?.previousPost}
        nextPost={props?.nextPost}
      />
      <Footer />
    </div>
  );
};
