import styles from './Column.module.scss';

export const Column = ({children, width}) => {
    const widthStyle = width ? {minWidth: width, flexGrow: 1} : {flexGrow: 1, flexBasis: 0};
    //console.log("Component COLUMN children === ", children);
    console.log("Component COLUMN width === ", width);
    console.log("Component COLUMN widthStyle === ", widthStyle);
    return (
        <div style={widthStyle} className={styles.column}>
            {children}
        </div>
    )
}