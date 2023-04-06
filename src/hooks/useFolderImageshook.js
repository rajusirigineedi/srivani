import React, { useCallback, useEffect, useState } from "react";
/**
 *
 * Not in use anymore.
 *
 */
const useFolderImageshook = () => {
  const [folders, setFolders] = useState();

  const getFolderImages = useCallback(
    (folderName) => {
      return folders?.filter((data) => data.folder === folderName)?.[0]?.images;
    },
    [folders]
  );

  const getFolderThumbnails = useCallback(() => {
    return folders?.map((folder) => {
      return {
        folder: folder.folder,
        title: folder.title,
        image: folder?.images?.[0]?.image,
      };
    });
  }, [folders]);

  useEffect(() => {
    fetch("/api/hello")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setFolders(data);
      });
  }, []);

  return { folders, getFolderImages, getFolderThumbnails };
};

export default useFolderImageshook;
