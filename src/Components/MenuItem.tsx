import { fluxDispatcher as FluxDispatcher } from "replugged/common";
import { ContextMenu } from "replugged/components";
import Icons from "./Icons";
export default (
  <ContextMenu.MenuItem
      label="Open DevTools"
      id="dev-tools"
      icon={ () => <Icons.tools width={20} height={20} />}
      action={() => {
        FluxDispatcher.dispatch({
          type: "DEV_TOOLS_SETTINGS_UPDATE",
          settings: {
            devToolsEnabled: !0,
            displayTools: !0,
            showDevWidget: !0,
          },
        });
      }}
  />
) as React.ReactElement;
