'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div>
      <Swiper
        watchSlidesProgress
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-64 sm:h-80 md:h-96 lg:h-[40rem] "
      >
        <SwiperSlide className="relative w-full">
          <div className="absolute z-10 mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8 md:ml-20 md:mt-20 lg:ml-40">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-semibold  text-orange-200">
              Thể hiện góc nhìn đa chiều <br /> của thế hệ trẻ Việt Nam
            </h2>
            <p className="text-md sm:text-2xl lg:text-4xl mt-4 text-orange-300">
              Chia sẽ - kết nối - trao đổi <br />
              Tại S-BLOG
            </p>
          </div>
          <Image src="/book3.jpg" alt="" priority={true} fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/book4.jpg" alt="" priority={true} fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/book1.jpg" alt="" priority={true} fill className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
