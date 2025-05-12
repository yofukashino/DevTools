import { fluxDispatcher as FluxDispatcher, modal, parser } from "replugged/common";
import { ContextMenu } from "replugged/components";
import Icons from "./Icons";
import Modules from "../lib/requiredModules";

export default (
  <ContextMenu.MenuItem
    label="Open DevTools"
    id="dev-tools"
    icon={() => <Icons.tools width={20} height={20} />}
    action={() => {
      if (!Modules.DeveloperExperimentStore.isDeveloper) {
        modal.confirm({
          title: "Experiments Required",
          body: (
            <>
              This function requires Discord Experiments to be enabled. Please either log into a
              staff account with access to Discord Experiments or enable Discord Experiments in
              Replugged.
              <div
                style={{
                  marginTop: "10px",
                  padding: "12px",
                  backgroundColor: "var(--background-code)",
                  borderRadius: "10px",
                }}>
                {parser.parse(
                  "`Replugged > General > Advanced Settings > Enable Discord Experiments`",
                )}
              </div>
            </>
          ),
          onConfirm: () => Modules.AccountUtils.open("rp-general"),
          confirmText: "Open Replugged Settings",
        });
        return;
      }
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
