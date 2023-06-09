import { Space } from "antd";
import React from "react";
import BigTitle from "../BigTitle/BigTitle";
import FolderGallery from "../FolderGallery/FolderGallery";

const Events = (props) => {
  const { imageFolders, bigTitle } = props;
  const _imageFolders = imageFolders.map((folder) => {
    return {
      folder: folder.attributes.folder,
      image:
        folder.attributes.images.data?.[0]?.attributes.image.data.attributes
          .url,
    };
  });
  return (
    <Space
      direction="vertical"
      size={72}
      align="center"
      style={{ width: "100%", marginTop: 72 }}
    >
      <BigTitle bigTitle={bigTitle} />
      <FolderGallery imageFolders={_imageFolders} />
    </Space>
  );
};

export default Events;
