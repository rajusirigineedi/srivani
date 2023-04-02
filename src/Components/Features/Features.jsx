import { Space } from "antd";
import { Typography } from "antd";
import { Image } from "antd";
import React from 'react';
import classes from "./Features.module.css";

const { Paragraph } = Typography;
const Features = ({ logo, text, paragraph}) => {
    return (
        <Space
            direction="vertical"
            style={{width:"317px",display:"flex",alignItems:"center",justifyContent: 'center'}}
        >
            <Image
                className={classes["logo"]}
                width="67px"
                height="67px"
                src="error"
                fallback={logo}
            />
            <br/>
            <Paragraph className={classes["text"]}>{text}</Paragraph>
            <Paragraph className={classes["paragraph"]}>{paragraph}</Paragraph>
        </Space>
    );
};

export default Features;