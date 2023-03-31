import { Carousel, Col, Image, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import BigTitle from "../BigTitle/BigTitle";
import CustomButton from "../CustomButton/CustomButton";
import { MiniGallery } from "../MiniGallery/MiniGallery";
import classes from "./Acheivements.module.css";

const { Text } = Typography;
const Acheivments = (props) => {
  const imageList = [
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  ];

  // init state here for title and subtitle.
  // onclck handlers as well.

  return (
    <div style={{ position: "relative" }}>
      <Carousel autoplay>
        {imageList.map((imageUrl, index) => (
          <div key={index}>
            <div className={classes["contentStyle"]}>
              <Image
                preview={false}
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
                alt="imagepreview"
                src={imageUrl}
              />
            </div>
          </div>
        ))}
      </Carousel>

      <MiniGallery
        imageList={imageList}
        title="Student Acheivments"
        subTitle="The future belongs to our students, and we are dedicated to helping them realize their dreams and achieve their goals. Below are some recent acheivements."
      />
    </div>
  );
};

export default Acheivments;
