import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.AccountUtils = await webpack
    .waitForModule<Types.AccountUtils>(webpack.filters.byProps("saveAccountChanges"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find AccountUtils Module");
    });

  Modules.DeveloperExperimentStore ??= webpack.getByStoreName<Types.DeveloperExperimentStore>(
    "DeveloperExperimentStore",
  );
};

export default Modules;
