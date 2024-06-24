import { APPNAME } from "../global";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  Map,
  LineChart,
  ListFilter,
  MessageCircleQuestion,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Pyramid,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import { AppLeftRailProps } from "./components/appleftrail";
export const leftRailApps: AppLeftRailProps = {
  topApps: [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Dashboard",
      href: `/${APPNAME}`,
    },
  ],
  bottomApps: [
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Settings",
      href: "/settings",
    },
  ],
};
