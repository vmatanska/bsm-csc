
import { NewsCard } from '../NewsCard/NewsCard';
import styles from './Results.module.scss';

export const Results = ({news}) => {
    console.log("NEWS: ", news);
    /* {one_news.newsFeatures.title} */
    return (
        <div className={ `${styles["max-w-5xl"]} ${styles["mx-auto"]} ${styles["grid"]} ${styles["grid-cols-3"]} ${styles["gap-5"]} ${styles["mb-10"]}` }>
            { news.map((one_news) => (    
                console.log("RESULTS Component: one_news = ", one_news, " image=", one_news.featuredImage?.node?.sourceUrl, " title=", one_news.newsFeatures.title, " tags=", one_news.newsFeatures?.tags),
                <NewsCard key={one_news.databaseId} 
                            title={one_news.newsFeatures.title}
                            link={one_news.uri} 
                            excerpt={one_news.newsFeatures?.excerpt} 
                            published={one_news.newsFeatures?.published} 
                            author={one_news.newsFeatures?.author} 
                            tags={one_news.newsFeatures?.tags} 
                            image={one_news.featuredImage?.node?.sourceUrl} 
                />
            ))}
        </div>
    )
}