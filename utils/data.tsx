import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { IconType } from "react-icons";

export interface NavDataType {
  name: string;
  path: string;
  icon: IconType;
}

export const navData: NavDataType[] = [
  { name: "home", path: "/", icon: HiHome },
  { name: "about", path: "/about", icon: HiUser },
  { name: "services", path: "/services", icon: HiRectangleGroup },
  { name: "work", path: "/work", icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    icon: HiEnvelope,
  },
];
