import { Injector, Logger } from "replugged";

export const PluginLogger = Logger.plugin("DevTools");

export const PluginInjector = new Injector();

import { DevToolsMenuItem } from "./Components/MenuItem";

import { HBCM } from "./lib/HomeButtonContextMenuApi";

export const start = (): void => {
  HBCM.addItem("DevTools", DevToolsMenuItem);
};

export const stop = (): void => {
  HBCM.removeItem("DevTools");
};
