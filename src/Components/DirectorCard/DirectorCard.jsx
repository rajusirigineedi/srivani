import React from "react";
import styles from './DirectorCard.module.css';
const DirectorCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <i
                        class="fa-solid fa-circle-user fa-2x"
                        style={{ color: "#B8B8B8" }}
                    ></i>
                </div>
                <div className={styles.titleAndRole}>
                    <p
                        style={{
                            fontSize: "16px",
                            marginBottom: "2px",
                            fontWeight: "bold"
                        }}
                    >
                        {props.title}
                    </p>
                    <label style={{ fontSize: "12px", marginTop: "0px" }}>
                        {props.rolee}
                    </label>
                </div>
            </div>
            <div className={styles.body}>
                <p style={{ marginTop: "0px" }}>{props.description}</p>
            </div>
        </div>
    );
}
export default DirectorCard;