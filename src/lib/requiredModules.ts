import { webpack } from "replugged";
import Types from "../types";
export const NavBarClasses = Object.assign(
  {},
  webpack.getByProps("listItem"),
  webpack.getByProps("tree", "scroller"),
  webpack.getByProps("guilds", "base"),
) as Types.NavBarClasses;
