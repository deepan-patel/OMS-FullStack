"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";


import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

export default function Filter() {

    const sortOptions = [
        "Newest",
        "Oldest",
        "Price: Low to High",
        "Price: High to Low",

    ]
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSortChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value || "Newest");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (

        <div className="flex flex-row justify-end">
            <div className="flex flex-row gap-2 items-center">
                <p>Sort By:</p>

                <Combobox items={sortOptions} defaultValue={sortOptions[0]} onValueChange={handleSortChange}>
                    <ComboboxInput />
                    <ComboboxContent>
                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem key={item} value={item}>
                                    {item}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

            </div>
        </div>
    )
}   
