import { webpack } from "replugged";
export const NavBarClasses = Object.assign(
  {},
  webpack.getByProps("listItem"),
  webpack.getByProps("tree", "scroller"),
  webpack.getByProps("guilds", "base"),
);
