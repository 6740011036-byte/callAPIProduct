import Image from "next/image"

interface ProductItem {
    id: number;
    title: string;
    price: number;
    image: string
}

interface ProductProps {
    product: ProductItem
}
const ProductCard = ({ product }: ProductProps) => {
    return (
        <>
            <div className="border-2 rounded-2xl border-gray-300 p-3 mt-4">

                <div className="flex flex-col items-center ">
                    <Image
                        src={product.image}
                        alt="product"
                        width={100}
                        height={200}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="text-xs font-bold mt-2 text-center">{product.title}</h2>
                    <div className="flex gap-2 items-end mt-4">
                        <h2 className="text-xs font-bold text-blue-300">{product.price}</h2>
                        <button className="rounded-2xl bg-blue-400 p-1">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard