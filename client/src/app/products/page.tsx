
import ProductList from "@/components/web/ProductList"

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
    const category = (await searchParams).category

    return (
        <div>
            <div className="">
                <ProductList params="products" category={category} />
            </div>
        </div>
    )
}

export default ProductsPage