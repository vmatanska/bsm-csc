import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Group } from "components/Group";
import { Paragraph } from "components/Paragraph";
import { PostContent } from "components/PostContent";
import { CallToActionButton } from "../CallToActionButton/CallToActionButton";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import { Spacer } from "components/Spacer";
import { Separator } from "components/Separator";
import { NewsSearch } from "components/NewsSearch";
//import { PostDate } from "components/PostDate";
import { NewsFeatures } from "components/NewsFeatures";
import { PostNavigationLink } from "components/PostNavigationLink";

import Image from "next/image";
import { theme } from "theme";
import { theme2 } from "theme2";

//const BlockRenderer = (props) => {
const BlockRenderer = ({ blocks, previousPost, nextPost }) => {
  //const { blocks, previousPost, nextPost } = props;

  console.log("Component BlockRenderer blocks : ");
  //console.log("Component BlockRenderer blocks : PROPS: ", props);
  console.log("Component BlockRenderer theme2 : ", theme2.settings.layout);
  console.log("Component BlockRenderer nextPost: ", nextPost);
  console.log("Component BlockRenderer previousPost: ", previousPost);
  /*console.log("Component BlockRenderer previousPost.uri: ", previousPost.uri);   
    [previousPost]?.map((el) => {console.log("Component BlockRenderer previousPost.map EL TITLE === : ", el.title),
                                console.log("Component BlockRenderer previousPost.map EL URI === : ", el.uri)}
                            );*/

  return blocks?.map((block) => {
    switch (block.name) {
      case "acf/newsfeatures": {
        console.log("Component NewsFeatures block acf/newsfeatures: ", block);
        return (
          <NewsFeatures
            key={block.id}
            published={block.attributes.published}
            author={block.attributes.author[0].display_name}
          />
        );
      }
      case "acf/newssearch": {
        return <NewsSearch key={block.id} />;
      }
      case "acf/ctabutton": {
        console.log("Component BlockRenderer block acf/ctabutton: ", block);
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data?.label}
            destination={block.attributes.data?.destination || "/"}
            align={block.attributes.data?.align}
          />
        );
      }
      case "core/buttons": {
        console.log("Component BlockRenderer block core/buttons: ", block);
      }
      case "core/post-navigation-link": {
        console.log( "Component BlockRenderer block post-navigation-link: ", block );
        return (
          <PostNavigationLink
            key={block.id}
            arrow={block.attributes?.arrow}
            label={block.attributes?.label}
            linkLabel={block.attributes?.linkLabel}
            showTitle={block.attributes?.showTitle}
            type={block.attributes?.type}
            previousPost={previousPost}
            nextPost={nextPost}
          />
        );
      }
      case "core/pattern":
      case "core/template-part":
      case "core/group": {
        console.log("Component BlockRenderer block core/group-111: ", block);
        console.log(
          "Component BlockRenderer block core/group theme[block.attributes.backgroundColor]: ",
          theme[block.attributes?.backgroundColor]
        );
        //console.log('Component BlockRenderer block core/group: theme.accent-5: ', theme["accent-5"], ' === ', theme.accent5);
        console.log(
          "Component BlockRenderer block core/group block.attributes.style?.color?.background: ",
          block.attributes?.style?.color?.background
        );
        console.log(
          "Component BlockRenderer block core/group block.attributes.backgroundColor: ",
          block.attributes?.backgroundColor
        );

        return (
          <Group
            key={block.id}
            background={block.attributes?.url}
            backgroundColor={
              block.attributes?.style?.color?.background ||
              /*`theme.${block.attributes.backgroundColor}` ||*/ theme[
                block.attributes?.backgroundColor
              ] ||
              block.attributes
                ?.backgroundColor /*|| block.attributes.backgroundColor*/
            }
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            spacing={block.attributes?.style?.spacing}
            //backgroundColor={theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background }
          >
            <BlockRenderer blocks={block.innerBlocks} previousPost={previousPost} nextPost={nextPost} />
          </Group>
        );
      }

      case "core/group":
      case "core/block": {
        console.log(
          "Component BlockRenderer block core/group-222 || core/block: ",
          block
        );
        console.log(
          "Component BlockRenderer block core/group || core/block block.attributes: ",
          block.attributes
        );
        return (
          <BlockRenderer
            key={block.id}
            blocks={block.innerBlocks}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            previousPost={previousPost} 
            nextPost={nextPost}
            /*backgroundColor={block.attributes.backgroundColor}*/
          />
        );
      }

      case "core/post-content": {
        console.log("Component BlockRenderer block core/post-content: ", block);
        return (
          <PostContent key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks}  previousPost={previousPost} nextPost={nextPost} />
          </PostContent>
        );
      }

      /*case "core/post-date": {               
                console.log("Component BlockRenderer block post-date: ", block);
                return (<PostDate key={block.id} 
                                    format={block.attributes.format}
                                    globalStyles={block.attributes.globalStyles}
                                    isLink={block.attributes.isLink}>
                            <BlockRenderer blocks={block.innerBlocks} />
                            </PostDate>);
            }*/

      case "core/post-author-name":
      case "core/paragraph": {
        console.log("Component BlockRenderer block core/paragraph: ", block);
        console.log(
          "Component BlockRenderer block core/paragraph block.attributes.content : ",
          block.attributes.content
        );
        console.log(
          "Component BlockRenderer block core/paragraph block.attributes.style?.color: ",
          block.attributes.style?.color
        );
        console.log(
          "Component BlockRenderer block core/paragraph theme[block.attributes.textColor]: ",
          theme[block.attributes.textColor]
        );
        //spacing && console.log("Component BlockRenderer block core/paragraph spacing: ", spacing);

        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            fontSize={block.attributes.fontSize}
            fontSizeCustom={block.attributes.style?.typography?.fontSize}
            lineHeight={block.attributes.style?.typography?.lineHeight}
            spacing={block.attributes.style?.spacing}
          />
        );
      }

      case "core/post-title":
      case "core/heading": {
        console.log("Component BlockRenderer block core/heading: ", block);
        console.log(
          "Component BlockRenderer block core/heading block.attributes.style?.color?.text: ",
          block.attributes.style?.color?.text
        );
        console.log(
          "Component BlockRenderer block core/heading block.attributes.textColor: ",
          block.attributes.textColor
        );
        console.log(
          "Component BlockRenderer block core/heading theme[block.attributes.textColor]: ",
          theme[block.attributes.textColor]
        );
        console.log(
          "Component BlockRenderer block core/heading block.attributes.fontSize: ",
          block.attributes.fontSize
        );
        //console.log("Component BlockRenderer block core/heading `theme.${block.attributes.backgroundColor}`: ", `theme.${block.attributes.backgroundColor}`);
        //console.log("Component BlockRenderer block core/heading theme[base_2]: ", theme.base_2);
        console.log(
          "Component BlockRenderer block core/heading theme[block.attributes.textColor] || block.attributes.style?.color?.text: ",
          theme[block.attributes.textColor] ||
            block.attributes.style?.color?.text
        );
        console.log(
          "Component BlockRenderer block core/heading theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background: ",
          theme[block.attributes.backgroundColor] ||
            block.attributes.style?.color?.background
        );
        //const txtColor = theme[block.attributes.textColor] ? `theme.${block.attributes.textColor}` : '';
        //const bckgrndColor = theme[block.attributes.backgroundColor] ? `theme.${block.attributes.backgroundColor}` : '';
        //console.log("Component BlockRenderer block core/heading txtColor: ", txtColor, "   bckgrndColor === ", bckgrndColor);
        console.log(
          "Component BlockRenderer block core/heading block.attributes.style?.spacing?.padding?.bottom: ",
          block.attributes.style?.spacing?.padding?.bottom
        );

        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            level={block.attributes.level}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            fontSize={block.attributes.fontSize}
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            spacing={block.attributes.style?.spacing}
            lineHeight={block.attributes.style?.typography?.lineHeight}
            fontStyle={block.attributes.style?.typography?.fontStyle}
            fontWeight={block.attributes.style?.typography?.fontWeight}
            letterSpacing={block.attributes.style?.typography?.letterSpacing}
            textTransform={block.attributes.style?.typography?.textTransform}
            writingMode={block.attributes.style?.typography?.writingMode}
            content={block.attributes.content}
          />
        );
      }

      case "core/spacer": {
        console.log("Component BlockRenderer block core/spacer: ", block);
        return <Spacer key={block.id} height={block.attributes.height} />;
      }
      case "core/separator": {
        console.log("Component BlockRenderer block core/separator: ", block);
        return (
          <Separator
            key={block.id}
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.backgroundColor
            }
            className={block.attributes?.className}
          />
        );
      }
      case "core/cover": {
        console.log("Component BlockRenderer block core/cover: ", block);
        console.log(
          "Component BlockRenderer block.innerBlocks core/cover: ",
          block.innerBlocks
        );
        console.log(
          "Component BlockRenderer block core/cover theme2.settings.layout?.wideSize : ",
          theme2.settings.layout?.wideSize
        );
        console.log(
          "Component BlockRenderer block core/cover theme2.settings.layout.contentSize : ",
          theme2.settings.layout.contentSize
        );
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
            customGradient={block.attributes?.customGradient}
            dimRatio={block.attributes?.dimRatio}
            fontSize={block.attributes?.fontSize}
            width={block.attributes?.width}
            height={block.attributes?.height}
            minHeight={block.attributes?.minHeight}
            isUserOverlayColor={block.attributes?.isUserOverlayColor}
            customOverlayColor={block.attributes?.customOverlayColor}
            isDark={block.attributes?.isDark}
            layoutType={block.attributes?.layout?.type}
            layoutContentSize={
              block.attributes?.layout?.contentSize
                ? block.attributes?.layout?.contentSize
                : theme2.settings.layout?.contentSize
            }
            layoutWideSize={
              block.attributes?.layout?.wideSize
                ? block.attributes?.layout?.wideSize
                : theme2.settings.layout?.wideSize
            }
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            borderRadiusStyle={block.attributes?.style?.border?.radius}
            borderWidthStyle={block.attributes?.style?.border?.width}
            colorDuotoneStyle={block.attributes?.style?.color?.duotone}
            blockGap={block.attributes?.style?.spacing?.blockGap}
            marginTop={block.attributes?.style?.spacing?.margin?.top}
            marginBottom={block.attributes?.style?.spacing?.margin?.bottom}
            marginLeft={block.attributes?.style?.spacing?.margin?.left}
            marginRight={block.attributes?.style?.spacing?.margin?.right}
            paddingTop={block.attributes?.style?.spacing?.padding?.top}
            paddingBottom={block.attributes?.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes?.style?.spacing?.padding?.left}
            paddingRight={block.attributes?.style?.spacing?.padding?.right}
            headingColor={
              block.attributes?.style?.elements?.heading?.color?.text
            }
            linkColor={block.attributes?.style?.elements?.link?.color?.text}
            typographyFontStyle={block.attributes?.style?.typography?.fontStyle}
            typographyFontWeight={
              block.attributes?.style?.typography?.fontWeight
            }
            typographyLetterSpacing={
              block.attributes?.style?.typography?.letterSpacing
            }
            typographyLineHeight={
              block.attributes?.style?.typography?.lineHeight
            }
            typographyTextDecoration={
              block.attributes?.style?.typography?.textDecoration
            }
            typographyTextTransform={
              block.attributes?.style?.typography?.textTransform
            }
          >
            <BlockRenderer blocks={block.innerBlocks} previousPost={previousPost} nextPost={nextPost} />
          </Cover>
        );
      }
      
      case "core/read-more": {
        console.log("Component BlockRenderer block core/READMORE: ", block);
        return (
          <div style={{width: "100%", margin: "auto", textAlign: "center"}}><a href={block.attributes.className}>READ MORE</a></div>
        );
      }
      case "core/columns": {
        console.log("Component BlockRenderer block core/COLUMNS: ", block);
        console.log(
          "Component BlockRenderer block core/COLUMNS block.attributes: ",
          block.attributes
        );
        console.log(
          "Component BlockRenderer block core/COLUMNS theme: ",
          theme
        );
        console.log(
          "Component BlockRenderer block core/COLUMNS theme[block.attributes.backgroundColor]: ",
          theme[block.attributes.backgroundColor]
        );
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} previousPost={previousPost} nextPost={nextPost} />
          </Columns>
        );
      }
      case "core/column": {
        console.log("Component BlockRenderer block core/column: ", block);
        //console.log("Component BlockRenderer block core/column block.attributes.width: ", block.attributes.width);
        return (
          <Column key={block.id} width={block.attributes?.width}>
            <BlockRenderer blocks={block.innerBlocks} previousPost={previousPost} nextPost={nextPost} />
          </Column>
        );
      }

      case "core/image": {
        console.log("Component BlockRenderer block core/image: ", block);
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
          />
        );
      }

      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  });
};

export default BlockRenderer;
