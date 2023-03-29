import { Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavLinks.module.css";

export const NavLinks = ({ direction }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Space
      size={48}
      direction={direction ?? "horizontal"}
      className={classes["navlink-container"]}
    >
      <ActiveNavLinks url="/" text="Home" activePath={pathname} />
      <ActiveNavLinks url="/campus" text="Campus" activePath={pathname} />
      <ActiveNavLinks url="/aboutus" text="About us" activePath={pathname} />
      <ActiveNavLinks
        url="/acheivemnts"
        text="Student Acheivements"
        activePath={pathname}
      />
      <ActiveNavLinks url="/events" text="Events" activePath={pathname} />
      <ActiveNavLinks url="/contact" text="Contact" activePath={pathname} />
    </Space>
  );
};

const ActiveNavLinks = ({ url, text, activePath }) => {
  return (
    <div className={`${url === activePath ? classes["activeNavLink"] : ""}`}>
      <Link href={url}>
        <a>{text}</a>
      </Link>
    </div>
  );
};
