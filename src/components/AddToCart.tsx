import { useState } from "react"
// @ts-ignore
import { useShoppingCart } from "use-shopping-cart"

interface ProductCart {
  name: string,
  description: string,
  price: number,
  currency: string,
  image: string,
}

const AddToCart = ({ currency, description, image, name, price}: ProductCart) => {

  const { addItem } = useShoppingCart()
  const [quantity, setQuantity] = useState(0)
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    addItem(product, { count: quantity })
    setQuantity(1)
  }

  return (
    <div className="sm:flex w-full sm:justify-between gap-4">
      <div className="flex text-black flex-col gap-3 py-4 
        bg-[#f7f8fd] rounded-lg text-center sm:w-1/3 mb-5
        sm:mb-0">
        <div className="flex justify-around items-center">
          <button
            onClick={decreaseQuantity}
            className="hover:opacity-70 text-2xl font-bold
            rounded-full transition-all duration-500 text-[#ff7d1a]"
          >
            -
          </button>
          <span className="text-center font-bold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="hover:opacity-70 text-2xl font-bold
            rounded-full transition-all duration-500 text-[#ff7d1a]"
          >
            +
          </button>
        </div>
      </div>
        <button
          onClick={() => addToCart()}
          className="w-full sm:w-2/3 bg-[#ff7d1a] hover:opacity-70 hover:text-white 
          transition-all duration-500 text-white rounded-lg shadow-md flex 
          items-center justify-center gap-4 font-semibold py-4 sm:py-0"
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg>
          <p>Add to cart</p>
        </button>
    </div>
  )
}

export default AddToCart
