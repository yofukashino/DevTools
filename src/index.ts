import { Injector, Logger } from "replugged";

export const PluginLogger = Logger.plugin("DevTools");

export const PluginInjector = new Injector();

import DevToolsMenuItem from "./Components/MenuItem";

import HBCM from "./lib/HomeButtonContextMenuApi";

export const start = (): void => {
  HBCM.getAPI().addItem("DevTools", DevToolsMenuItem);
};

export const stop = (): void => {
  HBCM.getAPI().removeItem("DevTools");
};
