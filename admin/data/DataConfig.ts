import { SidebarItems } from "@/types/types";
import { LayoutDashboard, Settings, Calendar, Home, DollarSign, Users } from "lucide-react";


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
    {
        title: "Users",
        href: "/users",
        icon: Users
    }

];

export const userRoles = [
    "user",
    "admin",
]