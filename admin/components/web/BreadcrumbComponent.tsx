"use client"

import React from "react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { usePathname } from "next/navigation"

export default function BreadcrumbComponent() {
    const pathname = usePathname()

    const pathSegments = pathname.split("/").filter((segment) => segment !== "")
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {pathSegments.map((segment, index) => (
                        <React.Fragment key={index}>
                            {index < pathSegments.length - 1 &&
                                <>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
                                            {segment}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </>
                            }

                            {index === pathSegments.length - 1 && (
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                                </BreadcrumbItem>
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>

    )
}