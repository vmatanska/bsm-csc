import Link from "next/link";
import Image from "next/image";
import styles from './NewsCard.module.scss';

export const NewsCard = ({/*key,*/ title, link, excerpt, published, author, tags, image}) => {
    console.log("NEWS CARD Component: image = ", image);
    console.log("NEWS CARD Component: link = ", link);
    //console.log("NEWS CARD Component: key = ", key);
    console.log("NEWS CARD Component: title = ", title);
    console.log("NEWS CARD Component: tags = ", tags);
    console.log("NEWS CARD Component: published = ", published);
  
    return <Link className={styles.card} href={link}>
                <div className={styles.image}>
                    <Image src={image} height="200" width="300" cover alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.date}>{published}</div>
                    <div className={styles.title}>{title}</div>
                    <div>{excerpt}</div>
                    {/*(!!tags) && <div>Tags: {tags}</div>*/}
                </div>
            </Link>;
}