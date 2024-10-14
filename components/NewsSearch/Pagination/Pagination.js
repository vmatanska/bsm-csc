
import styles from './Pagination.module.scss';
import stl from '../../Button/Button.module.scss';
import { Button } from '../../Button';

export const Pagination = ({ totalPages, onPageClick }) => {
    console.log("Pagination component totalPages === ", totalPages);
    return (
        <div className={styles.pagination}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <div key={i} onClick={() => {onPageClick(i + 1)}}>
                    <Button btnStyle="btn-slightly-round" >{i + 1}</Button>
                </div>
            ))}
        </div>
    );
};