// defining types here
import { LucideIcon } from "lucide-react";


interface SidebarItem {
    title: string;
    href: string;
    icon: LucideIcon;
}

export type SidebarItems = SidebarItem[];


interface CardContent {
    id: number;
    title: string;
    badge: string;
    image: string;
    count: number;
}

export type CardContents = CardContent[];

