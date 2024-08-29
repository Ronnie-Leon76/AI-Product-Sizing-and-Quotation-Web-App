import ChatIcon from "@/icons/chat-icon";
import DashboardIcon from "@/icons/dashboard-icon";
import IntegrationsIcon from "@/icons/integrations-icon";
import SettingsIcon from "@/icons/settings-icon";

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: JSX.Element;
  path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "dashboard",
  },
  {
    label: "Quotations",
    icon: <ChatIcon />,
    path: "quotation",
  },
  {
    label: "Integrations",
    icon: <IntegrationsIcon />,
    path: "integration",
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "settings",
  },
 
];
