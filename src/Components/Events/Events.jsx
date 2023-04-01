import { Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import FolderGallery from "../FolderGallery/FolderGallery";

const Events = (props) => {
  return (
    <Space
      direction="vertical"
      size={72}
      align="center"
      style={{ width: "100%" }}
    >
      <BigTitle
        title="Events and Celebrations"
        colorIndex={[2]}
        subTitle="Jio cinema provides teh best viwing experience ever tahtn any other app combined."
      />
      <FolderGallery />
    </Space>
  );
};

export default Events;
