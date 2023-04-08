import React from "react";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

export const useSmallScreenhook = (props) => {
  const screens = useBreakpoint();
  const { xl, xxl, sm, md, xs, lg } = screens;
  const _isSmallScreen = xs && !sm && !lg && !md && !xl && !xxl;
  // const _isSmallScreen = (sm || xs) && !lg && !md && !xl && !xxl;

  return { _isSmallScreen, xl, xxl, sm, md, xs, lg };
};
