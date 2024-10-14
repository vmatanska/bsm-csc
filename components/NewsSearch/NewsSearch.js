import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Results } from "./Results";
import { Pagination } from "./Pagination/Pagination";
import queryString from "query-string";
import { Filters } from "./Filters/Filters";

export const NewsSearch = () => {
    const [news, setNews] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 3;
    const router = useRouter();

    const search = async () => {
        const { page, title, date_from, date_to } = queryString.parse(window.location.search);

        console.log("NEWS-SEARCH component TITLE === ", title, "NEWS-SEARCH component date_from === ", date_from, "NEWS-SEARCH component date_to === ", date_to);
        console.log("NEWS-SEARCH component window.location.search === ", window.location.search, "NEWS-SEARCH component queryString.parse(window.location.search) === ", queryString.parse(window.location.search));

        const filters = {};
        if(title) filters.title = title;
        if(date_from) filters.date_from = date_from;
        if(date_to) filters.date_to = date_to;

        const responce = await fetch(`/api/search`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...filters,
            }),
        });
        const data = await responce.json();
        console.log("SEARCH DATA: ", data);
        setNews(data.news);
        setTotalResults(data.total);
    };

    const handlePageClick = async (pageNumber) => {

        const { title, date_from, date_to } = queryString.parse(
            window.location.search
        );

        const title_str = title ? title : '';
        const date_to_str = date_to ? date_to : '';
        const date_from_str = date_from ? date_from : '';

        await router.push(`${router.query.slug.join("/")}?page=${pageNumber}&title=${title_str}&date_from=${date_from_str}&date_to=${date_to_str}`, 
        null, 
        { shallow: true,  });
        search();
    };

    useEffect(() => {      
        search();
    }, []);

    const handleSearch = async ({title, date_from, date_to}) => {
        
        console.log("NewsSearch component handleSearch FILTERS: TITLE: ", title, " DATE_FROM: ", date_from, " DATE_TO: ", date_to);
        // update browser url
        // search
        await router.push(`${router.query.slug.join("/")}?page=1&title=${title}&date_from=${date_from}&date_to=${date_to}`, null, { shallow: true,  });
        search();
    };

    return <div>
                <Filters onSearch={handleSearch} />
                <Results news={news} />
                <Pagination 
                    onPageClick={handlePageClick}
                    totalPages={Math.ceil(totalResults / pageSize)} />
            </div>;
}