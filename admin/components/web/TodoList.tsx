"use client"


import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useState } from "react"
import CheckCard from "../cards/CheckCard"
import { Button } from "../ui/button"
import { Calendar as CalendarIcon } from "lucide-react";

import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar"

import { format } from "date-fns"


export default function TodoList() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-medium text-lg mb-4">Todo List</h1>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button className="w-full">
                            <CalendarIcon />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="center">
                        <PopoverHeader className="flex flex-col items-center">
                            <PopoverTitle>Select Date</PopoverTitle>
                            <PopoverDescription>Select a date to view your todos.</PopoverDescription>
                        </PopoverHeader>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => {
                                setDate(date);
                                setOpen(false);
                            }}
                            className="rounded-lg border w-auto"
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col gap-2">
                {/* CALANDER */}

                <ScrollArea className="h-[400px] w-full rounded-md overflow-y-auto ">
                    <div className="flex flex-col gap-2 p-2">
                        {
                            Array.from({ length: 10 }).map((_, index) => (
                                <CheckCard key={index} id={`item-${index}`} />
                            ))
                        }
                    </div>
                </ScrollArea>

            </div>
        </div>
    )
}