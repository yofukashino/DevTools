import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
export { ReactElement, ComponentClass, MouseEvent } from "react";
import { ReactElement } from "react";
declare global {
  interface Window {
    HomeButtonContextMenuApi: HomeButtonContextMenuApi;
  }
}
export interface ContextMenuArgs {
  className: string;
  config: { context: string };
  context: string;
  onHeightUpdate: DefaultTypes.AnyFunction;
  position: null | number;
  target: HTMLElement;
  theme: string;
}
export interface ExtendedContextMenuArgs extends ContextMenuArgs {
  onClose: DefaultTypes.AnyFunction;
}
export interface ContextMenu {
  close: DefaultTypes.AnyFunction;
  open: (
    event: React.UIEvent,
    render?: ContextMenu,
    options?: { enableSpellCheck?: boolean },
    renderLazy?: Promise<ContextMenu>,
  ) => void;
  openLazy: (
    event: React.UIEvent,
    renderLazy?: Promise<ContextMenu>,
    options?: { enableSpellCheck?: boolean },
  ) => void;
}
export interface HomeButtonContextMenuApi {
  items?: Map<string, ReactElement>;
  constructor?: DefaultTypes.AnyFunction;
  addItem?: DefaultTypes.AnyFunction;
  removeItem?: DefaultTypes.AnyFunction;
  forceUpdate?: DefaultTypes.AnyFunction;
  openContextMenu?: DefaultTypes.AnyFunction;
}
export interface NavBarClasses {
  activityPanel: string;
  badgeIcon: string;
  base: string;
  circleButtonBase: string;
  circleIcon: string;
  circleIconButton: string;
  container: string;
  content: string;
  createJoinContainer: string;
  downloadProgressCircle: string;
  dragInner: string;
  errorInner: string;
  fullWidth: string;
  guildSeparator: string;
  guilds: string;
  guildsError: string;
  hasNotice: string;
  hidden: string;
  iconBadge: string;
  listItem: string;
  listItemTooltip: string;
  listItemWidth: string;
  listItemWrapper: string;
  navigationIcon: string;
  nitroUpsell: string;
  nitroUpsellIcon: string;
  panels: string;
  participating: string;
  pill: string;
  placeholderMask: string;
  plus: string;
  scroller: string;
  scrolling: string;
  selected: string;
  sidebar: string;
  tree: string;
  tutorialContainer: string;
  unavailableBadge: string;
  unreadMentionsBar: string;
  unreadMentionsIndicatorBottom: string;
  unreadMentionsIndicatorTop: string;
  upsellIcon: string;
  upsellText: string;
  upsellTooltip: string;
  wrapper: string;
}
