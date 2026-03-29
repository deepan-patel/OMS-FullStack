"use client";

import {
    Footprints,
    Glasses,
    Briefcase,
    Shirt,
    ShoppingBasket,
    Hand,
    Venus,
} from "lucide-react";


import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"

import { cn } from "@/lib/utils";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const categories = [
    {
        name: "All",
        icon: <ShoppingBasket className="w-4 h-4" />,
        slug: "all",
    },
    {
        name: "T-shirts",
        icon: <Shirt className="w-4 h-4" />,
        slug: "t-shirts",
    },
    {
        name: "Shoes",
        icon: <Footprints className="w-4 h-4" />,
        slug: "shoes",
    },
    {
        name: "Accessories",
        icon: <Glasses className="w-4 h-4" />,
        slug: "accessories",
    },
    {
        name: "Bags",
        icon: <Briefcase className="w-4 h-4" />,
        slug: "bags",
    },
    {
        name: "Dresses",
        icon: <Venus className="w-4 h-4" />,
        slug: "dresses",
    },
    {
        name: "Jackets",
        icon: <Shirt className="w-4 h-4" />,
        slug: "jackets",
    },
    {
        name: "Gloves",
        icon: <Hand className="w-4 h-4" />,
        slug: "gloves",
    },
];

const sortOptions = [
    "Newest",
    "Oldest",
    "Price: Low to High",
    "Price: High to Low",
]

export default function Categories() {

    const searchParams = useSearchParams();
    const selectedCategroy = searchParams.get("category");
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", value || "all");
        router.push(`${pathname}?${params.toString()}`);
    }


    const handleSortChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value || "Newest");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="flex flex-col gap-2">
            <div>
                <div className="text-lg font-semibold  w-full text-center bg-primary text-white rounded-t-md">
                    Categories
                </div>
                <div className="grid grid-cols-3 sm:grid-col-3 md:grid-col-4 lg:grid-col-6 xl:grid-col-8 bg-primary rounded-b-md p-2">
                    {categories.map((category) => (
                        <div className={cn(
                            "flex flex-row items-center justify-center gap-2 cursor-pointer",
                            selectedCategroy === category.slug ? "bg-secondary text-secondary-foreground rounded-md" : "",

                        )}
                            key={category.slug}
                            onClick={
                                () => handleChange(category.slug)
                            }
                        >
                            {category.icon}
                            {category.name}
                        </div>
                    ))}
                </div>
            </div>
            {/* 
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
            </div> */}
        </div>
    )
}