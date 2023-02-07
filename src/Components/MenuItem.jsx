/* eslint-disable new-cap */
import { common, components } from "replugged";
import * as Icons from "./Icons.jsx";
const {
  ContextMenu: { MenuItem },
} = components;
const { fluxDispatcher } = common;
export const DevToolsMenuItem = (
  <MenuItem
    {...{
      label: "Open DevTools",
      id: "dev-tools",
      icon: () => Icons.Tools("20", "20"),
      action: () => {
        fluxDispatcher.dispatch({
          type: "DEV_TOOLS_SETTINGS_UPDATE",
          settings: {
            devToolsEnabled: !0,
            displayTools: !0,
            showDevWidget: !0,
          },
        });
      },
    }}
  />
);
