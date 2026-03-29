

import { ProductType } from "@/types"
import Image from "next/image"

import SingleProductCard from "@/components/web/SingleProductCard"


// TEMPORARY
const product: ProductType = {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.99,
    sizes: ["xs", "s", "m", "l", "xl"],
    colours: ["gray", "purple", "green"],
    images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
    },
};

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {

    // needed for SEO optimization
    return {
        title: product.name,
        description: product.description,
    }
}


export default async function ProductPage({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ colour: string, size: string }> }) {
    // const { id } = await params;
    const { colour, size } = await searchParams;
    const selectedColour = (colour || product.colours[0])
    const selectedSize = (size || product.sizes[0])



    return (
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
            <div className="w-full lg:w-5/12 flex flex-col">
                {/* product images */}
                <div className="relative w-full aspect-[2/3]">
                    <Image src={product.images[selectedColour]} alt={product.name} fill className="object-contain rounded-md" />
                </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-8">
                {/* product details */}
                <SingleProductCard product={product} selectedColour={selectedColour} selectedSize={selectedSize} />

            </div>
        </div>
    )
}