import styles from './Filters.module.scss';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { useState,  useEffect } from 'react';
import queryString from "query-string"

export const Filters = ({onSearch}) => {

    const [title, setTitle] = useState("");
    const [date_from, setDateFrom] = useState("");
    const [date_to, setDateTo] = useState("");

    const handleSearch = () => {
        onSearch({
            title,
            date_from,
            date_to
        });
    };
    
    useEffect(() => {
        const {
          title: titleInitial,
          date_from: dateFromInitial,
          date_to: dateToInitial,
        } = queryString.parse(window.location.search);
  
        setTitle(title || "");
        setDateFrom(date_from || "");
        setDateTo(date_to || "");
    }, []);

    return <div className={styles['filter'] + ' ' + 'max-w-5xl' + ' ' + 'mx-auto'}>
        <div>
            <span>Title:</span>
            <Input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <span>Date from:</span>
            <Input type='date' value={date_from} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <div>
            <span>Date to:</span>
            <Input type='date' value={date_to} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        {/*<div><label>
          Name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label></div>*/}
        <div>           
            <Button type="link" onClick={handleSearch} btnStyle="btn-slightly-round" >Search</Button>
        </div>
    </div>;
};