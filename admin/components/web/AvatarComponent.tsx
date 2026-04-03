
"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, User, LogOut } from "lucide-react";

export default function AvatarComponent() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    <span className="sr-only">Avatar Menu</span>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User />
                        <Link href="/users/deepanpatel">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <LogOut />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}