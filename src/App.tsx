import Navbar from "./components/Navbar"
import Product from "./components/Product"

const fakeData = {
  name: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  id: 'test1',
  price: 250,
  images: [
    '/image-product-1.jpg'
  ],
  currency: 'USD'
}


function App() {

  return (
    <>
      <div className="h-screen bg-white">
        <Navbar />
        <Product product={fakeData} />
      </div>
    </>
  )
}

export default App
