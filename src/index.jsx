import { Injector, Logger } from "replugged";

export const PluginLogger = Logger.plugin("DevTools");

export const PluginInjector = new Injector();

import { DevToolsMenuItem } from "./Components/MenuItem.jsx";

import { HBCM } from "./lib/HomeButtonContextMenuApi.jsx";

export const start = () => {
  HBCM.addItem("DevTools", DevToolsMenuItem);
};

export const stop = () => {
  HBCM.removeItem("DevTools");
};
