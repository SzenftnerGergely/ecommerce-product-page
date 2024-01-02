import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

type Image = {
  name: string;
  src: string;
};

const ImageGallery = () => {
  const images = [
    { name: 'img1', src: '/image-product-1.jpg' },
    { name: 'img2', src: '/image-product-2.jpg' },
    { name: 'img3', src: '/image-product-3.jpg' },
    { name: 'img4', src: '/image-product-4.jpg' },
  ]

  const [bigImage, setBigImage] = useState(images[0].src)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const handleSmallImageClick = (image: string) => {
    setBigImage(image)
  }

  return (
    <div>

      <div className="overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img
          src={bigImage}
          alt='Photo'
          className='h-full w-full object-center object-cover'
          onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}
        />

        {/* Modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box sm:w-2/5 max-w-5xl max-h-[90vh] bg-opacity-0 p-0 shadow-none">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost hover:fill-[#ff7d1a] fill-white">
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd" /></svg>
              </button>
            </form>
            <p className="flex flex-col justify-center relative">

              <Swiper
                spaceBetween={10}
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                  disabledClass: "swiper-button-disabled"
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='w-80 max-h-[70vh] sm:w-full rounded-lg'
              >
                <div className="swiper-button image-swiper-button-next">
                  <IoIosArrowForward />
                </div>
                <div className="swiper-button image-swiper-button-prev">
                  <IoIosArrowBack />
                </div>
                {images.map((image: Image, index: number) => (
                  <SwiperSlide key={index}>
                    <div className='flex max-h-fit w-full items-center justify-center'>
                      <img
                        src={image.src}
                        alt='photo'
                        className='h-fit w-full object-cover select-none'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnail */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={16}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='hidden sm:block thumbs mt-3 h-fit w-3/4 rounded-lg'
              >
                {images.map((image: Image, index: number) => (
                  <SwiperSlide key={index}>
                    <button className='flex items-center justify-center'>
                      <img
                        src={image.src}
                        className='select-none'
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

            </p>
          </div>
        </dialog>

      </div>

      <div className='order-last flex gap-4'>
        {images.map((image: Image, idx: number) => (
          <div
            key={idx}
            className={`overflow-hidden rounded-lg bg-gray-100
              ${image.src == bigImage ? 'border-2 border-[#ff7d1a] opacity-100' : ""}`}
          >
            <img
              src={image.src}
              alt='photo'
              className={`h-full w-full object-cover object-center cursor-pointer
              ${image.src == bigImage ? 'opacity-35 hover:opacity-35' : ""} hover:opacity-70`}
              onClick={() => handleSmallImageClick(image.src)}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default ImageGallery