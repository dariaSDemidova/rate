import React from "react";
import styles from "./Card.module.css"

function Card(props) {
    const { title, price, speed, isSelected } = props;
    const selectedClass = isSelected ? styles.selected : "";
    return (
        <div className={`${styles.card} ${selectedClass}`}>
            {isSelected}
            <h4 className={styles.title}>Безлимитный {title}</h4>
            <div className={styles.price}>руб {price} /мес</div>
            <div className={styles.speed}>до {speed} Мбит/сек</div>
            <div className={styles.descr}>Объем включенного трафика не ограничен</div>
        </div >

    );
}

export default Card

