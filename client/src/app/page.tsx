import ProductList from "@/components/web/ProductList"


const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {

  const category = (await searchParams).category

  return (
    <div className="">
      <ProductList params="homepage" category={category} />
    </div>
  )
}

export default Homepage