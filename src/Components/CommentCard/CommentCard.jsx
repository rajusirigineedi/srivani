import React from "react";
import styles from './CommentCard.module.css';
import { Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const CommentCard = ({ mainTitle, subTitle, description }) => {
    const { Text, Paragraph } = Typography;
    return (
        <Space
            className={styles.space}
            style={{
                width: "320px",
                minHeight: "150px",
                borderRadius: "8px",
                display: "flex",
                padding: "2rem 3rem",
                textAlign: "left",
                backgroundColor:"white"
            }}
            direction="vertical"
        >
            <div style={{ display: "flex",alignItems:"center" }}>
                <div style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10rem",
                    marginRight:"1.5rem",
                    fontSize:"2.5rem",
                    border:`1px solid var(--fontcolor-secondary)`,
                    display:"grid",
                    placeItems:"center",
                }}>
                {/* Place the icon here and remove the background color */}
                <UserOutlined/>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text className={styles.mainTitle}>{mainTitle}</Text>
                    <Text className={styles.subTitle}>{subTitle}</Text>
                </div>
            </div>
            <Paragraph style={{ marginTop: "1rem" }} className={styles.para}>{description}</Paragraph>
        </Space>
    );
}
export default CommentCard;