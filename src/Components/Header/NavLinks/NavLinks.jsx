import { Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavLinks.module.css";

export const NavLinks = ({ direction, closeDrawer }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Space
      size={48}
      direction={direction ?? "horizontal"}
      className={classes["navlink-container"]}
    >
      <ActiveNavLinks
        url="/"
        text="Home"
        activePath={pathname}
        closeDrawer={closeDrawer}
      />
      <ActiveNavLinks
        url="/campus"
        text="Campus"
        activePath={pathname}
        closeDrawer={closeDrawer}
      />
      <ActiveNavLinks
        url="/about"
        text="About us"
        activePath={pathname}
        closeDrawer={closeDrawer}
      />
      <ActiveNavLinks
        url="/acheivements"
        text="Student Acheivements"
        activePath={pathname}
        closeDrawer={closeDrawer}
      />
      <ActiveNavLinks
        url="/events"
        text="Events"
        activePath={pathname}
        closeDrawer={closeDrawer}
      />
      <ActiveNavLinks
        url="/contact"
        text="Contact"
        activePath={pathname}
        closeDrawer={closeDrawer}
      />
    </Space>
  );
};

const ActiveNavLinks = ({ url, text, activePath, closeDrawer }) => {
  return (
    <div className={`${url === activePath ? classes["activeNavLink"] : ""}`}>
      <Link href={url}>
        <div>
          <a
            onClick={() => {
              closeDrawer?.();
            }}
          >
            {text}
          </a>
        </div>
      </Link>
    </div>
  );
};
