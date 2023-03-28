import { Space } from "antd";
import classes from "./NavLinks.module.css";

export const NavLinks = () => {
  return (
    <Space size={48} className={classes["navlink-container"]}>
      <a>Home</a>
      <a>Campus</a>
      <a>About us</a>
      <a>Student Acheivements</a>
      <a>Culturals</a>
      <a>Contact</a>
    </Space>
  );
};
