import { ProductType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

export default function ProductList({ category, params }: { category: string, params: "homepage" | "products" }) {
    // TEMPORARY
    const products: ProductsType = [
        {
            id: 1,
            name: "Adidas CoreFit T-Shirt",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 39.99,
            sizes: ["s", "m", "l", "xl", "xxl"],
            colours: ["gray", "purple", "green"],
            images: {
                gray: "/products/1g.png",
                purple: "/products/1p.png",
                green: "/products/1gr.png",
            },
        },
        {
            id: 2,
            name: "Puma Ultra Warm Zip",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 59.99,
            sizes: ["s", "m", "l", "xl"],
            colours: ["gray", "green"],
            images: { gray: "/products/2g.png", green: "/products/2gr.png" },
        },
        {
            id: 3,
            name: "Nike Air Essentials Pullover",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 69.99,
            sizes: ["s", "m", "l"],
            colours: ["green", "blue", "black"],
            images: {
                green: "/products/3gr.png",
                blue: "/products/3b.png",
                black: "/products/3bl.png",
            },
        },
        {
            id: 4,
            name: "Nike Dri Flex T-Shirt",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 29.99,
            sizes: ["s", "m", "l"],
            colours: ["white", "pink"],
            images: {
                white: "/products/4w.png",
                pink: "/products/4p.png"
            },
        },
        {
            id: 5,
            name: "Under Armour StormFleece",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 49.99,
            sizes: ["s", "m", "l"],
            colours: ["red", "orange", "black"],
            images: {
                red: "/products/5r.png",
                orange: "/products/5o.png",
                black: "/products/5bl.png",
            },
        },
        {
            id: 6,
            name: "Nike Air Max 270",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 59.99,
            sizes: ["40", "42", "43", "44"],
            colours: ["gray", "white"],
            images: { gray: "/products/6g.png", white: "/products/6w.png" },
        },
        {
            id: 7,
            name: "Nike Ultraboost Pulse ",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 69.99,
            sizes: ["40", "42", "43"],
            colours: ["gray", "pink"],
            images: { gray: "/products/7g.png", pink: "/products/7p.png" },
        },
        {
            id: 8,
            name: "Levi’s Classic Denim",
            shortDescription:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            description:
                "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
            price: 59.99,
            sizes: ["s", "m", "l"],
            colours: ["blue", "green"],
            images: { blue: "/products/8b.png", green: "/products/8gr.png" },
        },
    ];

    return (
        <div>
            <div className="w-full flex flex-col gap-2">
                <Categories />
                {params === "products" && <Filter />}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 mt-5">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
                <Link href={category ? `/products?category=${category}` : "/products"} className="flex flex-row justify-end mt-5 underline text-sm ">
                    View All Products
                </Link>
            </div>


        </div>
    )
}

export type ProductsType = ProductType[];