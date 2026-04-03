"use client"

import { Card } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react"

// passed id so we can map each different check box independantly 
export default function CheckCard({ id }: { id: string }) {
    const [checked, setChecked] = useState(false);
    return (
        <Card className="flex items-center p-4">
            <div className="flex items-center gap-4">
                <Checkbox id={id} checked={checked} onCheckedChange={(value) => setChecked(value === true)} />
                <label htmlFor={id} className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
            </div>
        </Card>
    )

}