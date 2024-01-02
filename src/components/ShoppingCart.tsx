import { useShoppingCart } from "use-shopping-cart"
import CartItem from './CartItem'

const ShoppingCart = () => {
  const {
    cartCount,
    cartDetails,
  } = useShoppingCart();

  return (
    <>
      <div className="dropdown dropdown-end">
        <label htmlFor="" tabIndex={0} className="btn-ghost btn-circle btn">
          <div className="indicator">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
            <span className="badge badge-sm indicator-item bg-[#ff7d1a] text-white border-none">
              {cartCount || 0}
            </span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="card dropdown-content card-compact mt-3 rounded-xl
          w-[21rem] bg-base-100 shadow z-30 -left-[15rem]"
        >
          <div className="card-body bg-white">
            <div className='font-bold text-lg text-black border-b border-b-gray-300 w-full pb-3'>Cart</div>
            <div className="card-actions flex items-center justify-center m-auto">
              {cartCount && cartCount > 0 ? (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <CartItem key={entry.id} item={entry} id={''} quantity={0} value={0} formattedValue={''} name={''} price={0} currency={''} />
                  ))}
                </>
              ) : (
                <div className="h-36 flex items-center text-gray-400 text-xl">Your cart is empty</div>
              )}
              <div
                className="btn btn-block bg-[#ff7d1a] text-white border-none hover:opacity-70 hover:bg-[#ff7d1a]"
              >
                Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart