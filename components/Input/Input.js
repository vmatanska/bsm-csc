import styles from './Input.module.scss';

export const Input = ({...rest}) => {
    console.log("INPUT REST ============== ", rest);
    console.log("INPUT {...rest} ============== ", {...rest});
    return (<input {...rest} className={styles.input} />);
}