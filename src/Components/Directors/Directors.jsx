import { Space } from 'antd';
import { Typography } from 'antd';
import { Image } from 'antd';
import React from 'react';
import classes from "./Directors.module.css";

const { Text, Paragraph } = Typography;
const directors = ({ image, title, subTitle, text, paragraph}) => {
    return (
        <Space
            direction="vertical"
            size="middle"
            style={{display:"flex",marginLeft:"20rem"}}
        >
            <Image
                style={{borderTopRightRadius:"50%"}}
                width="313px"
                height="200px"
                src="error"
                fallback={image}
            />
            <div>
                <Text className={classes["title"]}>{title}</Text>
                <br/>
                <Text className={classes["subTitle"]}>{subTitle}</Text>
            </div>
            <Text className={classes["text"]}>{text}</Text>
            <Paragraph className={classes["paragraph"]}>{paragraph}</Paragraph>
        </Space>
    );
};

export default directors;