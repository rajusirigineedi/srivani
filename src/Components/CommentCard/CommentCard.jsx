import React from "react";
import styles from './CommentCard.module.css';
import { Space, Typography } from "antd";
const CommentCard = ({ mainTitle, subTitle, description }) => {
    const { Text, Paragraph } = Typography;
    return (
        <Space
            className={styles.space}
            style={{
                width: "300px",
                minHeight: "150px",
                borderRadius: "8px",
                display: "flex",
                padding: "1rem",
                textAlign: "left",
            }}
            direction="vertical"
        >
            <div style={{ display: "flex" }}>
                <div style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "10rem",
                    backgroundColor: "black",
                    margin: "1rem 1rem 0 0"
                }}>
                {/* Place the icon here and remove the background color */}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text className={styles.mainTitle}>{mainTitle}</Text>
                    <Text className={styles.subTitle}>{subTitle}</Text>
                </div>
            </div>
            <Paragraph style={{ marginTop: "1rem" }}>{description}</Paragraph>
        </Space>
    );
}
export default CommentCard;