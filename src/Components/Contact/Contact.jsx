import { Space } from 'antd';
import { Typography } from 'antd';
import { Input } from 'antd';
import React from 'react';
import classes from "./Contact.module.css";

const { TextArea } = Input;
const { Text, Paragraph } = Typography;
const Contact = () => {
    return (
        <Space
            direction="vertical"
            style={{display:"flex",justifyContent:"center",alignItems:"center"}}
        >
            <Input className={classes["input1"]} placeholder="Enter Your Name" />
            <Input className={classes["input2"]} placeholder="Enter Your Phone number or email" />
            <TextArea className={classes["textArea"]} rows={7} placeholder="Type your query here"/>
        </Space>
    );
};

export default Contact;