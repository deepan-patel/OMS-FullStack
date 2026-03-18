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

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function Categories() {

    const searchParams = useSearchParams();
    const selectedCategroy = searchParams.get("category");
    const router = useRouter();

    const handleChange = (value: string | null) => {
        router.push(`/?category=${value}`);
    }

    return (
        <div>
            <div className="grid grid-cols-3 sm:grid-col-3 md:grid-col-4 lg:grid-col-6 xl:grid-col-8 bg-primary rounded-md p-2">
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
    )
}