"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenu,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarMenuBadge,
    SidebarRail,
    SidebarGroupContent,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton

} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import Image from "next/image";

import { sidebarItems } from "@/data/DataConfig";
import Link from "next/link";
import { User, ChevronUp, Plus, Mail, Projector, Book, GitMerge, Boxes, Box, Container, ChevronDown } from "lucide-react"

export default function AppSideBar() {

    const name = "John Doe"
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src="/deepanpatelswe.png" alt="logo" width={20} height={20} />
                                Deepan Patel
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <Separator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebarItems.map((item) => (
                            <SidebarMenuItem key={item.title} >
                                <SidebarMenuButton asChild>
                                    <Link href={item.href}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/projects">
                                        <Projector /><span>See all projects</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/projects">
                                        <Plus /><span>Add Project</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Infrastructure</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuButton asChild>
                            <Link href="/documentation">
                                <Boxes /><span>Kubernetes </span>
                            </Link>
                        </SidebarMenuButton>

                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton>
                                    <Container /> <span>Container</span>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton>
                                    <Box /> <span>Pods</span>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </SidebarMenu>
                </SidebarGroup>

                <Collapsible defaultOpen className="group/collapsible">

                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Documentation
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarMenu>
                                <SidebarMenuButton asChild>
                                    <Link href="/documentation">
                                        <Book /><span>Getting Started</span>
                                    </Link>
                                </SidebarMenuButton>

                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>
                                            <GitMerge /> <span>Install and Deploy</span>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenu>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <SidebarGroup>
                    <SidebarGroupLabel>My Team</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/team">
                                    <Mail />
                                    <span>Team messages</span>
                                </Link>
                            </SidebarMenuButton>
                            <SidebarMenuBadge>24</SidebarMenuBadge>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>


            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton variant="outline">
                                <User />{name} <ChevronUp className="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}