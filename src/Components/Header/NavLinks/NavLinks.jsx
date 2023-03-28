import { Space } from "antd";
import classes from "./NavLinks.module.css";

export const NavLinks = ({ direction }) => {
  return (
    <Space
      size={48}
      direction={direction ?? "horizontal"}
      className={classes["navlink-container"]}
    >
      <a>Home</a>
      <a>Campus</a>
      <a>About us</a>
      <a>Student Acheivements</a>
      <a>Culturals</a>
      <a>Contact</a>
    </Space>
  );
};
