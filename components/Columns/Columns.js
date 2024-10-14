import styles from './Columns.module.scss';

export const Columns = ({isStackedOnMobile, children, textColor,  backgroundColor}) => {
    //const ttt = ${isStackedOnMobile ? styles.block : styles.flex};
    //style={{color: textColor}}
    console.log("Component COLUMNS backgroundColor === ", backgroundColor, "   textColor === ", textColor);
    const textColorStyle = textColor ? { color: textColor } : {};
    const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
    return (
        <div className={styles.columnsWrapper} style={{ ...textColorStyle, ...backgroundColorStyle }}>
            <div className={`${styles["contectColumns"]} ${isStackedOnMobile ? styles.block : styles.flex}`} >
                {children}
            </div>
        </div>
    );
};