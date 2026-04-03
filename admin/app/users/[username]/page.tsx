
import BreadcrumbComponent from "@/components/web/BreadcrumbComponent"
import CardList from "@/components/cards/CardList"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { BadgeCheck, Candy, Citrus, Shield, UserRoundPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"

import EditUserForm from "@/components/forms/EditUserForm"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MultipleLineChartComponent from "@/components/charts/MultipleLineChartComponent";


export default function UserNamePage({ params }: { params: { username: string } }) {

    return (
        <div>
            <BreadcrumbComponent />
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* user badge */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1>User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user is verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield
                                        size={36}
                                        className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage
                                        users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36}
                                        className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus
                                        size={36}
                                        className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* information container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>
                                        Edit User
                                        <UserRoundPen />
                                    </Button>
                                </SheetTrigger>
                                <EditUserForm />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p>Profile Completion</p>
                                <Progress value={33} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>John Doe</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>John@doe.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>Toronto ON</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge variant="default">Admin</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Joined on <span className="font-bold">2026-04-02</span></p>
                        </div>
                    </div>
                    {/* CartList */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Latest Transactions" />
                    </div>
                </div>

                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">John Doe</h1>
                        </div>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </p>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <MultipleLineChartComponent />
                    </div>

                </div>


            </div>
        </div >
    )
}