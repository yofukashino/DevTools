import { common, components } from "replugged";
import * as Icons from "./Icons";
import * as Types from "../types";
const {
  ContextMenu: { MenuItem },
} = components;
const { fluxDispatcher } = common;
export const DevToolsMenuItem = (
  <MenuItem
    {...{
      label: "Open DevTools",
      id: "dev-tools",
      icon: (): Types.ReactElement => Icons.tools("20", "20"),
      action: (): void => {
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
) as Types.ReactElement;
