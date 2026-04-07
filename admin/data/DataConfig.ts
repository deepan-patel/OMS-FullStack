import { SidebarItems } from "@/types/types";
import { LayoutDashboard, Settings, Calendar, Home, DollarSign, Users, Package } from "lucide-react";


export const sidebarItems: SidebarItems = [
    {
        title: "Home",
        href: "/",
        icon: Home
    },
    {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings
    },
    {
        title: "Calendar",
        href: "/calendar",
        icon: Calendar
    },
    {
        title: "Payments",
        href: "/payments",
        icon: DollarSign
    },

];

export const userRoles = [
    "user",
    "admin",
]

export const orderStatus = [
    "pending",
    "processing",
    "success",
    "failed",
];