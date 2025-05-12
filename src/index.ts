import { Injector, Logger } from "replugged";

export const PluginLogger = Logger.plugin("DevTools");

export const PluginInjector = new Injector();

import DevToolsMenuItem from "./Components/MenuItem";

import HBCM from "./lib/HomeButtonContextMenuApi";

import Modules from "./lib/requiredModules";

export const start = (): void => {
  void Modules.loadModules()
    .then(() => HBCM.getAPI().addItem("DevTools", DevToolsMenuItem))
    .catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  HBCM.getAPI().removeItem("DevTools");
};
