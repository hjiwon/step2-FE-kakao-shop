import StarRating from "./StarRating"
import Button from "../atoms/Button"

const ProductDetail = ({product}) => {
  return (
    <div className="flex">
      <img src={`/assets/${product.image}`}  alt={product.name} className="w-60 h-60 rounded-lg" />
      <div>
        <StarRating starCount={product.starCount} />
        <div className="pb-1 text-xl">{product.productName}</div>
        <Button className="bg-yellow-300 rounded-full flex flex-column align-center w-32 py-3 justify-center">
          <div className="flex font-bold text-sm">
            <span>톡딜가</span>
            <div className="mx-1">{product.price}</div>
            <span> 원 ~</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default ProductDetail;