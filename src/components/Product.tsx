import AddToCart from './AddToCart';
import ImageGallery from './ImageGallery';

type ProductData = {
    name: string;
    description: string;
    id: string;
    price: number;
    images: string[];
    currency: string;
  };
  
  type ProductProps = {
    product: ProductData;
  };

  const Product: React.FC<ProductProps> = ({ product }) => {
    const { name, price, description, images, id } = product

    return (
        <div className='bg-white mb-12 pb-12'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8 sm:mt-28'>
                <div className='grid gap-8 md:gap-36 md:grid-cols-2'>
                    <ImageGallery />

                    <div className='md:py-8'>

                        <p className='text-[#ff7d1a] uppercase font-semibold mb-3'>Sneaker Company</p>

                        <div className='mb-2 md:mb-3'>
                            <h2 className='text-xl font-bold text-gray-800 lg:text-5xl'>{name}</h2>
                        </div>

                        <p className='mt-12 mb-10 text-base text-gray-500 tracking-wide'>
                            {description}
                        </p>

                        <div className='mb-4 flex justify-between items-center sm:flex-col sm:items-baseline gap-3'>
                            <div className='flex items-center gap-5'>
                                <div className='text-xl font-bold text-gray-800 md:text-3xl'>
                                    ${(price * 0.5).toFixed(2)}
                                </div>
                                <div className='font-semibold text-[#ff7d1a] bg-[#ffefe2] px-1.5 py-0.5 rounded-md'>
                                    {50}%
                                </div>
                            </div>
                            <div className='font-bold text-gray-300 line-through mb-4'>
                                ${(price).toFixed(2)}
                            </div>
                        </div>

                        <AddToCart
                            sku={id}
                            currency='USD'
                            description={description}
                            image={images[0]}
                            name={name}
                            price={price * 0.5}
                            key={id}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product